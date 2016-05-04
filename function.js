$(function() {



		    var datas = liste_clients.results;
			
			var contenu ='';
						for(i=0;i<datas.length;i++ ){
			contenu += '<div data-role="collapsible" data-content-theme="d" class="collapse">'+
                           ' '+'<h3>'+datas[i].nom_client+'</h3>'+
                           '<div class="margesinternes">'+
						   '<p>'+' Commande Numero:'+datas[i].id_commande+'<br>'+
                           '<p>'+' telephone:'+datas[i].tel_client+'<br>'+
		                   ' marque_voiture:'+datas[i].marque_voiture+'<br>'+
						   'modele_voiture :'+datas[i].modele_voiture+'<br>'+
						   'annee_voiture: '+datas[i].annee_voiture+'<br>'+
		                   'produit1: '+datas[i].produit1+'<br>'+
						   ' produit2:'+datas[i].produit2+'<br>'+
						   'produit3: '+datas[i].produit3+'<br>'+
						   ' produit4:'+datas[i].produit4+'<br>'+
						   'date_livraison_prevue: '+datas[i].date_livraison_prevue+'<br>'+
						   'date_livraison_effect: '+datas[i].date_livraison_effect+'<br>'+
						   ' situation_commande:'+datas[i].situation_commande+'<br>'+
						   
						'<ul data-role="listview" data-inset="true" class="ui-listview">'+
						' <li> <a href="#livraison" data-role="button">NOUVELLE COMMANDE</a> </li>'+
						'</ul></div></div>';
		 }
         
   
			
			$('#listeClient').append(contenu);
			$('#listeClient .ui-listview').listview();
			$('#listeClient .collapse').collapsible();
			
		

/*
$.ajax({
		type: 'GET',
		dataType: "json",
		url: "http://localhost/gestionCommandeServeur/enregistrement.php",
		timeout:30000,
		crossDomain: false,
		success: function (responseData, textStatus, jqXHR) {
		    var datas = responseData.results;
			var contenu ='';
						for(i=0;i<datas.length;i++ ){
			contenu += '<div data-role="collapsible" data-content-theme="d" class="collapse">'+
                           ' '+'<h3>'+datas[i].nom_client+'</h3>'+
                           '<div class="margesinternes">'+
						   '<p>'+' Commande Numero:'+datas[i].id_commande+'<br>'+
                           '<p>'+' telephone:'+datas[i].tel_client+'<br>'+
		                   ' marque_voiture:'+datas[i].marque_voiture+'<br>'+
						   'modele_voiture :'+datas[i].modele_voiture+'<br>'+
						   'annee_voiture: '+datas[i].annee_voiture+'<br>'+
		                   'produit1: '+datas[i].produit1+'<br>'+
						   ' produit2:'+datas[i].produit2+'<br>'+
						   'produit3: '+datas[i].produit3+'<br>'+
						   ' produit4:'+datas[i].produit4+'<br>'+
						   'date_livraison_prevue: '+datas[i].date_livraison_prevue+'<br>'+
						   'date_livraison_effect: '+datas[i].date_livraison_effect+'<br>'+
						   ' situation_commande:'+datas[i].situation_commande+'<br>'+
						   
						'<ul data-role="listview" data-inset="true" class="ui-listview">'+
						' <li> <a href="#livraison" data-role="button">NOUVELLE COMMANDE</a> </li>'+
						'</ul></div></div>';
		 }
         
   
			
			$('#listeClient').append(contenu);
			$('#listeClient .ui-listview').listview();
			$('#listeClient .collapse').collapsible();
			
		}, error :function (responseData, textStatus, errorThrown) {
			alert("erreur"+textStatus);
			alert(responseData);
		}
		});*/
		
	$("#formulaire").submit(function(){
        $.ajax({type:"POST", data: $(this).serialize(), url:"http://localhost/gestionCommandeServeur/commande.php",
            success: function(data){
                $("#post").html(data);
				 
				
            },
                        error: function(){
                    $("#post").html('Une erreur est survenue.');
            }
        });
        return false;
    });	
		
$("#formlivraison").submit(function(){
        $.ajax({type:"POST", data: $(this).serialize(), url:"http://localhost/gestionCommandeServeur/livraison.php",
            success: function(data){
                $("#postlivraison").html(data);
				 
				
            },
                        error: function(){
                    $("#postlivraison").html('Une erreur est survenue.');
            }
        });
        return false;
    });	

});
