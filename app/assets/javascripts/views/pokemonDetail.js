Pokedex.Views.PokemonDetail = Backbone.View.extend({
  initialize: function(){
    this.collection = new Pokedex.Collections.Pokemon();
    this.listenTo(this.model, "sync", this.render);
  },

  events : {
    "click li": "selectToyFromList"
  },

  template: JST["pokemonDetail"],

  render: function(){
    var content = this.template({pokemon: this.model});
    this.$el.html(content);
    var $el = this.$el;
    this.model.toys().each(function(toy){
      var toyLi = JST["toyListItem"]({toy: toy});
      $el.find($("ul.toys")).append(toyLi);
    });
    return this;
  },

  selectToyFromList : function(event){
    event.preventDefault();
    var toyId = $(event.currentTarget).data("toy-id");
    var toy = this.model.toys().get(toyId);
    var toyView = new Pokedex.Views.toyDetail({model: toy});
    $("#pokedex .toy-detail").html(toyView.render().$el);
  }
});
