document.addEventListener("DOMContentLoaded", function () {
    // Update the countdown timers for each event
    function updateCountdowns() {
        document.querySelectorAll(".countdown").forEach(function (countdown) {
            let eventTime = new Date(countdown.getAttribute("data-time")).getTime();
            let now = new Date().getTime();
            let timeLeft = eventTime - now;

            if (timeLeft > 0) {
                let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                countdown.querySelector("span").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            } else {
                countdown.querySelector("span").innerText = "Event Started";
            }
        });
    }

    // Get the event name from the URL query parameter
    function getEventFromURL() {
        const params = new URLSearchParams(window.location.search);
        return params.get("event");
    }

    // Show the selected event details based on the URL parameter
    function showEvent() {
        let selectedEvent = getEventFromURL();
        let events = document.querySelectorAll(".event-details");

        // Hide all events initially
        events.forEach(event => event.style.display = "none");

        // Show the selected event
        if (selectedEvent) {
            let eventElement = document.getElementById(selectedEvent);
            if (eventElement) {
                eventElement.style.display = "block";
            }
        }
    }

    // Run the functions when the page loads
    updateCountdowns();
    showEvent();

    // Update countdown every second
    setInterval(updateCountdowns, 1000);
});
