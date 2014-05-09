exports.register = function (plugin, options, next) {
	plugin.route({method: 'GET', path: '/plugin', handler: function(request, reply){
		reply('plugin app works');
	}});
}