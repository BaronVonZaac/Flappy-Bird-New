var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random() * 300) + 150);
                // Makes the number between -150 and -450 
    hole.style.top = random + "px";
                // Makes a new, random area to put the hole
    counter++;
                // Increases counter variable by one
});

// GRAVITY FUNCTION 
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping == 0){
        character.style.top = (characterTop + 3) + "px";
                // Moves the Character down 3 pixels //
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop > 480)||((blockLeft < 20)&&(blockLeft > -50)&&((cTop < holeTop)||(cTop > holeTop + 130)))){
                // If the character is below the bottom
        alert("Game over. Score: " + (counter - 1));
                // Alert that the game is over.
        character.style.top = 100 + "px";
                // Resets character position
        counter = 0;
                // Resets counter (score)
    }
}, 10);

// JUMPING FUNCTION 
function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop > 6) && (jumpCount < 15)){
                // Stops from going over or under the border
            character.style.top = (characterTop - 5)+ "px";
        }
        if(jumpCount > 20){
                // Makes the jumping height higher than that of "gravity", and stops jumping after the 15th jump                      so theres a 5 jump interval
            clearInterval(jumpInterval);
                // Resets game at 20
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
}

