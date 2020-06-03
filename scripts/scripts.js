$(document).ready(function() {
    $("#menu-btn").click(changeNav);

    function changeNav() {
        $("#menu-items").toggle(2000);
        $("#menu-btn").toggleClass("turn");
    }
})