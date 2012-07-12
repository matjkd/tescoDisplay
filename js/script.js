var link1 = $('#slideshow-photo-1');
var link2 = $('#slideshow-photo-2');
var link3 = $('#slideshow-photo-3');
var link4 = $('#slideshow-photo-4');
var doalert = 0;
var totalSlides = 5;
var valuenow = 0;
var currentpage = 0;
	
var slideshow = new Dragdealer('slideshow',
		  {
		  	steps: totalSlides,
		  	loose: false,
		  	speed: 20,
		  	
		loose:true,
		  	callback: function() {
		  		
		  		
		  		
		  	},
		  	animationCallback: function(x, y)
		  	{
		  	
		  		
		  		var totalval = x*(totalSlides-1);
		  		
		  		if(totalval == (totalSlides-1)) {
		  			
		  			var doalert = 1;
		  			
		  		} else {
		  			
		  			var doalert = 0;
		  		}
		  		
		  		if(doalert == 1){
		  			 showHand();
		  		setTimeout('finalPage()',2000);
		  		setTimeout('hideHand()',5000);
		  		
		  		logAction('Page 5 Visited');
		  		}
		  	}
		  });
function logAction(action) {
	

		$.post("logger.php", { action: action } );
}

function finalPage() 
{
	
	var onevalueB = parseFloat(slideshow.getClosestSteps(slideshow.value.current));
		var totalvalB = onevalueB*(totalSlides-1);
	
	if(totalvalB == (totalSlides-1)){
		
	showAlert();

	 
}
}

function showHand() {
	 $('#handPhone').animate({
		    opacity: 1,
		    bottom: '0',
		    left:'840'
		  }, 2000, function() {
		    // Animation complete.
			  
		  });
}

function hideHand() {
	$('#handPhone').animate({
	    opacity: 0,
	    bottom: '-200',
	    left:'880'
	  
	  }, 2000, function() {
	    // Animation complete.
		  
	  });
}

function showAlert() {
	 $('#finishedShopping').fadeIn('slow', function() {
	        // Animation complete
     });
}

function hideAlert() {
	 $('#finishedShopping').fadeOut('slow', function() {
	        // Animation complete
  });
}


//Links

$(document).ready(function(){
	
	
	  //  $(document).bind("contextmenu",function(e){
	 //       return false;
	 //   });

	
		 showHand();
		 setTimeout('hideHand()',5000);

		
		    
		    document.getElementById('nextButton').onclick = function()
		    {
		    	
		    	 valuenow = parseFloat(slideshow.getClosestSteps(slideshow.value.current));
		    	 currentpage =(valuenow*(totalSlides-1)+1);
		    	//$('#nextButton').append(currentpage+1 + ' ');
		        slideshow.setStep(currentpage+1);
		        return false;
		    }
		    
		    document.getElementById('previousButton').onclick = function()
		    {
		    	
		    	 valuenow = parseFloat(slideshow.getClosestSteps(slideshow.value.current));
		    	 currentpage =(valuenow*(totalSlides-1)+1);
		    	//$('#previousButton').append(currentpage-1 + ' ');
		        slideshow.setStep(currentpage-1);
		        return false;
		    }
  
  
  
});