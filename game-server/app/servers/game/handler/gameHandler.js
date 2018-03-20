require('../../logic/frameSyc/frameSyncSystem.js')

module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

Handler.prototype.action = function(msg, session, next) {
	//TODO put action to this game's current frame
	frameSyncSystem.onAction(msg.time, msg.action, msg.gameid);
};