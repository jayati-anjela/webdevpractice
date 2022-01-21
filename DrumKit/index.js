
// document.querySelector("button").addEventListener("click",  function (){
//    alert("I got clicked!");
//
//
//  });

var NumberOfDrumButtons = document.querySelectorAll(".drum").length; // to find out the number of elements which have class drum (i.e. the num of buttons)

for(var i=0; i<NumberOfDrumButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
     alert("I got clicked!");

   });
}
