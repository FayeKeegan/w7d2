Pokedex.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "pokemonIndex",
    "pokemon/:id" : "pokemonDetail"
  },

  pokemonIndex: function() {
    if (!this._pokemonIndex){
      this._pokemonIndex = new Pokedex.Views.PokemonIndex();
    }
    this._pokemonIndex.refreshPokemon();
    $("#pokedex .pokemon-list").html(this._pokemonIndex.$el);
  },

  pokemonDetail: function(id){
    this.pokemonIndex();
    var pokemon = this._pokemonIndex.collection.get(id);
    var pokemonView = new Pokedex.Views.PokemonDetail({model: pokemon});
    $("#pokedex .pokemon-detail").html(pokemonView.$el);
  }
});
