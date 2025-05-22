let slideIndexp = 0;
showSlidesp();

let slideIndexdp = 0;
showSlidesdp();

planetBtn()

dwarfPlanetBtn();

function showSlidesp() {
  let i;
  let slides = document.getElementsByClassName("planet-img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexp++;
  if (slideIndexp > slides.length) { slideIndexp = 1 }
  slides[slideIndexp - 1].style.display = "block";
  setTimeout(showSlidesp, 2000); // Change image every 2 seconds
}

function showSlidesdp() {
  let i;
  let slides = document.getElementsByClassName("dwarf-planet-img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexdp++;
  if (slideIndexdp > slides.length) { slideIndexdp = 1 }
  slides[slideIndexdp - 1].style.display = "block";
  setTimeout(showSlidesdp, 2000); // Change image every 2 seconds
}

function planetBtn()
{
  document.querySelector('.planet-btn')
  .addEventListener('click', function () {
    // Navigate to the next page when the button is clicked
    window.location.href = 'planet.html'; // Specify the filename of your new HTML file
  });
}

function dwarfPlanetBtn()
{
  document.querySelector('.dwarf-planet-btn')
  .addEventListener('click', function () {
    // Navigate to the next page when the button is clicked
    window.location.href = 'dwarfplanet.html'; // Specify the filename of your new HTML file
  });
}


