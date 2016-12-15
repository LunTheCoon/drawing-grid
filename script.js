
$(document).ready(function () {
	$('button').on('click', function () {
		var grid = prompt('How big do you want the grid?');
		$('.unit').remove();
		for (var x = 0; x < grid; x++) {
			for (var y = 0; y < grid; y++) {
				$('<div />', {'class' : 'unit'}).appendTo('.div-main');
			};
		};
		var unit = Math.round(Math.sqrt(640000 / grid / grid));
		var div = unit * grid 
		$('.unit').css({'height' : unit, 'width' : unit});
		$('.div-main').css({'height' : div, 'width' : div});
		$('.div-main').addClass('border');
		$('.unit').on('mouseenter', function () {
			$(this).css({'background-color' : ranCol()});
		});
	});


var ranCol = function () {
	var ranCol = '#'
	var array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
	for (i=0; i<6; i++) {
		ranCol+=array[Math.round((Math.random()*16)+1)];
	}
	return ranCol
}

















});






