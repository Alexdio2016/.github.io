$(document).ready(function(){
        $(function() {
        // OPACITY OF BUTTON SET TO 50%
        $(".firstImg, .nextImg, .blogSecondPhoto, .blogFirstPhoto").css("opacity","0.2");

        // ON MOUSE OVER
        $(".firstImg, .nextImg, .blogSecondPhoto, .blogFirstPhoto").hover(function () {

        // SET OPACITY TO 100%
        $(this).stop().animate({
        opacity: 1.0
        }, "hide");
        },

        // ON MOUSE OUT
        function () {

        // SET OPACITY BACK TO 50%
        $(this).stop().animate({
        opacity: 0.5
        }, "hide");
        });
        });
});
