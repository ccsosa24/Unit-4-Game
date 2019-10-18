var random_result;
var lose = 0;
var win = 0;
var previous= 0;    //total Score
//var update;




var resetAndStart = function () {

  

  $(".crystals").empty(); //make sure there are only 4 crystals

    var images = [
        'https://www.colourbox.com/preview/3873723-broken-crystal-heart-unrequited-love-or-death.jpg',
        'https://comps.canstockphoto.com/blue-broken-heart-unrequited-love-drawings_csp6167249.jpg',
        'http://www.johnharwood.com/JH_web-page/Gallery%20Images%201/Heart_Diamonds/Heart_Break_Most_Fragments_Dark_BG_1240x720.jpg',
        'https://thumbs.dreamstime.com/b/broken-red-heart-crystal-black-background-36498608.jpg'];

    random_result = Math.floor(Math.random() * 100) + 20;
    //console.log(random_result);

    $("#result").html('Random Result: ' + random_result); //generating a ramdon num



    for (var i = 0; i < 4; i++) {    //loop

        var random = Math.floor(Math.random() * 11) + 1;
        // console.log(random);


        var crystal = $("<div>"); //for the div with crystals
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        //crystal.css({
           // "background-image":"url('" + image[i] +"')",
          //  "background-size":"cover"
        //});

       newFunction(crystal, images, i);

        $(".crystals").append(crystal);

    }

}

    $("#previous").html('Total Score: ' + previous);
   
   



    




resetAndStart();


$(document).on('click', ".crystal", function () {
    // console.log($(this).attr('data-random'));


    var num = parseInt($(this).attr('data-random'));

    previous += num;
    console.log(previous);

    $("#previous").html('Total Score: ' + previous);

    if(previous > random_result) {
       console.log("You Lost!!");    //should see if it say lost or win
        lost--;


       // alert("You Lose");
       // $("#previous").html(previous);

        $("#lose").html('You lost: ' + lose);
        console.log("lost: " + lost);   //find out why its not showing for both
        previous = 0;
        
        resetAndStart();
    }
    else if(previous === random_result) {
        console.log("You Win!!");

        win++;


       //alert("You Win");
        //$("#previous").html(previous);

        $("#win").html('You win: ' + win);

        previous = 0;

      //  update();

        resetAndStart();
    }

  
    

});

//var update =

  //  document.getElementById("previous").innerHTML = previous;
  //  document.getElementById("win").innerHTML = win;
  //  document.getElementById("lost").innerHTML = lost;





function newFunction(crystal, images, i) {
   crystal.css({
     "background-image": "url('" + (images[i]) + "')",
       "background-size": "cover"
    });
}




function refreshPage(){
  window.location.reload();
}


