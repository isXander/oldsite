$(document).ready(function() {
    const url = window.location.href;
    let doDownload = getURLParameter(url, 'download');
    if (doDownload === "1") download();
});


function getURLParameter(url, name) {
    return (RegExp(name + '=' + '(.+?)(&|$)').exec(url)||[undefined,null])[1];
}

function download() {
    let os = "Unknown OS";
    if(navigator.appVersion.indexOf("Win")!==-1) os = "windows";
    if (navigator.appVersion.indexOf("Mac")!==-1) os = "mac";
    if (navigator.appVersion.indexOf("Linux")!==-1) os = "linux";

    os = os + ".txt";
    window.location.href = "https://github.com/XanderClient/Launcher/releases/latest/download/" + os;
}

AOS.init();

particlesJS.load('canvas', 'particles.json');

update = function() {
    requestAnimationFrame(update);
}
requestAnimationFrame(update);
