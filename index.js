// $(".toggle_btn").click(function(){
//     $(this).toggleClass("active");
//    $(".wrapper").toggleClass("active");

//    if($(".toggle_btn").hasClass("active")){
//      $(".toggle_text").text("Zobrazit mene");
//    }
//    else{
//      $(".toggle_text").text("Zobrazit vice");
//    }
//  });





// function toggleText() {
      
//         // Get all the elements from the page
//         var points = 
//             document.getElementById("points");
      
//         var showMoreText =
//             document.getElementById("moreText");
      
//         var buttonText =
//             document.getElementById("textButton");
      
//         // If the display property of the dots 
//         // to be displayed is already set to 
//         // 'none' (that is hidden) then this 
//         // section of code triggers
//         if (points.style.display === "none") {
      
//             // Hide the text between the span
//             // elements
//             showMoreText.style.display = "none";
      
//             // Show the dots after the text
//             points.style.display = "inline";
      
//             // Change the text on button to 
//             // 'Show More'
//             buttonText.innerHTML = "Show More";
//         }
      
//         // If the hidden portion is revealed,
//         // we will change it back to be hidden
//         else {
      
//             // Show the text between the
//             // span elements
//             showMoreText.style.display = "inline";
      
//             // Hide the dots after the text
//             points.style.display = "none";
      
//             // Change the text on button
//             // to 'Show Less'
//             buttonText.innerHTML = "Show Less";
//         }
//     }




document.getElementById("showHide").onclick = function() {
    var moreText = document.getElementById("more-text");
    if(moreText.style.display == 'none') {
        moreText.style.display = 'block';
        this.innerHTML = 'Zobrazit méně';
    } else {
        moreText.style.display = 'none';
        this.innerHTML = 'Zobrazit více';
    }
}
