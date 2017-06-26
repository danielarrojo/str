
(function() {

	var bodyEl = document.body,

		doc = document.getElementById( 'smt-documentation' ),
		stats = document.getElementById( 'smt-stats' ),
		help = document.getElementById( 'smt-help' ),
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-menu-button' ),
		closebtn = document.getElementById( 'close-button' ),
		demo_1_1p1 = document.getElementById( 'demo_1_1p1' ),
		isOpen = false,

		morphEl = document.getElementById( 'morph-shape' ),
		s = Snap( morphEl.querySelector( 'svg' ) );
		path = s.select( 'path' );
		initialPath = this.path.attr('d'),
		pathOpen = morphEl.getAttribute( 'data-morph-open' ),
		isAnimating = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );

		doc.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				$('#smt-content').load('content/tools/documentation.html',function(){}).hide().fadeIn(1500);
				toggleMenu();
				setBackContentButton();
			}
			
		} );

		stats.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				$('#smt-content').load('content/tools/stats.html',function(){}).hide().fadeIn(1500);
				toggleMenu();
				setBackContentButton();
			}
			
		} );

		help.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				$('#smt-content').load('content/tools/help.html',function(){}).hide().fadeIn(1500);
				toggleMenu();
				setBackContentButton();
			}
			
		} );


		// DEMO

		demo_1_1p1.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				$('#smt-content').load('content/files/demo_1_1p1.html',function(){}).hide().fadeIn(1500);
				toggleMenu();
			}
		} );


	}

	function toggleMenu() {
		if( isAnimating ) return false;
		isAnimating = true;
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
			// animate path
			setTimeout( function() {
				// reset path
				path.attr( 'd', initialPath );
				isAnimating = false; 
			}, 300 );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
			// animate path
			path.animate( { 'path' : pathOpen }, 400, mina.easeinout, function() { isAnimating = false; } );
		}
		isOpen = !isOpen;

	}


	init();

})();