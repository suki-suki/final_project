var gif;
var img;


function setup() {
  createCanvas(800, 600);
  img = loadImage("images/first.jpg");
}

function draw() {
  image(img, 0, 0);
}

function mouseClicked() {
	if (image.loaded()) {
			function setup(){
				createCanvas(800, 600);
				gif = loadGif("gifs/title.gif");
			}
		  function draw() {
				background(0);
					if (gif.loaded()) {
					image(gif, 0, 0);
					}
				}
			}
}
