

$(document).ready(function() {

	//controls opening and closing of navigation menu
	jQuery('.menu-trigger').click(function() {
        jQuery('.menu').toggleClass('open');
    });
    
    jQuery('.menu-trigger').click(function() {
    if ($('.menu.open').length > 0) {
        $.fn.fullpage.setMouseWheelScrolling(false);
    }
    else {
	    $.fn.fullpage.setMouseWheelScrolling(true); 
    }
    });
    
    jQuery('#menu li').click(function() {
        jQuery('.menu').removeClass('open');
        $.fn.fullpage.setMouseWheelScrolling(true);
    });
    
    jQuery('#fullpage').click(function() {
        jQuery('.menu').removeClass('open');
        $.fn.fullpage.setMouseWheelScrolling(true);
    });
	
	//initialise full page scroll library
    $('#fullpage').fullpage({
	    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10', 'section11'],
		menu: '#menu',
		scrollingSpeed: 1000,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		controlArrows: false,
		loopHorizontal: false,
		navigation:false,
		navigationPosition: 'left',
		responsiveWidth: 320,
		scrollOverflow: true,
		
		//detects when user changes slide
		onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            	
			//pauses any audio currently playing
            function stopAllBBPlayers() {
		    var i = 0;
		    for (i = 0; i < bbplayers.length; i++) {
		      bbplayers[i].bbaudio.pause();
		      bbplayers[i].updateDisplay();
		    }
		  }
        }
		
    });
    
    //initialise modal popups
    $(function () {
		$('.popup-modal').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#username',
			modal: true
		});
		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	});
	
	//initialise fullscreen video popups
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-video',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
    
});