$(function() {    
        $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newDestination = {
            trip_name: $("#plan").val().trim(),
        };
    
        // Send the POST request.
        $.ajax("/api/trips", {
            type: "POST",
            data: newDestination
        }).then(
            function() {
            console.log("added a new destination");
            // Reload the page to get the updated list
            location.reload();
            }
        );
        });
    });
    