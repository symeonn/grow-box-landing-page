(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });


    function getData(url) {
        var Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("GET", url, false);
        Httpreq.send(null);
        return Httpreq.responseText;
    }

    var url = "https://symeonn.github.io/grow-box-data/current_data.json"
    var json_obj = JSON.parse(getData(url));

    document.getElementById("datetime").innerHTML = json_obj.datetime
    document.getElementById("voc").innerHTML = json_obj.voc
    document.getElementById("co2").innerHTML = json_obj.co2
    document.getElementById("temperature").innerHTML = json_obj.temperature + ' °C'
    document.getElementById("water_temperature").innerHTML = json_obj.water_temperature + ' °C'
    document.getElementById("ph").innerHTML = json_obj.ph
    document.getElementById("ec").innerHTML = json_obj.ec
    document.getElementById("local_ip").innerHTML = json_obj.local_ip
    document.getElementById("vpn_ip").innerHTML = json_obj.vpn_ip
})(jQuery); // End of use strict
