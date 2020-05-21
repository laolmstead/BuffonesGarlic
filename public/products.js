// Add popup description for hardneck garlic on prooducts.html
var productHNG = document.getElementById('HNGparent');
 productHNG.onmouseover = function() {
 	document.getElementById('HNGpopup').style.display = 'block';
 }
 productHNG.onmouseout = function() {
 	document.getElementById('HNGpopup').style.display = 'none';
 }

// Add popup description for softneck garlic on prooducts.html
 var productSNG = document.getElementById('SNGparent');
 productSNG.onmouseover = function() {
 	document.getElementById('SNGpopup').style.display = 'block';
 }
 productSNG.onmouseout = function() {
 	document.getElementById('SNGpopup').style.display = 'none';
 }

// Add popup description for garlic scape on prooducts.html
 var productSCP = document.getElementById('SCPparent');
 productSCP.onmouseover = function() {
 	document.getElementById('SCPpopup').style.display = 'block';
 }
 productSCP.onmouseout = function() {
 	document.getElementById('SCPpopup').style.display = 'none';
 }

// Add popup description for garlic powder on prooducts.html
 var productGP = document.getElementById('GPparent');
 productGP.onmouseover = function() {
 	document.getElementById('GPpopup').style.display = 'block';
 }
 productGP.onmouseout = function() {
 	document.getElementById('GPpopup').style.display = 'none';
 } 


// Footer for products.html
// Change color of facebook link when the mouse is over a link.
document.getElementById("fb").addEventListener("mouseover", function(){
	document.getElementById("fb").style.backgroundColor = "rgb(204, 102, 255)";
});
document.getElementById("fb").addEventListener("mouseout", function( event ){
	event.target.style.backgroundColor = "rgba(237, 230, 216)";
});

// Change color of twitter link when the mouse is over a link.
document.getElementById("twitter").addEventListener("mouseover", function(){
	document.getElementById("twitter").style.backgroundColor = "rgb(204, 102, 255)";
});
document.getElementById("twitter").addEventListener("mouseout", function( event ){
	event.target.style.backgroundColor = "rgba(237, 230, 216)";
});

// Change color of instagram link when the mouse is over a link.
document.getElementById("insta").addEventListener("mouseover", function(){
	document.getElementById("insta").style.backgroundColor = "rgb(204, 102, 255)";
});
document.getElementById("insta").addEventListener("mouseout", function( event ){
	event.target.style.backgroundColor = "rgba(237, 230, 216)";
});