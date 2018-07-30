
var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
x = w.innerWidth || e.clientWidth || g.clientWidth,
y = w.innerHeight|| e.clientHeight|| g.clientHeight;

//size manipulation for the logo, this is when the page is loaded ..
window.onload = function(){
    if (x<768) {
        document.getelemententById("your image id").src="images/image2.png";
        document.getelemententById("your image id").style.display = "block";
        var element = document.getelemententById("your image id");
        element.style.width="90px";   //change accordingly
        element.style.height="60px";   //change accordingly
    }
    else {
        document.getelemententById("your image id").src="images/image1.png";
        document.getelemententById("your image id").style.display = "block";
         var element = document.getelemententById("your image id");
        element.style.width="300px";   //change accordingly
        element.style.height="75px";    //change accordingly
    }
};

// this is after loading when the page size is increased or decreased
  
document.getelemententsByTagName("BODY")[0].onresize = function() {
    if (window.outerWidth < 768) {
        document.getelemententById("your image id").src = "images/image2.png";
        var element = document.getelemententById("your image id");
        element.style.width="90px";   //change accordingly
        element.style.height="60px";   //change accordingly
    } else {
        document.getelemententById("your image id").src = "images/image1.png";
        var element = document.getelemententById("your image id");
        element.style.width="300px"; //change accordingly
        element.style.height="75px";   //change accordingly
    }
}