// JavaScript Document
$(document).ready(function(){
    document.addeventlisterer("deviceready", function(){
		
$('#B1').tap(function(){	
	navigator.notification.beep(1);
		
		});// cierra tap b1
	}); // cierra deviceready
}); //cierra ready