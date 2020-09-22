var profile = document.getElementById('profile');
var qualifications = document.getElementById('qualifications');
var products = document.getElementById('contact');

var btnProfile = document.getElementById('btnProfile');
var btnQualifications = document.getElementById('btnQualifications');
var btnContact = document.getElementById('btnContact');

function displayProfile(){
    profile.style.transform = "translateX(0)";
    qualifications.style.transform = "translateX(170%)";
contact.style.transform = "translateX(170%)";

profile.style.transitionDelay = "0.5s";
qualifications.style.transitionDelay = "0s";
contact.style.transitionDelay = "0s";
}
function displayQualifications(){
    profile.style.transform = "translateX(100%)";
    qualifications.style.transform = "translateX(0)";
    contact.style.transform = "translateX(170%)";

    profile.style.transitionDelay = "0s";
    qualifications.style.transitionDelay = "0.5s";
    contact.style.transitionDelay = "0s";
}
function displayContact(){
    profile.style.transform = "translateX(170%)";
    qualifications.style.transform = "translateX(170%)";
    contact.style.transform = "translateX(0)";

    profile.style.transitionDelay = "0s";
    qualifications.style.transitionDelay = "0s";
contact.style.transitionDelay = "0.5s";
 }