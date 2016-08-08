var args = $.args;

var title = args.title;
var message = args.message;
var buttonTitle = args.action;

function setup() {
	$.headerLabel.text = title;
	
	
	var attributedString = Ti.UI.iOS.createAttributedString({
		text		: message,
		attributes	: [
			{
				type	: Ti.UI.iOS.ATTRIBUTE_BASELINE_OFFSET,
            	value	: 1,
            	range	: [0,message.length]
			},
			{
				type	: Titanium.UI.ATTRIBUTE_FOREGROUND_COLOR,
            	value	: "#000",
            	range	: [0, message.length]
			},
			{
				type	: Titanium.UI.ATTRIBUTE_FONT,
				value	: {
					fontSize	: 16,
					fontFamily	: 'AkkuratLightProRegular'
				},
				range	: [0, message.length]
			}
		]
	});
	$.message.attributedString = attributedString;
	
	$.actionButton.title = buttonTitle;
	
	$.alert.open();
}

function dismissAlert() {
	$.alert.close();
	
	if(args.callback !== undefined) {
		args.callback();
	}
}

$.show = setup;