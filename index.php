
<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
<head>
<meta charset="utf-8">

<!-- Use the .htaccess and remove these lines to avoid edge case issues.
       More info: h5bp.com/i/378 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<title></title>
<meta name="description" content="">

<!-- Mobile viewport optimized: h5bp.com/viewport -->
<meta name="viewport" content="width=device-width">

<!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->

<link rel="stylesheet" href="css/dragdealer.css">

<!-- More ideas for your <head> here: h5bp.com/d/head-Tips -->

<!-- All JavaScript at the bottom, except this Modernizr build.
       Modernizr enables HTML5 elements & feature detects for optimal performance.
       Create your own custom Modernizr build: www.modernizr.com/download/ -->
<script src="js/libs/modernizr-2.5.3.min.js"></script>
</head>
<body>
	<!-- Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
	<!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->

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

	<div id="slideshow-menu-wrapper" class="top-spaced right-float">
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
	</div>

	<div id="previousButton"
		style="background: #999; width: 100px; height: 100px; position: absolute; top: 540px; left: 0px;">
		<a id="slideshow-previous" href="#photo5"> <span class="title"> </span> <span
			class="description">previous.</span>
		</a>
	</div>
	
	<div id="nextButton"
		style="background: #999; width: 100px; height: 100px; position: absolute; top: 540px; left: 980px;">
		<a id="slideshow-next" href="#photo5"> <span class="title"> </span> <span
			class="description">next.</span>
		</a>
	</div>


	<div id="handPhone"
		style="background: #999; width: 200px; height: 200px; position: absolute; bottom: -200px; left: 880px;">

	</div>

	<div id="finishedShopping"
		style="background: #999; width: 200px; height: 200px; position: absolute; top: 300px; left: 450px; opacity: 0.1;">

	</div>

	<!-- JavaScript at the bottom for fast page loading -->

	<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
	<script
		src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>

	<!-- scripts concatenated and minified via build script -->
	<script src="js/dragdealer.js"></script>
	<script src="js/script.js"></script>
	<script>
  

  </script>

	<!-- end scripts -->

	<!-- Asynchronous Google Analytics snippet. Change UA-XXXXX-X to be your site's ID.
       mathiasbynens.be/notes/async-analytics-snippet -->
	<script>
    var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
  </script>
</body>
</html>

