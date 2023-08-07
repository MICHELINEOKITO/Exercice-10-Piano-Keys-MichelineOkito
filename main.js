// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functiclons that change the color of the keys below

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
notes.forEach(functionNote);

// These variables store the buttons that progress the user through the lyrics

let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');
// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button

 
nextOne.addEventListener("click", () => {
  nextOne.hidden = true;
  nextTwo.hidden = false;
  document.getElementById("letter-note-five").innerHTML = "D";
  document.getElementById("letter-note-six").innerHTML = "C";




});


// Write anonymous event handler property and function for the second progress button
nextTwo.addEventListener("click", () =>{
 
  nextThree.hidden = true;
  nextTwo.hidden = false;
  document.getElementById("word-five").innerHTML = "DEAR";
  document.getElementById("word-six").innerHTML = "FRI-" ;


  lastLyric.style.display = "inline-block";
  document.getElementById("letter-note-three").innerHTML = "G";
  document.getElementById(" letter-note-four")= "E";
  document.getElementById("letter-note-five").innerHTML = "C";
  document.getElementById(" letter-note-six").innerHTML = "B";
 
})


// Write anonymous event handler property and function for the third progress button

  


  


// This is the event handler property and function for the startOver button
startOver.onclick = function() {
 
}