var counter = 1;

setInterval(function() {
    document.getElementById("radio"+counter).checked = true;
    counter++;

    if(counter>4) {
        counter = 1;
    }
}, 4000);


function copy(){
    var copyText = document.getElementById("copy");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("Copied the url: " + copyText.value);
}


$(document).ready(function(){
    $(".navigation-auto").css("margin-top", 0.93 * $(".slider").height());
    $(".navigation-auto").css("width", 0.262 * $(".slider").width());
    $(".navigation-auto").css("margin-left", 0.365 * $(".slider").width());

    $(".like-btn").click(function(){
        $("#numberoflikes").text("420");
        $(".like-btn").css("color", "red");
    })

    $(":root").css("--width1", $(".oneliner1 h3").width());
})
