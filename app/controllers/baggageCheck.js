// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var baggageLabel = 'No of Bags :     ';
var noOfBags = 0;
var stepper = require('bencoding.stepper').createStepper({
	min			: 0,
	max			: 4,
	width		: 100,
	tintColor	: '#EE0000',
});

$.stepperView.add(stepper);

stepper.addEventListener('change', function(e) {
	$.stepperLabel.text = baggageLabel + e.value;
	
	noOfBags = e.value;
	
	if(e.value > 0) {
		$.primaryButton.applyProperties({
			backgroundColor		: '#EE0000',
			title				: 'GET  TAGS'
		});
	} else {
		$.primaryButton.applyProperties({
			backgroundColor		: '#D9323232',
			title				: 'NO  CHECK-IN  BAGGAGE'
		});
	}
});

function dismissAlert() {
	$.baggageCheck.close();
	
	args.callback(noOfBags);
}
