$(document).ready(function(e) {
    
	// Get User Info
	
	var username;
	var userlastname;
	var useremail;
	var useradress;
	var userfactadress;
	var userphone;
	var usernewsletter;
	var usernif;
	var userpassoword;
	
	function getUserInfo(useremail){
	
		$.ajax({
			type: "POST",   
			url: "config/userinfo.php",
			data:{ useremail:useremail},
			
				success: function(data) { 
				
				  var userinfo = data.split('%');
				  
				  username = userinfo[0];
				  userlastname = userinfo[1];
				  useremail = userinfo[2];
				  useradress = userinfo[3];
				  userfactadress = userinfo[4];
				  userphone = userinfo[5];
				  usernif = userinfo[6];
				  usernewsletter = userinfo[7];
				  
				  
				}
				
			}).done(function(){
				
				 console.log(username+' '+userlastname+' / '+useremail+' / '+useradress+' / '+userfactadress+' / '+userphone+' / '+usernewsletter+' / '+usernif);
	  
		  });	
		  	
	}
	
	
	getUserInfo('nunomtrodrigues@gmail.com');
	
	
	/// MAIN INTERACTIONS
	
	///MENU
	
	var menuItem;
	var sectionOn;
	
	$('nav a').click(function(e) {
       	 
		 sectionOn = e.target.id;
		 menuItem = sectionOn.split('_')[0];
		 
		 $('nav a').removeClass('menuItemActive');
		 
		$('#'+sectionOn).addClass('menuItemActive');
		
		$('body,html').animate({scrollTop:$('#'+menuItem).position().top-$('.menu-container').height()},1000);
		
    });
	
	///BACK HOME
	$('.logo').click(function() {
        
		$('body,html').animate({scrollTop:0},1000);
		
    });
	
	/// GALERY BTN FROM SLOGAN
	$('.galeryBtn').click(function(){
		
		$('body,html').animate({scrollTop:$('#galery').position().top-$('.menu-container').height()},1000);
		
	});
	
	
	//// ORDERS WIDGET
	var selection;
	var stepsWidth = $('.steps').width()+20;
	var fillOptions;
	var orderWhat = ['Bolo','Cupcakes','Cakepop','Cookies','Toppers'];
	var cakeTypes = ['Pão de ló','Iogurte','Chocolate','Noz','Red Velvet','Cenoura','Laranja'];
	var cakeFills = ['Creme de ovos','Creme de ovos com amêndoa','Brigadeiro','Ganache de Chocolate leite','Ganache de Chocolate negro','Moka','Curd de frutos vermelhos','Curd de Limão','Cream Cheese','Doce de leite','Creme de manteiga','Frutos vermelhos c/ mascarpone'];
	var cookiesFills = ['Manteiga','Canela','Limão','Gengibre'];
	var toppersFills = ['Sim','Não'];
	
	var finalOrder = [];
	var numbOrders = 0;
	
	
	///BUILD FIRST SELECTION
	for(	var i=0; i < orderWhat.length; i++){
		
		$('#step1-selection').append('<option>'+orderWhat[i]+'</option>');
		
	}
	
	//// SELECTIONS CHANGE EVENTS
	
	$('select').change(selectsChange);
	
	function selectsChange(e) {
        
		switch(e.target.id){
			
			case 'step1-selection':
			
				selection = this;
				
				if(document.getElementsByClassName('step4').length !== 0){
								
					$('.step4, .step3, .step2').remove();
						
				}else if(document.getElementsByClassName('step3').length !== 0){
					
					$('.step3, .step2').remove();
					
				}else if(document.getElementsByClassName('step2').length !== 0){
					
					$('.step2').remove();
					
				}
				
				if(selection.options[selection.selectedIndex].value !== selection.options[0].value){ /// IF IS NOT THE FIRST OPTION OF THE SELECTION
					
					$('.steps').animate({width:stepsWidth*2},function(){
						
						if(selection.options[selection.selectedIndex].value === orderWhat[0] || selection.options[selection.selectedIndex].value === orderWhat[2]){
	
							fillOptions = cakeTypes;

							if(document.getElementsByClassName('step2').length !== 0){
								
								$('.step2').html('').append('<ul><li><span>2</span><span>De?</span><hr></li></ul><select id="step2-selection"><option>selecione uma opção...</option></select>');
								$('#step2-selection').change(selectsChange);
								
							}else{
								
								$('.steps').append('<div id="step2" class="step2"><ul><li><span>2</span><span>De?</span><hr></li></ul><select id="step2-selection"><option>selecione uma opção...</option></select></div>');
								$('#step2-selection').change(selectsChange);
									
							}
		
							for(var i=0; i < fillOptions.length; i++){
									
								$('#step2-selection').append('<option>'+fillOptions[i]+'</option>');
									
							}
						
						}else if(selection.options[selection.selectedIndex].value === orderWhat[1]){
							
							if(document.getElementsByClassName('step2').length !== 0){
								
								$('.step2').html('').append('<ul><li><span>2</span><span>Agora é</span><hr></li></ul><div class="finish-order">Adicionar à lista</div>');
								$('.finish-order').click(closeOrder);
								
							}else{
								
								$('.steps').append('<div id="step2" class="step2"><ul><li><span>2</span><span>Agora é</span><hr></li></ul><div class="finish-order">Adicionar à lista</div></div>');
								$('.finish-order').click(closeOrder);
									
							}
							
						}else if(selection.options[selection.selectedIndex].value === orderWhat[3]){
							
							fillOptions = cookiesFills;
							
							if(document.getElementsByClassName('step2').length !== 0){
								
								$('.step2').html('').append('<ul><li><span>2</span><span>De?</span><hr></li></ul><select id="step2-selection"><option>selecione uma opção...</option></select>');
								$('#step2-selection').change(selectsChange);
								
							}else{
								
								$('.steps').append('<div id="step2" class="step2"><ul><li><span>2</span><span>De?</span><hr></li></ul><select id="step2-selection"><option>selecione uma opção...</option></select></div>');
								$('#step2-selection').change(selectsChange);
									
							}
							
							for(var f=0; f < fillOptions.length; f++){
									
								$('#step2-selection').append('<option>'+fillOptions[f]+'</option>');
									
							}
							
						}else if(selection.options[selection.selectedIndex].value === orderWhat[4]){
							
							fillOptions = toppersFills;
							
							if(document.getElementsByClassName('step2').length !== 0){
								
								$('.step2').html('').append('<ul><li><span>2</span><span>Pasta de açucar?</span><hr></li></ul><select id="step2-selection"><option>selecione uma opção...</option></select>');
								$('#step2-selection').change(selectsChange);
								
							}else{
								
								$('.steps').append('<div id="step2" class="step2"><ul><li><span>2</span><span>Pasta de açucar?</span><hr></li></ul><select id="step2-selection"><option>selecione uma opção...</option></select></div>');
								$('#step2-selection').change(selectsChange);
									
							}
							
							for(var t=0; t < fillOptions.length; t++){
									
								$('#step2-selection').append('<option>'+fillOptions[t]+'</option>');
									
							}
							
						}
						
					});
					
				}
	
			break;
			
			case 'step2-selection':
				
				if(selection.options[selection.selectedIndex].value !== selection.options[0].value){
					
					$('.steps').animate({width:stepsWidth*3},function(){
						
						if(selection.options[selection.selectedIndex].value === orderWhat[0]){
							
							if(document.getElementsByClassName('step3').length !== 0){
								
								$('.step3').html('').append('<ul><li><span>3</span><span>Recheio de?</span><hr></li></ul><select id="step3-selection"><option>selecione uma opção...</option></select>');
								$('#step3-selection').change(selectsChange);
								
							}else{
								
								$('.steps').append('<div class="step3"><ul><li><span>3</span><span>Recheio de?</span><hr></li></ul><select id="step3-selection"><option>selecione uma opção...</option></select></div>');
								$('#step3-selection').change(selectsChange);
								
							}
								
							for(var i=0; i < cakeFills.length; i++){
								
								$('#step3-selection').append('<option>'+cakeFills[i]+'</option>');
								
							}
						
						}else{
							
							if(document.getElementsByClassName('step3').length !== 0){
								
								$('.step3').html('').append('<ul><li><span>3</span><span>Agora é</span><hr></li></ul><div class="finish-order">Adicionar à lista</div>');
								$('.finish-order').click(closeOrder);
								
							}else{
								
								$('.steps').append('<div id="step3" class="step3"><ul><li><span>3</span><span>Agora é</span><hr></li></ul><div class="finish-order">Adicionar à lista</div></div>');
								$('.finish-order').click(closeOrder);
									
							}
							
						}
						
					});
					
				}
				
			
			break;
			
			case 'step3-selection':
				
				$('.steps').animate({width:stepsWidth*4},function(){	
					
					if(document.getElementsByClassName('step4').length !== 0){
									
							$('.step4').html('').append('<ul><li><span>4</span><span>Agora é</span><hr></li></ul><div class="finish-order">Adicionar à lista</div>');
							$('.finish-order').click(closeOrder);
									
					}else{
									
							$('.steps').append('<div id="step4" class="step4"><ul><li><span>4</span><span>Agora é</span><hr></li></ul><div class="finish-order">Adicionar à lista</div></div>');
							$('.finish-order').click(closeOrder);
										
					}
					
					
				});
			
			break;
	
		}
		
		
    }
	
	//// FINALIZE ORDER
	function closeOrder(){
		
		//// ORDERS VALUES TO WRITE ORDERS LIST
	    var step1Val;
		var step2Val;
		var step3Val;	
		var orderText;
		
		if(selection.options[selection.selectedIndex].value === orderWhat[0]){
			
			step1Val = $('#step1-selection').val();
			step2Val = $('#step2-selection').val();
			step3Val = $('#step3-selection').val();
		
			orderText = step1Val+' de '+step2Val+' com recheio de '+step3Val;
			finalOrder.push(orderText);
			
		}else if (selection.options[selection.selectedIndex].value === orderWhat[1]){
			
			step1Val = $('#step1-selection').val();
		
			orderText = step1Val;
			finalOrder.push(orderText);
			
		}else if (selection.options[selection.selectedIndex].value === orderWhat[2] || selection.options[selection.selectedIndex].value === orderWhat[3]){
			
			step1Val = $('#step1-selection').val();
			step2Val = $('#step2-selection').val();
		
			orderText = step1Val+' de '+step2Val;
			finalOrder.push(orderText);
			
		}else if (selection.options[selection.selectedIndex].value === orderWhat[4]){
			
			step1Val = $('#step1-selection').val();
			step2Val = $('#step2-selection').val();
			
			if(step2Val === 'Sim'){
				
				step2Val = 'com pasta de açucar';
				
			}else{
				
				step2Val = 'sem pasta de açucar';
				
			}
		
			orderText = step1Val+' de '+step2Val;
			finalOrder.push(orderText);
			
		}else{
			
			step1Val = $('#step1-selection').val();
			step2Val = $('#step2-selection').val();
		
			orderText = step1Val+' de '+step2Val;
			finalOrder.push(orderText);
			
		}
		
		
		/// START MY ORDERS LIST
		if(document.getElementsByClassName('myOrderList').length === 0){
			
			$('.orders-widget').append('<div class="myOrderList"><h1>As minhas encomendas</h1><ul><li class="addOrder">+</li><li class="orderNotes">Notas Adicionais</li><li class="orderList">Finalizar Encomenda</li></ul></div>');
			$('.myOrderList').animate({opacity:1},800);
			$('.addOrder').click(prepareNewOrder);
			$('.orderList').click(sendOrder);
		
		}
		
		/// ADD ORDER TO LIST
		var orderId = finalOrder.length;
		
		$('.myOrderList ul').prepend('<li id="order_'+orderId+'"><p>'+orderText+'</p></div><input type="number" name="people" min="1" max="100" placeholder="nº pessoas"/><input type="number" name="quantity" min="1" max="100" placeholder="Quantidade"/><span>x</span></li>');
		
		
		/// REMOVE ELEMENT IF CLICKED
		$('.myOrderList ul li span').click(function(e){removeOrder(e.target.parentNode.id);});
		
		$('.myOrderList ul li .order-note').click(function(e){addNote(e.target.parentNode.id);});
	
	}
	
	/// REMOVE ORDER
	function removeOrder(elementToRemove){
			
		var removeElement = elementToRemove.split('_')[1]-1;
		finalOrder.splice(removeElement,1);
		$('#'+elementToRemove).remove();
		
	}
	
	/// ADD NOTE
	
	var listOfNotes = [];
	
	function addNote(elementForNote){
		
		$('.order-note-window-container').css('display','inherit').css('opacity','0').animate({opacity:1},800);
		
	}
	
	$('.order-note-window-container .close-button').click(function() {  ///// CLOSE NOTE WINDOW
        
		$('.order-note-window-container').animate({opacity:0},800,function(){$('.order-note-window-container').css('display','none');});
		
    });
	
	$('.order-note-window-container .save').click(function() {
        
		//// save note
		
    });
	
	
	
	
	//// CLEAN FOR A NEW ORDER
	var prepareNewOrder = function(){
		
		$('.step2,.step3,.step4').remove();
		selection.selectedIndex = 0;
		$('.steps').animate({width:stepsWidth},800);
		
	};
	
	
	//// FINALIZE AND SEND ORDER AND STORAGE ON LOCALSTORAGE
	var finalOrderListPeopleNumb = [];
	var finalOrderListQtNumb = [];
	
	var sendOrder = function(){
		
		if(document.getElementsByClassName('myOrderList').length !== 0 && finalOrder.length > 0){
			
			for(var i=1; i < finalOrder.length+1; i++){
				
				finalOrderListPeopleNumb.push($('#order_'+i).find('input[name=people]').val());
				finalOrderListQtNumb.push($('#order_'+i).find('input[name=quantity]').val());
				
			}
			
			/// OPEN ORDER CONFIRMATION WINDOW
			
			orderConfirmation();
			
		}
		
	};
	
	
	//// ORDERS CONFIRMATION WINDOW
	
	function orderConfirmation(){
		
		var orderInformation = '';
		
		//// fazer um for com o finalOrder e construir a menssagem de encomenda
		
		for(var i=0; i < finalOrder.length; i++){
			
			orderInformation = orderInformation + '- '+finalOrderListQtNumb[i]+' '+finalOrder[i]+' para '+finalOrderListPeopleNumb[i]+' pessoas. <br>';
			
		}
		
		console.log(orderInformation);
		
	}
	
	
	/// EMAIL COMUNICATIONS
	
	var mailComunication = function(options){
		
		var userName;
		var userMail;
		var userPhone;
		var message;
		
		
		
	};
	
	
	//// STORE
	
	$.getJSON("data/store.json", function(json) {
    	
		console.log(json);
		
		var storeItems = json.store.items;
		var storeCategories = storeItems.categories.sort();
		
		/// BUILD FILTERS
		$(storeCategories).each(function(item) {
            $('.filterBox select').append('<option>'+storeCategories[item]+'</option>');
        });
		
		
		/// BUILD STORE ITEMS
		
		
		for(var i=0; i < storeItems.length; i++){
			
			$('.shopItems').append('<div class="pins shadow"><a><img src="'+storeItems.content[i].imgUrl+'"/></a><div class="shop-item-info"><div class="shop-item-title">'+storeItems.content[i].title+'</div><div class="shop-actions"><ul><li></li><li></li><li></li></ul></div></div></div>');
		}
		
		
		
		
	});
		
	
	
	
	
});
