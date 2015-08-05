Pokedex.Views.PokemonIndex = Backbone.View.extend({
  initialize: function(){
    this.collection = new Pokedex.Collections.Pokemon();
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPokemonToList);
  },

  events: {
    "click li" : "selectPokemonFromList"
  },

  selectPokemonFromList: function (event) {
    var pokemonId = $(event.currentTarget).data("id");
    var pokemon = this.collection.get(pokemonId);
    pokemon.fetch();
    Backbone.history.navigate("pokemon/" + pokemonId, {trigger: true});

  },


  render: function(){
    var view = this;
    this.$el.empty();
    this.collection.forEach(function(pokemon){
      view.addPokemonToList(pokemon);
    });
    return this;
  },

  addPokemonToList: function(pokemon){
    var content = JST["pokemonListItem"]({pokemon: pokemon});
    this.$el.append(content);
  },

  refreshPokemon: function () {
    this.collection.fetch();
  }

});
