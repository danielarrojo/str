function initDemo () {
	$('#back-button').html(TRAD.back_button_text);


	$(document).on('click','.back-button-section', function(){
   		loadContent();
   	});
	
	$(document).on('click','#left-button', function(){
   		backwardContent();
   	});
	$(document).on('click','#right-button', function(){
   		advanceContent();
   	});

   	$('#back_butt').show();

	// ONLY FOR DEMO

	$(document).on('click','.doc-box', function(){
   		window.open('docs/pdf-sample.pdf', '_blank');
   	});
	$('#left-button').hide();
	advanceContent();

	// Media Queries //
	
	SMT.mediaquery.addListener(handleOrientationChange);
}


// Media Queries Tools //

function handleOrientationChange(mediaquery) {
  if (SMT.mediaquery.matches) {
  		$('#breadcrum-container').html('<div id="bread-separator"><</div><div id="bread-level-inf">Subapartado 1.1.</div>');
    } else {
    	$('#breadcrum-container').html('<div id="bread-level-sup">Apartado 1.</div><div id="bread-separator">></div><div id="bread-level-inf">Subapartado 1.1.</div>');
    }
}

// Back to Content Button Tools

function setBackContentButton(){
	$('#back_butt').toggle();
}

function loadContent(){
	setBackContentButton();
	$('#smt-content').load('content/files/demo.html',function(){}).hide().fadeIn(1500);
}

function toogleButtons(){
	$('#right-button').show();
	$('#left-button').show();
	$("#right-button").css({ opacity: 1.0 });
	$( "#right-button" ).prop( "disabled", false );
	$("#left-button").css({ opacity: 1.0 });
	$( "#left-button" ).prop( "disabled", false );
	if (SMT.actual_page >= SMT.total_pages) {
		// $('#right-button').hide();
		$("#right-button").css({ opacity: 0.0 });
		$( "#right-button" ).prop( "disabled", true );
		SMT.actual_page = SMT.total_pages;
	}
	if (SMT.actual_page <= 1) {
		$("#left-button").css({ opacity: 0.0 });
		SMT.actual_page = 1;
	}
	$('#smt-partial-total').html(SMT.actual_page + "/" + SMT.total_pages);
}


function advanceContent(){
	$('#back_butt').show();
	SMT.actual_page++;
	toogleButtons()
	setBreadCrumb();
	loadContent();
}

function backwardContent(){
	$('#back_butt').show();
	SMT.actual_page--;
	toogleButtons()
	setBreadCrumb();
	loadContent();
}

// Bread Crumb Functions //

function setBreadCrumb(){
	if (SMT.mediaquery.matches) {
  		$('#breadcrum-container').html('<div id="bread-separator"><</div><div id="bread-level-inf">Subapartado 1.1.</div>');
    } else {
    	$('#breadcrum-container').html('<div id="bread-level-sup">Apartado 1.</div><div id="bread-separator">></div><div id="bread-level-inf">Subapartado 1.1.</div>');
    }
}

// Tools Functions /////

// Stats Tools

function initStats () {
	
	// Percentage circle //
	$('#stats-percentage-circle').append("<div id='percentage-container'></div><div id='percentage_text'></div>");
	SMT.circle = new ProgressBar.Circle('#percentage-container', {
		color: 'gray',
		strokeWidth: 8,
		trailWidth: 8,
		duration: 1500,
		text: {
			value: '0'
		},
		step: function(state, bar) {
			bar.setText(SMT.statsProgressPercentage + "%");
		}
	});
	SMT.circle.animate( SMT.statsProgressPercentage/100 , function() {
	});
	$('#percentage_text').html(TRAD.stats_progress_text );

    // Total Page circle //
	$('#stats-pages-circle').append("<div id='pages-container'></div><div id='pages_text'></div>");
	SMT.circle = new ProgressBar.Circle('#pages-container', {
		color: 'gray',
		strokeWidth: 8,
		trailWidth: 8,
		duration: 1500,
		text: {
			value: '0'
		},
		step: function(state, bar) {
			bar.setText(SMT.statsPagesVisited);
		}
	});
	SMT.circle.animate( SMT.statsProgressPercentage/100 , function() {
	});
	$('#pages_text').html(TRAD.stats_pages_text );

	// Times Statistics //

	$('#stats-timer-actual-title').html(TRAD.stats_actual_text );
	$('#stats-timer-actual').html(SMT.statsSessionTime);
	$('#stats-timer-total-title').html(TRAD.stats_total_text);
	$('#stats-timer-total').html(SMT.statsTotalTime);
	$('#stats_header').html(TRAD.stats_header_text.toUpperCase());
	$('#stats-user').html(TRAD.name_text + ":");
	$('#stats-username').html(TRAD.username);

}


// Help tools //

function initHelp(){
	$('#help_header').html(TRAD.help_header_text.toUpperCase());
}


// Documentation Tools //
function initDoc(){
	$('#doc_header').html(TRAD.doc_header_text.toUpperCase());
}
