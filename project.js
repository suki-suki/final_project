var gif, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10, gif11, gif12, gif13, gif14, gif15, gif16, gif17, gif18;
var img, img2, img3, img4, img5;

function preload() {
	img = loadImage("images/wakeup.jpg");
	img2 = loadImage("images/subway.jpg");
	img3 = loadImage("images/choose.jpg");
	img4 = loadImage("images/home.jpg");
	img5 = loadImage("images/bye.jpg")
	gif = loadGif("gifs/title.gif");
	gif2 = loadGif("gifs/wakeup.gif");
	gif3 = loadGif("gifs/clothes.gif");
	gif4 = loadGif("gifs/makeup.gif");
	gif5 = loadGif("gifs/swipe.gif");
	gif6 = loadGif("gifs/read.gif");
	gif7 = loadGif("gifs/sleep.gif");
	gif8 = loadGif("gifs/street.gif");
	gif9 = loadGif("gifs/enteruc.gif");
	gif10 = loadGif("gifs/walk.gif");
	gif11 = loadGif("gifs/eat.gif");
	gif12 = loadGif("gifs/class.gif");
	gif13 = loadGif("gifs/loop.gif");
	gif14 = loadGif("gifs/hall.gif");
	gif15 = loadGif("gifs/ace.gif");
	gif16 = loadGif("gifs/type.gif");
	gif17 = loadGif("gifs/tea.gif");
	gif18 = loadGif("gifs/smoke.gif");
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
		if (gif.loaded()) { image(gif, 0, 0)};
		if (keyIsPressed) {
		  if (keyCode === ALT_A && gif2.loaded()) {
			image(gif2, 0, 0)} if (keyCode === ALT_B && gif2.playing()) {
				image(img, 0, 0) } if (keyCode === ALT_C && gif3.loaded()) {
					image(gif3, 0, 0) } if (keyCode === ALT_M && gif4.loaded()) {
						image(gif4, 0, 0) } if (keyCode === ALT_D && gif3.loaded()) {
							image(gif4, 0, 0) } if (keyCode === ALT_E && gif4.loaded()) {
								image(gif5, 0, 0) } if (keyCode === ALT_F && gif5.loaded()) {
									image(img2, 0, 0) } if (keyCode === ALT_R && gif6.loaded()) {
										image(gif6, 0, 0) } if (keyCode === ALT_S && gif7.loaded()) {
											image(gif7, 0, 0) } if (keyCode === ALT_G && gif6.loaded()) {
												image(gif8, 0, 0) } if (keyCode === ALT_H && gif7.loaded()) {
													image(gif8, 0, 0) } if (keyCode === ALT_I && gif8.loaded()) {
											 image(gif9, 0, 0) } if (keyCode === ALT_J && gif9.loaded()) {
										image(gif10, 0, 0) } if (keyCode === ALT_K && gif10.loaded()) {
							image(img3, 0, 0) } if (keyCode === ALT_E && gif11.loaded()) {
				image(gif11, 0, 0) } if (keyCode === ALT_G && gif12.loaded()) {
		image(gif12, 0, 0) } if (keyCode === ALT_L && gif11.loaded()) {
				  	image(gif12, 0, 0) } if (keyCode === ALT_M && gif12.loaded()) {
									image(gif13, 0, 0) } if (keyCode === ALT_N && gif13.loaded()) {
											image(gif14, 0, 0) } if (keyCode === ALT_O && gif14.loaded()) {
												 image(gif15, 0, 0) } if (keyCode === ALT_P && gif15.loaded()) {
									  	image(img4, 0, 0) } if (keyCode === ALT_W && gif16.loaded()) {
							  	image(gif16, 0, 0) } if (keyCode === ALT_T && gif17.loaded()) {
					  	 image(gif17, 0, 0) } if (keyCode === ALT_Q && gif16.loaded()) {
				  	image(gif18, 0, 0) } if (keyCode === ALT_U && gif17.loaded()) {
			  image(gif16, 0, 0) } if (keyCode === ALT_V && gif18.loaded()) {
		image(img5, 0, 0) } else if (keyCode === ALT_X && gif.loaded()) { image(gif, 0, 0) }
		}
	}


// function keyPressed() {
// 	if (keyCode === B && gif.loaded()) {
// 	image(gif2, 0, 0)} if (keyCode === B && gif2.loaded()) {
// 		image(img, 0, 0) } if (keyCode === C && gif3.loaded()) {
// 			image(gif3, 0, 0) } if (keyCode === M && gif4.loaded()) {
// 				image(gif4, 0, 0) } if (keyCode === B && gif3.loaded()) {
// 					image(gif4, 0, 0) } if (keyCode === B && gif4.loaded()) {
// 						image(gif5, 0, 0) } if (keyCode === B && gif5.loaded()) {
// 							image(img2, 0, 0) } if (keyCode === R && gif6.loaded()) {
// 								image(gif6, 0, 0) } if (keyCode === S && gif7.loaded()) {
// 									image(gif7, 0, 0) } if (keyCode === B && gif6.loaded()) {
// 										image(gif8, 0, 0) } if (keyCode === B && gif7.loaded()) {
// 											image(gif8, 0, 0) } if (keyCode === B && gif8.loaded()) {
// 									 image(gif9, 0, 0) } if (keyCode === B && gif9.loaded()) {
// 								image(gif10, 0, 0) } if (keyCode === B && gif10.loaded()) {
// 					image(img3, 0, 0) } if (keyCode === E && gif11.loaded()) {
// 		image(gif11, 0, 0) } if (keyCode === G && gif12.loaded()) {
// image(gif12, 0, 0) } if (keyCode === B && gif11.loaded()) {
// 				image(gif12, 0, 0) } if (keyCode === B && gif12.loaded()) {
// 							image(gif13, 0, 0) } if (keyCode === B && gif13.loaded()) {
// 									image(gif14, 0, 0) } if (keyCode === B && gif14.loaded()) {
// 										 image(gif15, 0, 0) } if (keyCode === B && gif15.loaded()) {
// 									image(img4, 0, 0) } if (keyCode === W && gif16.loaded()) {
// 							image(gif16, 0, 0) } if (keyCode === T && gif17.loaded()) {
// 					 image(gif17, 0, 0) } if (keyCode === B && gif16.loaded()) {
// 				image(gif18, 0, 0) } if (keyCode === B && gif17.loaded()) {
// 		image(gif16, 0, 0) } if (keyCode === B && gif18.loaded()) {
// image(img5, 0, 0) } else (keyCode === X && gif.loaded()) { image(gif, 0, 0) }
// }
