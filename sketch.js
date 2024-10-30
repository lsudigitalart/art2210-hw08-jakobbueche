///////////////////////////////
// PRELOADING SONGS AND TEXT //
///////////////////////////////

let press

function preload() {

  driftingSong = loadSound('Drifting.mp3');
  nomuSong = loadSound('Nomu.mp3')
  fasterSong = loadSound('Faster.mp3')
  slingshotSong = loadSound('Slingshot.mp3')
  dwtkSong = loadSound('DWTK.mp3')

// Loading Font //

  press = loadFont('PressStart2p.ttf');
}

//////////////////////////////////
// BUTTONS AND THEIR APPEARANCE //
//////////////////////////////////

function setup() {

  createCanvas(600, 600);

    // Menu Button //
  
    menu = createButton('Menu')
    menu.position(278, 560)
    menu.style('background-color', '#ffffff')
    menu.style('border-radius', '5px'); 
    menu.style('border', 'none'); 

    // "Drifting" Button //

    drifting = createButton('Drifting');
    drifting.position(265, 210)
    drifting.style('background-color', '#e6b4d4');
    drifting.style('border-radius', '5px'); 
    drifting.style('border', 'none'); 
    drifting.style('font-size', '18px'); 
    drifting.style('cursor', 'pointer'); 

    // "Nomu" Button //

    nomu = createButton('Nomu');
    nomu.position(270,270)
    nomu.style('background-color', '#e9e8dd');
    nomu.style('border-radius', '5px'); 
    nomu.style('border', 'none'); 
    nomu.style('font-size', '18px'); 
    nomu.style('cursor', 'pointer');

    // "Faster" Button //

    faster = createButton('Faster')
    faster.position(269,330)
    faster.style('background-color', '#6fa4d0');
    faster.style('border-radius', '5px'); 
    faster.style('border', 'none'); 
    faster.style('font-size', '18px');
    faster.style('cursor', 'pointer'); 
    
    // "Slingshot" Button //

    slingshot = createButton('Slingshot')
    slingshot.position(259,390)
    slingshot.style('background-color', '#81b9b3');
    slingshot.style('border-radius', '5px'); 
    slingshot.style('border', 'none'); 
    slingshot.style('font-size', '18px'); 
    slingshot.style('cursor', 'pointer'); 

    // "Down With the King" Button //

    dwtk = createButton('Down With the King')
    dwtk.position(220,450)
    dwtk.style('background-color', '#c79e5f')
    dwtk.style('border-radius', '5px'); 
    dwtk.style('border', 'none'); 
    dwtk.style('font-size', '18px'); 
    dwtk.style('cursor', 'pointer'); 

    topText()
}

////////////////////////////////////////
// BUTTON CLICKING CODE AND FUNCTIONS //
////////////////////////////////////////

function draw() {

  menu.mousePressed(menuClicked);
  drifting.mousePressed(driftingClicked);
  nomu.mousePressed(nomuClicked);
  faster.mousePressed(fasterClicked);
  slingshot.mousePressed(slingshotClicked);
  dwtk.mousePressed(dwtkClicked);
}

 function menuClicked() {
  stopMusic()
  background(254)
  topText()
} 

function driftingClicked() {
  stopMusic()
  driftingSong.play()
  background(209,164,193)
  topText()
} 

function nomuClicked() {
  stopMusic()
  nomuSong.play()
  background(186,185,178)
  topText()
}

function fasterClicked() {
  stopMusic()
  fasterSong.play()
  background(98,145,184)
  topText()
}

function slingshotClicked() {
  stopMusic()
  slingshotSong.play()
  background(110,158,153)
  topText()
}

function dwtkClicked() {
  stopMusic()
  dwtkSong.play()
  background(227,183,117)
  topText()

}

///////////////////////
// TOP TEXT FUNCTION //
///////////////////////


function topText() {

  // "Good Kid" text //

  fill(50)
  textFont(press)
  textSize(50)
  text('Good Kid',100,90)

  // "8-bit music player" text //

  textSize(20)
  text('8-bit music player',124,120)
}

/////////////////////////////
// STOPPING MUSIC FUNCTION //
/////////////////////////////

function stopMusic() {
  if (driftingSong.isPlaying()) {
    driftingSong.stop();
  }

  if (nomuSong.isPlaying()) {
    nomuSong.stop();
  }

  if (fasterSong.isPlaying()) {
    fasterSong.stop();
  }

  if (slingshotSong.isPlaying()) {
    slingshotSong.stop();
  }

  if (dwtkSong.isPlaying()) {
    dwtkSong.stop();
  }
}
