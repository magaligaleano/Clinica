document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('mensaje-enviado').style.display = 'block'; 
    setTimeout(function() {
        window.location.href = 'index.html'; 
    }, 1000); 
});