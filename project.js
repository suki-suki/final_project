var gif, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10, gif11, gif12, gif13, gif14, gif15, gif16, gif17, gif18, gif19;
var img, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12;

function preload() {
	// img = loadImage("images/wakeup.jpg");
	// img2 = loadImage("images/subway.jpg");
	// img3 = loadImage("images/choose.jpg");
	// img4 = loadImage("images/home.jpg");
	gif = loadGif("gifs/title.gif");
	gif2 = loadGif("gifs/wakeup.gif");
	gif3 = loadGif("gifs/clothes.gif");
	// gif4 = loadGif("gifs/makeup.gif");
	// gif5 = loadGif("gifs/swipe.gif");
	// gif6 = loadGif("gifs/read.gif");
	// gif7 = loadGif("gifs/sleep.gif");
	// gif8 = loadGif("gifs/street.gif");
	// gif9 = loadGif("gifs/enteruc.gif");
	// gif10 = loadGif("gifs/walk.gif");
	// gif11 = loadGif("gifs/eat.gif");
	// gif12 = loadGif("gifs/class.gif");
	// gif13 = loadGif("gifs/loop.gif");
	// gif14 = loadGif("gifs/hall.gif");
	// gif15 = loadGif("gifs/vinyl.gif");
	// gif16 = loadGif("gifs/type.gif");
	// gif17 = loadGif("gifs/ace.gif");
	// gif18 = loadGif("gifs/goodnight.gif");
	// gif19 = loadGif("gifs/bye.gif");
	// gif = loadGif("gifs/.gif");

}

function setup() {
  createCanvas(800, 600);
}

function draw() {
		background(0);
		fill("white");
		textSize(40);
		textFont("blackout");
		fill("white");
		text("loading...", 300, 350);
		if (gif.loaded()) {
			image(gif, 0, 0)}
		}

// function mouseClicked() {
//  if (scene == "start" && gif.loaded()) {
// 	 if (gif2.loaded()) {
// 		image(gif2, 0, 0)}
// 		// else (scene == "clothes" && gif3.loaded()) {
// 	//
	//  }
 // }
 // }

function keyPressed() {
  if (keyCode = B && gif2.loaded()) {
		image(gif2, 0, 0)
  } else (keyCode = B && gif3.loaded()) {
		image(gif3, 0, 0)
  }
}
