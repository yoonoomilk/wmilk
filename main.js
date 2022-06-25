/*
function detectMobileDevice(agent) {
  const mobileRegex = [
    /Android/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];

  return mobileRegex.some(mobile => agent.match(mobile));
}
var isMobile = detectMobileDevice(window.navigator.userAgent);
if (isMobile) location.href = 'https://m.wmilk.kro.kr';
*/
if(window.location != window.parent.location) {
  document.body.style.display = "none";
  docuemnt.getElementById("noiframe").style.display = "block";
}
