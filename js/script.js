/*counter starts*/
$('.count').counterUp({
	delay:10,
	time:3000
})
/*counter ends*/


/*arrow button starts*/

mybutton=document.getElementById("arrow-btn");
window.onscroll=function() {scrollFuction()};

function scrollFunction(){
	if(document.body.scrollTop>20 || document.documentElement.scrollTop>20)
	{
	  mybutton.style.display="block";
	}
	else{
	   mybutton.style.display="none";
	}
}

$( document ).ready(function() {
    console.log( "ready!" );
    $('.fa-arrow-up').fadeOut();
});

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 100) {
    $('.fa-arrow-up').fadeIn();
    } else {
    $('.fa-arrow-up').fadeOut();
    }
});

function topFunction(){
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
}

/*arrow button ends*/