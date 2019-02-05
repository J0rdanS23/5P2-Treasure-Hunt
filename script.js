$("#chair").hide();
$("#firstbutton").hide();
$("#memereview").hide();
$("#one").hide();
$("#two").hide();
$("#edgarpic").hide();


$("#pewds").click(function(){
    $("#brofist").text("Good job. Now go on the chair!");
    $("#chair").show();
    $("#first").hide();
    $("#pewds").hide();
});

$("#chair").mouseenter(function(){
    $("body").css("background-image","url('https://i.ytimg.com/vi/V0QjCq14U7w/maxresdefault.jpg')");
    $("#brofist").hide();
    $("#memes").text("Now go destroy memes by double clicking this button!");
    $("#firstbutton").show();
    $("#chair").fadeOut();
    $("#memereview").show();
    
});

$("#firstbutton").dblclick(function(){
    $("#memereview").slideUp();
    $("#firstbutton").hide();
    $("#memes").hide();
    $("#edgar").text("Now find Edgar!");
    $("#one").show();
    $("#two").show();
    

});

$("#one").mouseleave(function(){
    $("#one").css("color","white");
    

});

$("#two").mouseleave(function(){
    $("#two").css("color","white");
    

});

$("#two").click(function(){
    $("#edgarpic").show();
    $("#one").hide();
    $("#two").text("edgar is the treasure enjoy the poop surplus!");
    $("#edgar").hide();
     $("body").css("background-image","url('https://i.redd.it/3t88melm5eb01.jpg')");
    

});
