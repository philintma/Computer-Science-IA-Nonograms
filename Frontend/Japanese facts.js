function handleButtonClick(buttonId, factTextId) {
    $("#" + buttonId).unbind("click").click(function() {
        $.ajax({
            url: "Adding Japanese facts.php",
            type: "GET",
            success: function(data) {
                $("#" + factTextId).text(data);
            }
        });
    });
}


// function handleButtonClick(buttonId) {
//     $("#" + buttonId).click(function() {
//         $.ajax({
//             url: "Adding Japanese facts.php",
//             type: "GET",
//             success: function(data) {
//                 $("#factText").text(data);
//             }
//         });
//     });
// }
