document.addEventListener('DOMContentLoaded', function() {
    // Validación de formulario
    const form = document.getElementById('formulario');
    if (form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    }
});