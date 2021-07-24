document.body.style.height = window.innerHeight + "px";
/*动态改变根元素字体大小*/
function recalc() {
	var clientWidth = document.documentElement.clientWidth;
	if(!clientWidth) return;
	document.documentElement.style.fontSize = 40 * (clientWidth / 750) + 'px';
								// 字体大小   = 1个rem单位表示多少个像素（设备的宽度   /设计宽度）
}
function initRecalc() {
	var clientWidth = document.documentElement.clientWidth;
	recalc();
	var resizeEvt = 'osrientationchange' in window ? 'orientationchange' : 'resize';
	if(!document.addEventListener) return;
	window.addEventListener(resizeEvt, recalc, false);
	document.addEventListener('DOMContentLoaded', recalc, false);
	if(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize) {
		var size = window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.split('p')[0];
		if(size*1.2 < 40 * (clientWidth / 750)) {
		   docEl.style.fontSize = 50 * (clientWidth / 750) + 'px';
		}
	  }
}
initRecalc();	
