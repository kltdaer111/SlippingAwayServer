var pomelo = require('pomelo');
var logger = require('pomelo-logger').getLogger(__filename);

var exp = module.exports;

exp.pushMessageToConnection = function (con, route, msg) {
	pomelo.app.get('channelService').pushMessageByUids(route, msg, con.session_id, errHandler);
};

exp.pushMessageToPlayer = function (player, route, msg) {
	exp.pushMessageToConnection(player.con, route, msg);
};

// exp.pushMessageByAOI = function (area, msg, pos, ignoreList) {
//   var uids = area.timer.getWatcherUids(pos, [EntityType.PLAYER], ignoreList);

//   if (uids.length > 0) {
//     exp.pushMessageByUids(uids, msg.route, msg);
//   }
// };

function errHandler(err, fails){
	if(!!err){
		logger.error('Push Message error! %j', err.stack);
	}
}