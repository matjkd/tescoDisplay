var link1 = $('#slideshow-photo-1');
var link2 = $('#slideshow-photo-2');
var link3 = $('#slideshow-photo-3');
var link4 = $('#slideshow-photo-4');
var doalert = 0;
var totalSlides = 5


	
var slideshow = new Dragdealer('slideshow',
		  {
		  	steps: totalSlides,
		  	loose: true,
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
		  		
		  		$.post("logger.php", { name: "John", time: "2pm" } );
		  		}
		  	}
		  });


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
	 $('#finishedShopping').animate({
		    opacity: 1
		  
		  
		  }, 500, function() {
		    // Animation complete.
			  
		  });
}

function hideAlert() {
	$('#finishedShopping').animate({
	    opacity: 0
	 
	  
	  }, 1000, function() {
	    // Animation complete.
		  
	  });
}


//Links

$(document).ready(function(){
	
	
		 showHand();
		 setTimeout('hideHand()',5000);

		 document.getElementById('slideshow-photo-1').onclick = function()
		    {
		        slideshow.setStep(1);
		        return false;
		    }
		    document.getElementById('slideshow-photo-2').onclick = function()
		    {
		        slideshow.setStep(2);
		        return false;
		    }
		    document.getElementById('slideshow-photo-3').onclick = function()
		    {
		    
		        slideshow.setStep(3);
		        
		        return false;
		    }
		    document.getElementById('slideshow-photo-4').onclick = function()
		    {
		        slideshow.setStep(4);
		        return false;
		    }
		    document.getElementById('slideshow-photo-5').onclick = function()
		    {
		        slideshow.setStep(5);
		        return false;
		    }
		    
		    document.getElementById('slideshow-next').onclick = function()
		    {
		    	var valuenow = parseFloat(slideshow.getClosestSteps(slideshow.value.current));
		    	var currentpage =(valuenow*(totalSlides-1)+1);
		        slideshow.setStep(currentpage+1);
		        return false;
		    }
		    
		    document.getElementById('slideshow-previous').onclick = function()
		    {
		    	var valuenow = parseFloat(slideshow.getClosestSteps(slideshow.value.current));
		    	var currentpage =(valuenow*(totalSlides-1)+1);
		        slideshow.setStep(currentpage-1);
		        return false;
		    }
  
  
  
});