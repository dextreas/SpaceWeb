// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");

//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more"; 
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less"; 
//       moreText.style.display = "inline";
//     }
//   } 
document.addEventListener("DOMContentLoaded", function() {
    var moreButtons = document.querySelectorAll(".see-more-btn");

    moreButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var container = this.parentElement;
            var content = container.querySelector(".planet-info-text-more");

            // Hide all other open read more content
            document.querySelectorAll(".planet-info-text-more").forEach(function(item) {
                if (item !== content) {
                    item.style.display = "none";
                }
            });   

            // Toggle current read more content
            if (content.style.display === "inline") {
                content.style.display = "none";
            } else {
                content.style.display = "inline";
                moreButtons.innerHTML = "Read Less"; 
            }
        });
    });
});

  
  