// menu burger
$('.navTrigger').click(function () {
    $(this).toggleClass("active");
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});
if (window.matchMedia("(max-width: 768px)").matches) {
    console.log("True");
    $('.fermer').click(function(){
        $('.navTrigger').toggleClass("active");
        $("#mainListDiv").toggleClass("show_list");
        console.log("Clicked menu shut down");
        $("#mainListDiv").fadeIn();
    });
}

function validate() {
    var isValid = true;

    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();

    if (name == "") {
        $("#name").css('border', '#fb0505 1px solid');
        isValid = false;
    }
    if (email == "") {
        $("#email").css('border', '#fb0505 1px solid');
        isValid = false;
    }
    if (!email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#info").html("(Adresse email non valide)");
        $("#email").css('border', '#fb0505 1px solid');
        isValid = false;
    }
    return isValid;
}