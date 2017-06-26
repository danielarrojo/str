function smtModel(){

	this.mediaquery = window.matchMedia("(max-width: 600px)");

	this.total_pages = 10;
	this.actual_page = 0;

	this.statsProgressPercentage = 11;
	
	this.statsPagesVisited = "3/10";
	this.statsSessionTime = "00:00:00";
	this.statsTotalTime = "01:00:00";

	this.actualContent="demo.html";


}

var SMT = new smtModel();