document.querySelectorAll('.tablinks').forEach(tablink => {
  tablink.addEventListener('click', function (event) {
    openTab(event, this.dataset.tab);
  });
});

function openTab(event, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Hide all "extra text" sections
  document.querySelectorAll('.extra-text').forEach(extraText => {
    extraText.style.display = "none";
  });

  // Remove the "active" class from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the specific tab content
  const tabContentElement = document.getElementById(tabName);
  tabContentElement.style.display = "block";

  // Add the "active" class to the list item that opened the tab
  event.currentTarget.classList.add("active");
}

document.getElementById("default-tab").click();








// Get the container element
const container = document.querySelector('.planet-tabs');

// Variables to track mouse movement
let isGrabbed = false; // Flag to indicate if mouse is grabbed
let startX, startScrollLeft; // Variables to store initial mouse position and scroll position

// Event listener for mouse down
container.addEventListener('mousedown', (e) => {
    isGrabbed = true; // Mouse is grabbed
    startX = e.clientX; // Record initial mouse X position
    startScrollLeft = container.scrollLeft; // Record initial scroll position
    container.style.cursor = 'grabbing'; // Change cursor to grabbing style
});

// Event listener for mouse up
container.addEventListener('mouseup', () => {
    isGrabbed = false; // Mouse is released
    container.style.cursor = 'grab'; // Change cursor back to grab style
});

// Event listener for mouse move
container.addEventListener('mousemove', (e) => {
    if (!isGrabbed) return; // If mouse is not grabbed, do nothing

    const deltaX = e.clientX - startX; // Calculate horizontal movement
    container.scrollLeft = startScrollLeft - deltaX; // Update scroll position based on mouse movement
});

// Event listener for mouse leave
container.addEventListener('mouseleave', () => {
    isGrabbed = false; // Mouse leaves, release the grab
    container.style.cursor = 'grab'; // Change cursor back to grab style
});

// Event listener for wheel scrolling
container.addEventListener('wheel', (e) => {
    e.preventDefault(); // Prevent default scroll behavior

    // Calculate the new scroll position based on wheel movement
    container.scrollLeft += e.deltaY;

    // Ensure the scroll position stays within bounds
    container.scrollLeft = Math.max(0, Math.min(container.scrollLeft, container.scrollWidth - container.clientWidth));
});

