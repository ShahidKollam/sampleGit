document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code to run after the DOM is fully loaded
    var heading = document.getElementById('superHeading');
    heading.addEventListener('mouseover', function() {
        // Change the color of the heading on mouseover
        heading.style.color = '#ff4500';
    });

    heading.addEventListener('mouseout', function() {
        // Change the color back on mouseout
        heading.style.color = '#007bff';
    });
});
