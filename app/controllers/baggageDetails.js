// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function closeDetails() {
	$.baggageDetails.close();
}

function addBags() {
	var data = [];
	for(var x=0; x<3; x++) {
		var row = Ti.UI.createTableViewRow({
			layout		: 'absolute',
			height		: 72,
		});
		
		var title = Ti.UI.createLabel({
			top			: 17,
			left		: 20,
			text		: 'Bag ' + (x+1),
			color		: '#EE0000',
			font		: {
				fontSize	: 18,
				fontFamily	: 'BrauerNeueStd-Regular',
			}
		});
		row.add(title);
		
		var bagTag = Ti.UI.createLabel({
			text	: 'Bag Tag : QF8224517',
			color	: '#000',
			left	: 20,
			bottom	: 17,
			font	: {
				fontFamily	: 'AkkuratPro-Regular',
				fontSize	: 15,
			}
		});
		row.add(bagTag);
		
		var barCode = Ti.UI.createImageView({
			right		: 10,
			height		: 54,
			image		: '/images/barCode.png'
		});
		row.add(barCode);
		
		data.push(row);
	}
	
	$.bags.data = data;
}
addBags();
