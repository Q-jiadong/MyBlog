var barWidth = 0;
function onClick_progressBar(id) {
	var progressBar = document.getElementById(id);
	barWidth += 10;
	if (null != progressBar) {
	    progressBar.style.width = barWidth + "px";
	}
}