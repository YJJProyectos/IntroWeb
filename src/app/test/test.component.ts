import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { Observable } from 'rxjs/Observable';
import { PersonaService } from '../persona.service';
import { MouseEvent } from '@agm/core';

import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {
  
  personas : Persona[];
  cosas : Boolean;
  editPersona : Persona;
  
  getPersonas(): void {
    // console.log(this.personaService.getPersonas());
    this.personaService.getPersonas().subscribe(personas => this.personas = personas);
    // this.personas = this.personaService.getPersonas();
  };
  
  add(name: String): void {
    this.editPersona = undefined;
    name = name.trim();
    if (!name){
      return;
    }
    const newPersona: Persona = { name: name , lastName: "nuevo"} as Persona;
    this.personaService.addPersona(newPersona)
    .subscribe(persona => this.personas.push(persona));
    
  } 
  edit(persona: Persona){
    this.editPersona = persona;
  }
  
  update(){
    if (this.editPersona){
      this.personaService.updatePersona(this.editPersona)
      .subscribe(persona => {
      
        const ix = persona ? this.personas.findIndex(p => p.id === persona.id) : -1;
        if (ix > -1) { this.personas[ix] = persona; }
      });
      this.editPersona = undefined;
    }
  }

  delete(persona: Persona): void {
    this.personas = this.personas.filter(h => h !== persona);
    this.personaService.deletePersona(persona.id).subscribe();
    /*
    // oops ... subscribe() is missing so nothing happens
    this.personaService.deletepersona(persona.id);
    */
  }
  
  pasarDatos(): void {
    if (this.personas != null){
      this.personas = null;
      this.cosas = false;
    } else {
      this.getPersonas();
      this.cosas = true;
    }
  }
  
  
  
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  
  @ViewChild("search")
  public searchElementRef: ElementRef;
  
  constructor(
    private personaService: PersonaService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}
  
  ngOnInit() {
    this.getPersonas();
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    
    // Prueba de meter JavaScript puro en TypeScript
    // var message = "Hello World";
    // console.log(message);
    
    
    
    //create search FormControl
    this.searchControl = new FormControl();
    
    //set current position
    this.setCurrentPosition();
    
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          // var pyrmont = new google.maps.LatLng(0, 0);
          // var map = new google.maps.Map(document.getElementById('map'), {
          //   center: pyrmont,
          //   zoom: 15
          // });
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
    
    
  }
  
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 13;
      });
    }
  }
  
}



// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

