$(function(){
	$('input').keyup(function(){
		var allInput = $('input')
		var inArr = []
		for (var i = 0; i < allInput.length; i++) {
			inArr.push($('input:eq('+i+')').val().length)
		};
		if(inArr.sort()[0]===0){

		} else {
			$('p').fadeIn(750)
		}
	});
});