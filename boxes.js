// console.log("hello world");

$(document).ready(function(){
//Part2
//Change secret box background Color to white and add h1 tag "Secret Box!"
// $('#secretBox').css('backgroundColor', 'white').append("<h1>secret box!</h1>");
//Change all child div's of first row to class = boxType3
// $('#row1 div').removeClass().addClass('box boxType3');
//make last box in each row disappear using display styles.
// $('.row div:last-child').hide();
//change all red boxes to white
// $('.boxType1').css('backgroundColor', 'white');
//get first two div's in second row and take away all styling
// $('#row2 div:lt(2)').removeClass();
//get all nonrow, non secretBox div's and set width to 2 pxls
// $('.box').not("#secretBox").width("2px");


//Part3
//Add an on click handler to the container div. Console log the x and y position of the click.
$('#container').on('click', function(e){
    console.log(`X:${e.pageX}, Y:${e.pageY}`);
});
// Add links inside all red box divs that take the user to galvanize. Then add an on click handler that alerts the user that you can never leave the page. Make sure the user won't leave the page after the alert!
$('.boxType1').html('<a href="http://www.Galvanize.com">Galvanize</a>').on('click', function(e){
    e.preventDefault();
    alert ("You can never leave this page!!!!!");
});
//For all box divs, add a click handler that adds an image of a cute puppy to the box. If the image is clicked again, remove the cute puppy.
$('.box').on('click', function(e){
    $(e.target).toggleClass('addImage');
});

//Click handler on container
$('#container').on('click', function(e){
    if (e.target === this){
        $(e.target).css('backgroundColor', 'lime');
    }
    else {
        $(e.target).css('backgroundColor', 'white');
        $(this).css('backgroundColor', 'black');
    }
});
  
});
