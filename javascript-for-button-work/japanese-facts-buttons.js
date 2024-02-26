function handleButtonClick(buttonId, factTextId) {
    var path_to_file = window.location.origin + '/Internal-assesment/database-connections-and-session/get-japanese-fact-from-database.php';
    $("#" + buttonId).unbind("click").click(function() {
        $.ajax({
            url: path_to_file,
            type: "GET",
            success: function(data) {
                $("#" + factTextId).text(data);
            }
        });
    });
}

