// function to see if our jQuery is working

// $(document).ready( function() {
   // here we put all code
// });

// the above code is not used if your js and jquery scripts are placed at the bottom bec they work the same way



/* to add one class
 $("h1").addClass("big-title"); */
/* */

/*
add multiple classes
$("h1").addClass("big-title marginn");
*/


 // to check if a item has that said class

 console.log($("h1").hasClass("big-title")); // gives true or false as output

 // in jQuery, innerHTML -> html, so for example

 $("button").html("<em>Don't click me!</em>")

 // attr is used for the js attribute method, here it sets the value

 $("input").attr("type","text");

 //adding eventListener
/*
$("h1").click(function () {

  $("h1").css("color", "violet");
});
*/




//
$("input").keydown(function(event) {

    console.log(event.key);

});

$("input").keydown(function(event) {

    $("h1").text(event.key);

});

//

$("h1").on("mouseover", function () {

  $("h1").css("color", "red");
})
