// Footer for about.html
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