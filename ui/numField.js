var currentCode = "";
var audioPlayer = null;

$(document).ready(function(){  

    if (audioPlayer != null) {
        audioPlayer.pause();
    }

    audioPlayer = new Howl({src: ["numField.mp3"]});
    audioPlayer.volume(50.0);
    
    $("#key1").click(function(){
        audioPlayer.play();
        currentCode = currentCode + "1";
console.log("LUA DEVELOPER")
    }); 
    $("#key2").click(function(){
        audioPlayer.play();
        currentCode = currentCode + "2";
console.log("LUA DEVELOPER")
    }); 
    $("#key3").click(function(){
        audioPlayer.play();
        currentCode = currentCode + "3";
console.log("LUA DEVELOPER")
    }); 
    $("#key4").click(function(){
        audioPlayer.play();
        currentCode = currentCode + "4";
console.log("LUA DEVELOPER")
    }); 
    $("#key5").click(function(){
        audioPlayer.play();
        currentCode = currentCode + "5";
console.log("LUA DEVELOPER")
    }); 
    $("#key6").click(function(){
        audioPlayer.play();
        currentCode = currentCode + "6";
console.log("LUA DEVELOPER")
    }); 
    $("#key7").click(function(){
        audioPlayer.play();
        currentCode = currentCode + "7";
console.log("LUA DEVELOPER")
    }); 
    $("#key8").click(function(){
        audioPlayer.play();
        currentCode = currentCode + "8";
console.log("LUA DEVELOPER")
    }); 
    $("#key9").click(function(){
        audioPlayer.play();
        currentCode = currentCode + "9";
console.log("LUA DEVELOPER")
    }); 
    $("#key0").click(function(){
        audioPlayer.play();
        currentCode = currentCode + "0";
console.log("LUA DEVELOPER")
    }); 

    $("#keyCancel").click(function(){
        audioPlayer.play();
        $('body').css('display', "none")
        $.post('http://esx_Luadoors/escape', JSON.stringify({}));
    }); 

    $("#keyClear").click(function(){
        audioPlayer.play();
        currentCode = "";
    });

    $("#keyEnter").click(function(){
        audioPlayer.play();
        $.post('http://esx_LuaDoors/try', JSON.stringify({
            code: currentCode
        }));

        currentCode = "";        
    });

    window.addEventListener('message', function(event) {
        var data = event.data;
        currentCode = "";
        
        if (event.data.type == "enableui") {
            $('body').css('display', event.data.enable ? "block" : "none")
        }
    });
});