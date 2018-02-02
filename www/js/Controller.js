var Controller = function() {
    var controller = {
        self: null,
        initialize: function() {
            self = this;
            this.bindEvents();
            self.renderSearchView();
        },

        bindEvents: function() {
        	$('.tab-button').on('click', this.onTabClick);
        },

        onTabClick: function(e) {
        	e.preventDefault();
            if ($(this).hasClass('active')) {
                return;
            }

            var tab = $(this).data('tab');
            if (tab === '#add-tab') {
                self.renderPostView();
            } else if (tab === '#search-tab') {
                self.renderSearchView();
            } else {
              self.renderCalculadoraView();
            }
        },

        renderCalculadoraView: function() {
            $('.tab-button').removeClass('active');
            $('#calculadora-tab-button').addClass('active');
            var $tab = $('#tab-content');
            $tab.empty();
              $("#tab-content").load("./views/calculadora-view.html", function() {

              });
        },

        renderPostView: function() {
            $('.tab-button').removeClass('active');
            $('#post-tab-button').addClass('active');

            var $tab = $('#tab-content');
            $tab.empty();
            $("#tab-content").load("./views/post-project-view.html", function(data) {
                $('#tab-content').find('#post-project-form').on('submit', self.postProject);
            });
        },

        renderSearchView: function() {
            $('.tab-button').removeClass('active');
            $('#search-tab-button').addClass('active');

            var $tab = $('#tab-content');
            $tab.empty();

            var $projectTemplate = null;
            $("#tab-content").load("./views/search-project-view.html", function(data) {
                $projectTemplate = $('.project').remove();
                // Load projects here
            });
        }
    }
    controller.initialize();
    return controller;
}
