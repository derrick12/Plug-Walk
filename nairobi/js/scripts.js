$(document).ready(function() {
    //carousel options
    $('#quote-carousel').carousel({
        pause: true,
        interval: 10000,
    });

    //Club 1

    //toggle options
    $('#infor').hide();
    $("#more").click(function() {
        $('#infor').toggle();
    });

    $('#map').hide();
    $('#directions').click(function() {
        $('#atmosphereCon').hide();
        $('#eventsCon').hide();
        $('#map').toggle();
    });

    $('#atmosphereCon').hide();
    $('#atmosphere').click(function() {
        $('#eventsCon').hide();
        $('#map').hide();
        $('#atmosphereCon').toggle();
    });

    $('#eventsCon').hide();
    $('#events').click(function() {
        $('#map').hide();
        $('#atmosphereCon').hide();
        $('#eventsCon').toggle();
    });


    //Club 2

    //toggle options
    $('#infor1').hide();
    $("#more1").click(function() {
        $('#infor1').toggle();
    });

    $('#map1').hide();
    $('#directions1').click(function() {
        $('#atmosphereCon1').hide();
        $('#eventsCon1').hide();
        $('#map1').toggle();
    });

    $('#atmosphereCon1').hide();
    $('#atmosphere1').click(function() {
        $('#eventsCon1').hide();
        $('#map1').hide();
        $('#atmosphereCon1').toggle();
    });

    $('#eventsCon1').hide();
    $('#events1').click(function() {
        $('#map1').hide();
        $('#atmosphereCon1').hide();
        $('#eventsCon1').toggle();
    });




    //Club 3

    //toggle options
    $('#infor2').hide();
    $("#more2").click(function() {
        $('#infor1').toggle();
    });

    $('#map2').hide();
    $('#directions2').click(function() {
        $('#atmosphereCon2').hide();
        $('#eventsCon2').hide();
        $('#map2').toggle();
    });

    $('#atmosphereCon2').hide();
    $('#atmosphere2').click(function() {
        $('#eventsCon2').hide();
        $('#map2').hide();
        $('#atmosphereCon2').toggle();
    });

    $('#eventsCon2').hide();
    $('#events2').click(function() {
        $('#map2').hide();
        $('#atmosphereCon2').hide();
        $('#eventsCon2').toggle();
    });

});