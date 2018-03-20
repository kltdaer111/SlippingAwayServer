var entitymap = require("../../entity/entitymap.js")

module.exports = function syncSystem(){

}

syncSystem.prototype.init = function(){

}


syncSystem.prototype.onAction = function(time, action, playerid){
	curFrame.set(time, action);
}

syncSystem.prototype.update = function(time_step){
	for(var id in entitymap.map){
		if(entitymap.map[id].framedata !== undefined){
			var frame_data = entitymap.map[id].framedata;
			while(this.addInterval(time_step, frame_data)){	//set to next frame
				this.notifyClientLatesetFrameAction(frame_data);
				this.jumpNext(frame_data);
			}
		}
	}
}

syncSystem.prototype.addInterval = function(interval, frame_data){
	frame_data.cur_idx += interval;
	if(frame_data.cur >= frame_data.interval){
		return true;
	}
	return false;
}

syncSystem.prototype.jumpNext = function(frame_data){
	var rest = frame_data.cur - frame_data.interval;
	if(rest < 0)
		return;
	frame_data.cur_idx = rest;
	frame_data.total_frame += 1;
	frame_data.data = new multimap;
}

syncSystem.prototype.notifyClientLatesetFrameAction = function(frame_data){
	var action_data = frame_data.data.copy();
	for(var idx in frame_data.players){
		var player_id = frame_data.players[idx];
		//TODO async send frame_data.data
	}
}