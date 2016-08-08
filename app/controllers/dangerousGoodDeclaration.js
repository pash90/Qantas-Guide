// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var message = 'Do you have any dangerous items to declare?\n\nBy clicking on \‘Nothing to Declare\’ below, you agree that you are not carrying any kind of such items.\n\nIf you are not sure whether item(s) you are carrying are classified as dangerous or not, please click on \‘Need Assistance\’';

function setup() {
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
}

function needAssistance() {
	closeWindow();
	args.failure();
}

function noDeclaration() {
	closeWindow();
	args.success();
}

function closeWindow() {
	$.dangerousGoodDeclaration.close();
}
