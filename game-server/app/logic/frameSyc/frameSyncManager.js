module.exports = function syncService(){

}

syncService.prototype.init = function(){
	this.Games = {};
}

syncService.prototype.addGame = function(game_id){
	this.Games.game_id = game_id;
}

syncService.prototype.onAction = function(action){
	
}