import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { Observable } from 'rxjs/Observable';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  personas : Persona[];
  cosas : Boolean;
  
  constructor(
    private personaService: PersonaService
  ) { }
  
  ngOnInit() {
    this.getPersonas();
  }
  
  getPersonas(): void {
    // this.personaService.getPersonas().subscribe(personas => this.personas = personas);;
    this.personas = this.personaService.getPersonas();
  };
  
  pasarDatos(): void {
    if (this.personas != null){
      this.personas = null;
      this.cosas = false;
    } else {
      this.getPersonas();
      this.cosas = true;
    }
  }
  
}
