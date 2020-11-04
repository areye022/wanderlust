// all console logs here will be in console
$(function() {    
    // review with ashley
    $(".destName").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the PUT request.
        $.ajax("/api/trips/" + id, {
            type: "PUT",
            data: true
        }).then(
            function() {
                console.log("traveled");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
        
        $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newDestination = {
            trip_name: $("#plan").val().trim(),
        };
        // Send the POST request.
        $.ajax("/api/trips", {
            type: "POST",
            // data represents the req.body
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
    