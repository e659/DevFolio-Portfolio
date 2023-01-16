/*
$(".color-box .color-option li").first().css("backgroundColor", "red");
$(".color-box .color-option li").last().css("backgroundColor", "green");
$(".color-box .color-option li").eq(1).css("backgroundColor", "blue");
$(".color-box .color-option li").eq(2).css("backgroundColor", "black");
*/
//----or------
//li colors
let bgColor = ["red", "green", "blue", "gray"];
for (var i = 0; i < bgColor.length; i++) {
    $(".color-box .color-option li").eq(i).css("backgroundColor", bgColor[i]);
}
//change color when click li
$(".color-box .color-option li").click(function() {
        let currentBackground = $(this).css("backgroundColor");
        $(".change").css("color", currentBackground)
    })
    //hide&show box
$(".color-box i").click(function() {
        let colorBOxWidth = $(".color-option ").outerWidth();
        if ($(".color-box ").css("left") == "0px") {
            $(".color-box ").animate({ "left": -colorBOxWidth }, 1000)
        } else {
            $(".color-box ").animate({ "left": 0 }, 1000)
        }
    })
    //change navColor
    //بعد السكشن عن التوب
let aboutOffSet = $("#ABOUT").offset().top;
$(window).scroll(function() {
        let topOffSet = $(window).scrollTop();
        if (topOffSet > aboutOffSet) {
            $(".navbar").css({ "backgroundColor": "rgba(0,0,0,.5)", "transition": "all 1s" });
            //scrolling btn
            $("#topBtn").fadeIn(2000)
        } else {
            $(".navbar").css("backgroundColor", "transparent");
            $("#topBtn").fadeOut(2000)
        }
    })
    //smoth Scrolling
$(".nav-link").click(function() {
        let currentLink = $(this).attr("href");
        let currentOffset = $(currentLink).offset().top;
        $("html,body").animate({ scrollTop: currentOffset }, 500)
    })
    //scrolling btn
$("#topBtn").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 500)
    })
    //loading page
$(document).ready(function() {
        $("#loading").fadeOut(2000)
    })
    //typing
var typed = new Typed('.element', {
    strings: ['Designer', 'developer', 'photographer'],
    smartBackspace: true, // Default value
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    cursorChar: ""
});