function multimap(){
	this.mm = {}
}

multimap.prototype.set = function(key, value){
	if(this.mm[key] === undefined){
		this.mm[key] = []
	}
	this.mm[key].push(value)
}

multimap.prototype.copy = function(){
	var res = {};
	for(var key in this.mm){
		res[key] = [];
		for(var idx in this.mm[key]){
			res[key].push(this.mm[key][idx]); 
		}
	}
	return res;
}