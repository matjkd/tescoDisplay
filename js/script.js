var link1 = $('#slideshow-photo-1');
var link2 = $('#slideshow-photo-2');
var link3 = $('#slideshow-photo-3');
var link4 = $('#slideshow-photo-4');
var doalert = 0;
var totalSlides = 5;
var valuenow = 0;
var currentpage = 0;
var hand = 0;
var phonesmall = 0;
var timeout = 20000;
var d = new Date();
var hour = d.getHours();
var handclicked = 0;

var slideshow = new Dragdealer('slideshow', {
    steps : totalSlides,
    loose : false,
    speed : 20,

    loose : true,
    callback : function() {

    },
    animationCallback : function(x, y) {

        var totalval = x * (totalSlides - 1);

        if (totalval == 0) {

            var doalert = 1;

        } else if (totalval == 1) {
            var doalert = 2;

        } else if (totalval == 2) {
            var doalert = 3;
        } else if (totalval == 3) {
            var doalert = 4;
        } else if (totalval == 4) {
            var doalert = 5;
        }

        else {

            var doalert = 0;
        }

        if (doalert == 1) {
 $('#nextButton').fadeIn();	
$('#previousButton').fadeOut();
            $('.startSlideshow').fadeIn();

            logAction('Page 1 touched');
        }

        if (doalert == 2) {
             $('#previousButton').fadeIn('5');
 $('#nextButton').fadeIn();	
            $('.startSlideshow').fadeOut('10');	
           
            if (hand == 0) {
                showHand();

                $('.phoneSlideshow').cycle({
                    fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
			delay: 2500				
                });
				 
                $('.phoneSlideshowSmall').cycle({
                    fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
delay:3000
							
                });
                setTimeout('hideHand()', 20000);
                hand = 1;
            }

            logAction('Page 2 Visited');
        }

        if (doalert == 3) {
             $('.startSlideshow').fadeOut();
 $('#previousButton').fadeIn();	
 $('#nextButton').fadeIn();

            logAction('Page 3  Visited');
        }

        if (doalert == 4) {
             $('.startSlideshow').fadeOut();
 $('#previousButton').fadeIn();	
 $('#nextButton').fadeIn();	
	
            logAction('Page 4  Visited');
        }

        if (doalert == 5) {
		 $('.startSlideshow').fadeOut();
 $('#previousButton').fadeIn();	
 $('#nextButton').fadeOut();	
			
            setTimeout('finalPage()', 2000);
			
            logAction('Page 5 Visited');
        }

    }
});
function logAction(action) {

    $.post("logger.php", {
        action : action
    });
}
function notFinished() {
    logAction('Clicked No on Finished Shopping popup');
    hideAlert();
}

function finalPage() {

    var onevalueB = parseFloat(slideshow
        .getClosestSteps(slideshow.value.current));
    var totalvalB = onevalueB * (totalSlides - 1);

    if (totalvalB == (totalSlides - 1)) {

        showAlert();

    }
}

function showHand() {
    $('.phoneSlideshowSmall').fadeOut();
    $('#handPhone').animate({
        opacity : 1,
        bottom : '0',
        left : '80',
		
        width: '768px'
    }, 3000, function() {
        // Animation complete.
        if(handclicked == 0){
            $('.phoneSlideshow').fadeIn();
        } else {
        //do nothing
        }
        phonesmall = 0;
    });
	
	
}

function hideHand() {
    $('.phoneSlideshow').fadeOut('fast', function() {
        // Animation complete.
        $('#handPhone').animate({
            opacity : 1,
            bottom : '-1050',
            left : '690px',
            width: '350px'

        }, 3000, function() {
            // Animation complete.
            $('.phoneSlideshowSmall').fadeIn();
            phonesmall = 1;
		
        });
    });
	
	
	
	
	

}
function hideHandtotal() {
    $('#handPhone').animate({
        opacity : 1,
        bottom : '-1283',
        left : '590px'

    }, 3000, function() {
        // Animation complete.
		
        });
	
	
}
$(function(){
    // Self-executing recursive animation
    (function pulse(){
        $('#nextButton').delay(200).animate({opacity: 0.3}, 2000 ).delay(50).animate({opacity:1}, 2000);
        $('#previousButton').delay(200).animate({opacity: 0.3}, 2000 ).delay(50).animate({opacity:1}, 2000);
        $('#start').delay(200).animate({opacity: 0.3}, 2000 ).delay(50).animate({opacity:1}, 2000,pulse);
    })();
});

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

function finished() {
     $('#goodflight').fadeIn('slow', function() {
        // Animation complete
           setTimeout('reset()', 5000);
        });
}
function reset() {
    d = new Date();
    hour = parseInt(d.getHours());
	
    if(hour > 21 || hour < 6) {
		
      //  window.location  = 'slideshow.php';
    } else {
	
	
        hideHandtotal();
        location.reload();
    }
}
function checktime() {
  d = new Date();
    hour = parseInt(d.getHours());
	
    if(hour > 21 || hour < 6) {
		
      //  window.location  = 'slideshow.php';
    } else {
	
	
      //  hideHandtotal();
      //  location.reload();
    }
}

// Links

$(document).ready(
    function() {
        
        $('.startSlideshow').cycle({
            fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
speed: 1000,
timeout:5000
        });
	 $('.startSlideshow').fadeIn();		
         

			

        $(document).bind("idle.idleTimer", function(){
            var timeoutCorrect = (timeout/1000);
            logAction('No Activity for ' + timeoutCorrect + ' seconds');
            checktime();
        });

        $(document).bind("active.idleTimer", function(){
            //user active again
            });

        $.idleTimer(timeout);

	         
			
        $('img').bind('dragstart', function(event) {
            event.preventDefault();
        });
        // $(document).bind("contextmenu",function(e){
        // return false;
        // });
			
        $('#handPhone').click(function() {
				
            handclicked = 1;
				
            if(phonesmall ==1){
                //hideHandtotal();
            } else {
                hideHand();
            }
        });
			

        document.getElementById('nextButton').onclick = function() {

            valuenow = parseFloat(slideshow
                .getClosestSteps(slideshow.value.current));
            currentpage = (valuenow * (totalSlides - 1) + 1);
            // $('#nextButton').append(currentpage+1 + ' ');
            slideshow.setStep(currentpage + 1);
            return false;
        }

        document.getElementById('previousButton').onclick = function() {

            valuenow = parseFloat(slideshow
                .getClosestSteps(slideshow.value.current));
            currentpage = (valuenow * (totalSlides - 1) + 1);
            // $('#previousButton').append(currentpage-1 + ' ');
            slideshow.setStep(currentpage - 1);
            return false;
        }

    });