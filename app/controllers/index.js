Titanium.App.iOS.registerUserNotificationSettings({
	types: [
            Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT,
            Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND,
            Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE
        ]
});

function askForBaggageCheck() {
	Alloy.createController('baggageCheck', {
		callback	: verifyBagCount
	}).getView().open();
}

function verifyBagCount(count) {
	if(count > 0) {
		showCollectTagsAlert(function() {
			showBoardingPass(true);
		});
	} else {
		showBoardingPass(false);
	}
}

function showCollectTagsAlert(callback) {
	var alert = Alloy.createWidget('com.iamdifferent.infoAlert', {
		title		: 'Baggage Tags',
		message		: 'Please collect your baggage tags at the baggage drop area. This is 400m to your left.',
		action		: 'THANKS!',
		callback	: callback
	});
	alert.show();
}

function showBoardingPass(showBaggageButton) {
	$.nextTripCard.animate({
		right		: 1000,
		duration	: 100,
	});
	
	$.container.remove($.nextTripCard);
	
	$.cardLabel.text = 'Your Boarding Pass';
	var boardingClass = Alloy.createWidget('com.iamdifferent.boardingpass');
	$.container.add(boardingClass.getBoardingPass());
	
	if(showBaggageButton === true) {
		boardingClass.showBaggage();
	}
	
	/*
	var suggest = Alloy.createWidget('com.iamdifferent.suggestions');
	$.container.add(suggest.getSuggestions());*/
	
	// proceed to SC
	setTimeout(function() {
		var notification = Alloy.createWidget('com.iamdifferent.inappnotification', {
			message	: 'Thanks for checking in your bags. You can now proceed to Security Check.'
		});
		
		var notify = notification.getNotification();
		$.container.add(notify);
		
		// proceed to SC
		Ti.App.iOS.scheduleLocalNotification({
			alertBody	: 'Thanks for checking in your bags. You can now proceed to Security Check.',
			badge		: 0,
			date		: new Date(new Date().getTime() + 500)
		});
		
		setTimeout(function() {
			$.container.remove(notify);
		}, 4000);
	}, 2000);
	
	// say their flight has started boarding
	Ti.App.iOS.scheduleLocalNotification({
		alertBody	: 'Your flight has started boarding from Gate 6.',
		badge		: 0,
		date		: new Date(new Date().getTime() + 8000)
	});
	
	// assume they didn't go to SC and are wandering about
	setTimeout(giveFastPass, 6000);
}

function giveFastPass() {
	var notification = Alloy.createWidget('com.iamdifferent.inappnotification', {
		message	: 'Proceed to Gate 6 for boarding immediately.',
	});
	
	var notify = notification.getNotification();
	$.container.add(notify);
	setTimeout(function() {
		$.container.remove(notify);
		addVerification();
	}, 30000);
	
	var security = Alloy.createWidget('com.iamdifferent.fastpass');
	var pass = security.getPass();
	$.container.add(pass);
	
	Ti.App.iOS.scheduleLocalNotification({
		alertAction	: 'get assistance',
		alertBody	: 'You are late for your flight. You just received a security check Fast Pass',
		badge		: 0,
		date		: new Date(new Date().getTime() + 8000)
	});
	
	setTimeout(function() {
		$.container.remove(pass);
	}, 20000);
}

function addVerification() {
	var notification = Alloy.createWidget('com.iamdifferent.inappnotification', {
		message	: 'Approved for Boarding',
		type	: 'verify'
	});
	
	var notify = notification.getNotification();
	$.container.add(notify);
}

$.index.open();

askForBaggageCheck();