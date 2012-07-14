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

	<div class="top-spaced">
		<div id="slideshow" class="dragdealer">
			<div class="handle" style="left: 0px;">
				<div class="slide img1"></div>
				<div class="slide img2"></div>
				<div class="slide img3"></div>
				<div class="slide img4"></div>
				<div class="slide img5"></div>
			</div>
		</div>
	</div>

<!-- <div style="display: block;" id="slideshow-menu-wrapper"
		class="top-spaced right-float">
		<div id="slideshow-menu-cursor" class="cursor" style="top: 66px;"></div>
		<ul id="slideshow-menu">
			<li><a id="slideshow-photo-1" href="#photo1"> <span class="title"></span>
					<span class="description">Page 1</span>
			</a>
			</li>
			<li><a id="slideshow-photo-2" href="#photo2"> <span class="title"></span>
					<span class="description">Page 2</span>
			</a>
			</li>
			<li><a id="slideshow-photo-3" href="#photo3"> <span class="title"></span>
					<span class="description">Page 3</span>
			</a>
			</li>
			<li><a id="slideshow-photo-4" href="#photo4"> <span class="title"> </span>
					<span class="description">Page 4</span>
			</a>
			</li>
			<li><a id="slideshow-photo-5" href="#photo5"> <span class="title"> </span>
					<span class="description">Page 5</span>
			</a>
			</li>



		</ul>
	</div> -->	

	<div class="selectDisable" id="previousButton"
		style="">
		&nbsp;
	</div>

	<div class="selectDisable" id="nextButton"
		style="">
		&nbsp;
	</div>


	<div class="selectDisable" id="handPhone">
	
	<img id="bgImage" src="css/assets/handphone.png"/>
	<div class="phoneSlideshow"style="display:none;">
	
	<img class="slideImages" src="css/assets/phonePage1.png"/>
	<img class="slideImages" src="css/assets/phonePage2.png"/>
	<img class="slideImages" src="css/assets/phonePage3.png"/>
	<img class="slideImages" src="css/assets/phonePage4.png"/>
	</div>
	
	<div class="phoneSlideshowSmall" style="display:none;">
	
	<img class="slideImagesSmall" src="css/assets/phonePage1.png"/>
	<img class="slideImagesSmall" src="css/assets/phonePage2.png"/>
	<img class="slideImagesSmall" src="css/assets/phonePage3.png"/>
	<img class="slideImagesSmall" src="css/assets/phonePage4.png"/>
	</div>

	</div>

	<div id="finishedShopping">
		<img class="slideImages" src="css/assets/finished-shopping.png"/>
		
		
		<div class="yesnocontainer">
			<div onclick="reset()" class="selectDisable yesButton yesno">&nbsp;</div>
			<div onclick="notFinished()" class="selectDisable noButton yesno">&nbsp;</div>
		</div>
	</div>

	<!-- JavaScript at the bottom for fast page loading -->

	<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
	<script src="js/libs/jquery.js"></script>

	<!-- scripts concatenated and minified via build script -->
	<script src="js/dragdealer.js"></script>
	<script src="js/cycle.js"></script>
	<script src="js/idle.js"></script>
	<script src="js/script.js"></script>
	<script>
  

  </script>

	<!-- end scripts -->


</body>
</html>

