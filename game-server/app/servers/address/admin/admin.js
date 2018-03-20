var systemarray = function(){
	this.array = [];
}

var entitiymap = function(){
	this.map = {};
	this.cur_id = 0;
}

var admin = function(){
	this.systemarray = new systemarray;
	this.entitymap = new entitymap;
}

module.exports = admin;

entitymap.prototype.addEntity = function(entity){
	entity_id += 1;
	this.map[entity_id] = entity;
	return entity_id;
}

entitymap.prototype.delEntity = function(entity_id){
	delete this.map[entity_id];
}