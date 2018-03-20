var entitiymap = function(){
	this.map = {};
	this.cur_id = 0;
}

module.exports = entitymap;

entitymap.prototype.addEntity = function(entity){
	entity_id += 1;
	this.map[entity_id] = entity;
	return entity_id;
}

entitymap.prototype.delEntity = function(entity_id){
	delete this.map[entity_id];
}