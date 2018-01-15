require("multimap")

var frame = function(INTERVAL){
	this.interval = INTERVAL;
	this.cur_idx = 0;
	this.total_frame = 0;
	this.players_need_sync = [];
	this.data = new multimap;
}

