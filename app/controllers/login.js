// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function authenticateUser() {
	$.loginButton.height = 0;
	$.indicator.show();
	
	var notification = Ti.App.iOS.scheduleLocalNotification({
		alertAction	: 'slide to view',
		alertBody	: 'Your boarding pass is almost ready. Would you like to check-in any luggage?',
		badge		: 1,
		date		: new Date(new Date().getTime() + 2000)
	});
	
	setTimeout(closeWindow, 1500);
}

function closeWindow() {
	$.login.close();
}