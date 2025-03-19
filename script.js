document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        
        if (name && email && date) {
            alert(`Appointment booked successfully!\nName: ${name}\nEmail: ${email}\nDate: ${date}`);
            form.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});
