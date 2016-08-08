var args = $.args;
var message = args.message;

$.message.text = message;

if(args.type !== undefined) {
	if(args.type === 'verify') {
		$.logo.image = WPATH('/images/verified.png');
	}
}

$.getNotification = function() {
	return $.inappNotification;
};
