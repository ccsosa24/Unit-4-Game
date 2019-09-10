var random_result;
var lost = 0;
var win = 0;
var previous = 0;




var resetAndStart = function () {

    $(".crystal").empty();

    var images = [
        'https://www.colourbox.com/preview/3873723-broken-crystal-heart-unrequited-love-or-death.jpg',
        'https://comps.canstockphoto.com/blue-broken-heart-unrequited-love-drawings_csp6167249.jpg', 
        'http://www.johnharwood.com/JH_web-page/Gallery%20Images%201/Heart_Diamonds/Heart_Break_Most_Fragments_Dark_BG_1240x720.jpg', 
        'https://thumbs.dreamstime.com/b/broken-red-heart-crystal-black-background-36498608.jpg'];

    random_result = Math.floor(Math.random() * 69) + 30;
    //console.log(random_result);

    $("#result").html('Random Result: ' + random_result); //generating a ramdon num


    for (var i = 0; i < 4; i++) {    //loop
        var random = Math.floor(Math.random() * 11) + 1;
        // console.log(random);


        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random,
        });

        crystal.css({
            "background-image":"url('" + (images[i] + "')",
            "background-size":"cover",
        })

        $(".crystals").append(crystal);

    }

    $("#previous").html("Total Score: " + previous);
}



resetAndStart();


$(document).on('click', ".crystal", function () {
    // console.log($(this).attr('data-random'));


    var num = parseInt($(this).attr('data-random'));

    previous += num;
    console.log(previous);

    $("#previous").html("Total score: " + previous);

    if (previous > random_result) {
        //console.log("You Lost!");
        lost++;
        $("#lose").html("You lost: " + lost);
        previous = 0;

        resetAndStart();
    }
    else if (previous === random_result) {
        //console.log("You Win!");
        win++;
        $("#win").html("You win: " + win);

        previous = 0;
        resetAndStart();
    }



});







