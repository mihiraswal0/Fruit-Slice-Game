var playing=false;
var score=0;
var trials=3;
var fruits=['apple','banana','guava','grape','orange','watermelon','293569'];
var step=0;
var action=0;
$(function(){
//     window.alert("helo");
  $("#reset").click(function(){
//      window.alert("helo");
      if(playing==true){
        location.reload();
      }
      else
      { 
    playing=true;
          score=0;
          $("#Gameover").hide();
//          document.getElementById("scorevalue").innerHTML=score;
    $("#scorevalue").html(score);
//          window.alert(score);
         $("#time").show();
          trials=3;
          addHeart();
       $("#reset").html("Reset Game");   startAction();
      }
  });  
    
});

function addHeart()
{
    $("#time").empty();
    for(var i=0;i<trials;i++)
              {
        $("#time").append('<img src="img/immg.png" class="life">');  
              }
}
function startAction()
{
  $("#fruit").show();
    chooseFruit();
    $("#fruit").css({'left':Math.round(600*Math.random()),'top':-50});
    //random speed for failing
    step=1+Math.round(5*Math.random());
    //move fruit down by every one stp in 10ms
    action=setInterval(function(){
 $("#fruit").css('top',$("#fruit").position().top+step);
         
//        window.alert($("#fruit").position().top);
        
        if($("#fruit").position().top>$("#question").height())
        {
     window.alert("oo");
         if(trials>1)
             {
                   $("#fruit").show();
    chooseFruit();
    $("#fruit").css({'left':Math.round(600*Math.random()),'top':-50});
    //random speed for failing
    step=1+Math.round(6*Math.random());
                 trials--;
                 addHeart();
             }
            else
            {//game over
            playing=false;
                $("#reset").html("Start Game")
      $("#Gameover").show();
     $("#Gameover").html('<p>Game Over !</p><p>Your score is '+score+'</p>');
                $("#time").hide();
                stopAction();
                
            }
            
        }
    },10);
    
   
}
function chooseFruit(){
    $("#fruit").attr('src','img/'+ fruits[Math.round(Math.random()*6)]+'.png');
}
function stopAction()
{
    clearInterval(action);
    $("#fruit").hide();
    
}
$("#fruit").mouseover(function(){
  score+=1;
   $("#scorevalue").html(score);
    $("#slicesound")[0].play();
    //stop going down
    clearInterval(action);
   $("#fruit").hide("explode",500);
    //str new fruit
//    window.alert("fd");
setTimeout(startAction,100);
//   startAction();

});