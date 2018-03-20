var idtransformer = function(){
	this.data = {}
}

idtransformer.prototype.register = function(type, communicationid, entityid){
	if(this.data[type] === undefined)
		this.data[type] = {};
	this.data[type][communicationid] = entityid;
}

idtransformer.prototype.unregister = function(type, communicationid){
	delete this.data[type][communicationid];
}


idtransformer.prototype.getEntityid = function(type, communicationid){
	return this.data[type][communicationid];
}

