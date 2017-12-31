$(function(){
	$('.description').click(function(){
		$(this).next('.hidden').slideToggle(600);
		var $arrow = $(this).html()
		if ($arrow == '<i class="fa fa-arrow-circle-down" aria-hidden="true"></i>'){
			$(this).html('<i class="fa fa-arrow-circle-up" aria-hidden="true"></i>')
		}
		else{
			$(this).html('<i class="fa fa-arrow-circle-down" aria-hidden="true"></i>')
		}
		var m = $('.b-1').height();
		$('.b-1').height(m)
		$('.b-2').height(m)
		$('.b-3').height(m)
	})
})
$(function(){
	$('.mail').click(function(){
		$('#email_hidden').css('display', 'block')
		new Clipboard('.mail');
		function delay(){
			$('#email_hidden').css('display', 'none')
		}
		setTimeout(delay, 100);
		alert('E-mail copied')
	})
})