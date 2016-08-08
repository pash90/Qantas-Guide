$.getBoardingPass = function() {
	return $.boardingPass;
};

function showBaggage() {
	// show baggage
	Alloy.createController('baggageDetails').getView().open({
		modal	: true
	});
}

$.showBaggage = function() {
	$.baggageButton.show();
};
