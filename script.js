var slideIndex = 0;

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;

            if (slideIndex > slides.length) {
                slideIndex = 1;
            }

            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";

            setTimeout(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
        }

        document.addEventListener("DOMContentLoaded", function () {
            showSlides();
        });

document.addEventListener("DOMContentLoaded", function () {
    const projectsSection = document.getElementById("projects");
  
    // Intersection Observer to trigger the animation
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };
  
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(projectsSection);
  
    // Function to handle the intersection
    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }
  });
  
  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Perform actions with form data (e.g., send data to server, display a message, etc.)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

function toggleMobileMenu() {
  var mobileNav = document.querySelector(".mobile-nav-links");
  mobileNav.style.display = (mobileNav.style.display === "block") ? "none" : "block";
}

function downloadPDF() {
  var pdfPath = 'ReadMe.pdf';
  
  // Creating a temporary link element
  var link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'ReadMe.pdf';
  
  // Triggering the download
  link.click();
}