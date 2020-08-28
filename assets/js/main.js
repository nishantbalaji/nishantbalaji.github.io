/**
 * ===================================================================
 * main js
 *
 * -------------------------------------------------------------------
 */

(function($) {

	"use strict";

  var cfg = {
      scrollDuration : 800, // smoothscroll duration
      mailChimpURL   : ''   // mailchimp url
  },

  $WIN = $(window);

  // Add the User Agent to the <html>
  // will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
  var doc = document.documentElement;
  doc.setAttribute('data-useragent', navigator.userAgent);

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */
   $(window).load(function() {

        // will first fade out the loading animation
    	  $("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

        //force page scroll position to top at page refresh
        $('html, body').animate({ scrollTop: 0 }, 'normal');

      });

  	})


  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

  	}, 100);


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */
  	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */
	$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom : [
	        [0, 1],
	        [700, 2],
	        [960, 3]
	     ],
        navigationText: false
    });


	/*----------------------------------------------------- */
	/* Alert Boxes
  	------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});


	/*----------------------------------------------------- */
	/* Stat Counter
  	------------------------------------------------------- */
   var statSection = $("#stats"),
       stats = $(".stat-count");

   statSection.waypoint({

   	handler: function(direction) {

      	if (direction === "down") {

			   stats.each(function () {
				   var $this = $(this);

				   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
				   	duration: 4000,
				   	easing: 'swing',
				   	step: function (curValue) {
				      	$this.text(Math.ceil(curValue));
				    	}
				  	});
				});

       	}

       	// trigger once only
       	this.destroy();

		},

		offset: "90%"

	});


	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded( function() {

		containerProjects.masonry( {
		  	itemSelector: '.folio-item',
		  	resize: true
		});

	});


	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
   $('.item-wrap a').magnificPopup({

      type:'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'

   });

   $(document).on('click', '.popup-modal-dismiss', function (e) {
   	e.preventDefault();
   	$.magnificPopup.close();
   });


   /* Menu on Scrolldown
    * ------------------------------------------------------ */
    var ssMenuOnScrolldown = function() {

        var hdr = $('.s-header'),
            hdrTop = $('.s-header').offset().top;

        $WIN.on('scroll', function() {

            if ($WIN.scrollTop() > hdrTop) {
                hdr.addClass('sticky');
            }
            else {
                hdr.removeClass('sticky');
            }

        });
    };


   /* Mobile Menu
    * ---------------------------------------------------- */
    var ssMobileMenu = function() {

        var toggleButton = $('.header-menu-toggle'),
            nav = $('.header-nav-wrap');

        toggleButton.on('click', function(event){
            event.preventDefault();

            toggleButton.toggleClass('is-clicked');
            nav.slideToggle();
        });

        if (toggleButton.is(':visible')) nav.addClass('mobile');

        $WIN.on('resize', function() {
            if (toggleButton.is(':visible')) nav.addClass('mobile');
            else nav.removeClass('mobile');
        });

        nav.find('a').on("click", function() {

            if (nav.hasClass('mobile')) {
                toggleButton.toggleClass('is-clicked');
                nav.slideToggle();
            }
        });

    };

   /* Highlight the current section in the navigation bar
    * ------------------------------------------------------ */
    var ssWaypoints = function() {

        var sections = $(".target-section"),
            navigation_links = $(".header-main-nav li a");

        sections.waypoint( {

            handler: function(direction) {

                var active_section;

                active_section = $('section#' + this.element.id);

                if (direction === "up") active_section = active_section.prevAll(".target-section").first();

                var active_link = $('.header-main-nav li a[href="#' + active_section.attr("id") + '"]');

                navigation_links.parent().removeClass("current");
                active_link.parent().addClass("current");

            },

            offset: '25%'

        });

    };


    /* Smooth Scrolling
     * ------------------------------------------------------ */
     var ssSmoothScroll = function() {

         $('.smoothscroll').on('click', function (e) {
             var target = this.hash,
             $target    = $(target);

                 e.preventDefault();
                 e.stopPropagation();

             $('html, body').stop().animate({
                 'scrollTop': $target.offset().top
             }, cfg.scrollDuration, 'swing').promise().done(function () {

                 // check if menu is open
                 if ($('body').hasClass('menu-is-open')) {
                     $('.header-menu-toggle').trigger('click');
                 }

                 window.location.hash = target;
             });
         });

     };

     /* Animate On Scroll
      * ------------------------------------------------------ */
      var ssAOS = function() {

          AOS.init( {
              offset: 200,
              duration: 600,
              easing: 'ease-in-sine',
              delay: 300,
              once: true,
              disable: 'mobile'
          });

      };



   /*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('input, textarea, select').placeholder()


  	/*---------------------------------------------------- */
	/*	contact form
	------------------------------------------------------ */

	/* local validation */
	$('#contactForm').validate({

		/* submit via ajax */
		submitHandler: function(form) {

			var sLoader = $('#submit-loader');

			$.ajax({

		      type: "POST",
		      url: "inc/sendEmail.php",
		      data: $(form).serialize(),
		      beforeSend: function() {

		      	sLoader.fadeIn();

		      },
		      success: function(msg) {

	            // Message was sent
	            if (msg == 'OK') {
	            	sLoader.fadeOut();
	               $('#message-warning').hide();
	               $('#contactForm').fadeOut();
	               $('#message-success').fadeIn();
	            }
	            // There was an error
	            else {
	            	sLoader.fadeOut();
	               $('#message-warning').html(msg);
		            $('#message-warning').fadeIn();
	            }

		      },
		      error: function() {

		      	sLoader.fadeOut();
		      	$('#message-warning').html("Something went wrong. Please try again.");
		         $('#message-warning').fadeIn();

		      }

	      });
  		}

	});





  //Annotated code
  var text = $(".switcher").attr("shift").replace(/\ /g, ' ').toUpperCase().split(','); //Get words, sort out spaces, put to uppercase and make an array.
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ".toUpperCase(); //allowed characters, case unspecific as it converts everything into uppercase.

  var select = 0; //Which text is selected first
  var length = Math.max.apply(Math, $.map(text, function (el) { return el.length })); //Length of longest string
  var correct = 0; //Counter to see if all letters match
  var selecttext = []; //Current held correct text
  var fulltext = []; //Current held text, not always correct
  var actualtext = ""; //Text displayed inside .switcher .display
  var latch = true; //Just a fail safe to not skip a word

  setInterval(flicker,40); //This is how fast the characters switch

  write();
  function write() {
    loadtext();
    for (var i = 0; i <length; i++) { //initiate fulltext with completely blank string
      fulltext[i] = " ";
    }
  }

  function loadtext() { //Fill selecttext with word and empty space padding •
    for (var i = 0; i <length; i++) {
      selecttext[i] = text[select][i];
      if (i >= text[select].length) {
        selecttext[i] = " ";
      }
    }
    latch = true; //open to check if words match
  }
  function flicker() { //Matching characters
    for (var i = 0; i < length; i++) { //cycle through letters
      if (selecttext[i] != fulltext[i]) { //does the varying character not match with the correct one
        if (fulltext[i] == " ") { //If it is at the end of the loop
          fulltext[i] = "A"; //Put to the beginning
        } else {
          fulltext[i] = chars[chars.indexOf(fulltext[i]) + 1]; //Increase character by 1
        }
        correct++; //means that the loop will not end this time around
      }
    }
    for (var i = 0; i < length; i++) { //Stitch characters into a word
      actualtext += fulltext[i];
    }
    if (latch) {
      $(".switcher").text(actualtext); //Display the word
    }
    actualtext = ""; //and blanket
    if (correct == 0 && latch) { //If there are no errors and it can latch
      latch = false; //can't latch
      if (select >= text.length-1) { //increment word by 1 or loop
        select = 0;
      } else {
        select++;
      }
      setTimeout(loadtext,1500); //start next word after a pause, this is where latch comes into play
    }
    correct = 0; //reset correct after it is used
  }

























 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}

	});
  /* Initialize
   * ------------------------------------------------------ */
   (function clInit() {

       ssMenuOnScrolldown();
       ssMobileMenu();
       ssWaypoints();
       ssSmoothScroll();
       ssAOS();

   })();

})(jQuery);
