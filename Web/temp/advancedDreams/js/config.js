$(document).ready(function(e) {
	
	///MAIN VARIABLES
	var mainContainer = $('.mainContainer');
	var infoContainer = $('.infoContainer')
	var infoText = "<strong>Em Desenvolvimento</strong><br><br>Encontramo-nos em fase de densenvolvimento, se desejar receber notícias nossas, por favor submeta o seu email em baixo.";
	var finalText = "Obrigado!";
	var newElement;
	
	///FADE ELEMENTS
	function fadeObject(fadeIn,element,remove){
		
		if(fadeIn){
			$(element).animate({opacity:1},200);
		}else{
			$(element).animate({opacity:0},200,function(){if(remove){$(element).remove();}});
		}
		
	}
	
	fadeObject(true,mainContainer);
	
	
	/// MORE INFO CLICK
	$('.infoButton').click(function() {
        
		mainContainer.append('<div class="moreInfo"><ul><li>'+infoText+'</li><li class="userEmail"><input id="userEmail" type="email" name="userEmail" placeholder="eMail..."/></li><li class="submitButton">Submeter</li></ul></div>');
		
		newElement = $('.moreInfo');
		
		fadeObject(false,infoContainer,false);
		fadeObject(true,newElement,false);
		
		$('.submitButton').click(enterEmail);
			
		
    });
	
	//// SUBMIT EMAIL
	function enterEmail(){
		
		if(validateEmail($('#userEmail').val())){
		
			$('.userEmail, .submitButton').remove();
			$('.moreInfo ul li').html(finalText);
			
			setTimeout(function(){
				
				fadeObject(false,newElement,true);
				fadeObject(true,infoContainer,false);
			
			},3000);
		
		}else{
			
			$('#userEmail').css('border','1px solid red');
			$('#userEmail').attr('placeholder', 'email inválido');
			$('#userEmail').val('email inválido');
			
		}
		
	}
	
	/// VALIDATE EMAIL
	function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	
	
});