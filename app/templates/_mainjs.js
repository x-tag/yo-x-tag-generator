(function(){

<% if (componentType == 'Element'){ %>

  xtag.register('<%= tagName %>', {
  	lifecycle: {
  		created: function(){

  		}
  	},
  	events: {},
  	accessors: {},
  	methods: {}
  });

<% } else if (componentType == 'Mixin') { %>

  xtag.mixin['<%= tagName %>'] = {
    events: {},
    accessors: {},
    methods: {}
  };

<% } else if (componentType == 'Pseudo') { %>

  xtag.pseudos['<%= tagName %>'] = {
  	action: function(pseudo, e){

  	},
  	onRemove: function(pseudo){

  	},
  	onAdd: function(pseudo){

  	}
  };

<% } else if (componentType == 'Library') { %>

  window['<%= tagName %>'] = {

  };

<% } %>

})();
