// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below

function keyPlay(event){
  event.target.style.backgroundColor = "blue";
}

function keyReturn(event){
    event.target.style.backgroundColor = "";

  }


// Write a named function with event handler properties
function functionNote(note){
  note.addEventListener("mousedown",(event) =>{
    keyPlay(event);
  })
  note.addEventListener("mouseup",(event) =>{
    keyReturn(event);
  })
  }


// Write a loop that runs the array elements through the function


// These variables store the buttons that progress the user through the lyrics


// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button

 


// Write anonymous event handler property and function for the second progress button


// Write anonymous event handler property and function for the third progress button

  


  


// This is the event handler property and function for the startOver button
startOver.onclick = function() {
 
}