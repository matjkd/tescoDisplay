<!doctype html>

<html class="no-js" lang="en">

<head>
<meta charset="utf-8">



<title></title>
<meta name="description" content="">

<!-- Mobile viewport optimized: h5bp.com/viewport -->
<meta name="viewport" content="width=device-width">

<!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->

<link rel="stylesheet" href="css/dragdealer.css">




</head>
<body>


<img src="css/assets/off.jpg"/>
	<!-- JavaScript at the bottom for fast page loading -->

	<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
	<script src="js/libs/jquery.js"></script>

	<!-- scripts concatenated and minified via build script -->

	<script src="js/cycle.js"></script>
	<script src="js/idle.js"></script>
	
	<script>
	var d = new Date();
	var hour = d.getHours();

function reset() {
if(hour > 5 && hour < 21) {
	window.location  = 'index.php';
}
}
	
	$(document).ready(
			function() {
				
				var timeout = 4000;

		          $(document).bind("idle.idleTimer", function(){
		        	 
		        	 
		        	  reset();
		          });

		          $(document).bind("active.idleTimer", function(){
		             //user active again
		          });

		          $.idleTimer(timeout);



		          

			});

	</script>
	
	


</body>
</html>

