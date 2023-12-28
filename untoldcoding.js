var i = 0;
var txt1 =
  "Hi my baby.....!  <<               I want to ask something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You did something Special to me.  <<                  As the days go by < you seem to get more precious me....! <<                           I don't know the reason why you thought always resonates inside my mind...!                                                     > Everything about you always intrests me...!                     << I am somewhat nervous Because I have never said these words to anyone and I won't be saying to anyone in future...!                                                     > I Love my you so much. Even more than Eden and Alex and everyone else....!                    << You are the only person i wanna be with forever....!                                                             >I Love U <Mr.Das.....! |                  <<<< Give me One chance to Prove my Love ...!   by your sunshine";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
