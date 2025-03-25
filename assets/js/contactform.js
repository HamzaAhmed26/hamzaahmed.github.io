document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target
    const data = new FormData(form)

    fetch("https://formspree.io/f/xyzepwzb",  {
        method: "POST",
        body: data,
        headers: {
            "Accept" : 'application/json'
        }

    }).then(response => {
        if (response.ok) {
            document.getElementById("formStatus").innerText = "Thanks! Your message was sent. I will respond to you shortly";
            form.reset();
    } else {
        
        response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
                document.getElementById("formStatus").innerText = data["errors"].map(error => error.message).join(", ");
            } else {
                document.getElementById("formStatus").innerText = "Oops! Something went wrong with this request, please try again later or email me directly at hamzaahmedwork96@gmail.com";
            }
        });
    }

}).catch(error => {
    document.getElementById("formStatus").innerText = "Oops! Something went wrong with this request, please try again later or email me directly at hamzaahmedwork96@gmail.com";
});

});