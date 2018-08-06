;(function ($) {
    $(document).ready(function () {
        var current_value = $("#pqrc_toggle").val();
        $('#toggle1').minitoggle({
            on: current_value == 1 ? true : false
        });

        if (current_value == 1) {
            $("#toggle1 .toggle-handle").attr('style', 'transform: translate3d(36px, 0px, 0px)');
        }

        $('#toggle1').on("toggle", function (e) {
            if (e.isActive)
                $("#pqrc_toggle").val(1);
            else
                $("#pqrc_toggle").val(0);
        });
    });
})(jQuery);