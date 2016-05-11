var gif, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10, gif11, gif12, gif13, gif14, gif15, gif16, gif17, gif18, gif19, gif20;
var img, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12;


function setup() {
  createCanvas(800, 600);
  img = loadImage("images/first.jpg");
}

function draw() {
  image(img, 0, 0);
}

function mouseClicked() {
	if (image.loaded()) {
			function setup() {
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

function mouseClicked() {
	if (gif.loaded()) {
		function setup() {
			createCanvas(800, 600);
			gif2 = loadGif("gifs/wakeup.gif");
		}
		function draw() {
			background(0);
				if (gif2.loaded()) {
				image(gif2, 0, 0);
				}
			}
	}
}

function mouseClicked() {
	if (gif2.loaded()) {
		function setup() {
			createCanvas(800, 600);
			img2 = loadImage("images/wakeup.jpg");
		}
		function draw() {
			image(img2, 0, 0)
			}
	}
}

function keyPressed() {
  if (keyCode === C) {
		function setup() {
			createCanvas(800, 600);
			gif3 = loadGif("gifs/clothes.gif");
		}
		function draw() {
			background(0);
				if (gif3.loaded()) {
				image(gif3, 0, 0);
				}
			}
  } else if (keyCode === M) {
		function setup() {
			createCanvas(800, 600);
			gif4 = loadGif("gifs/makeup.gif");
		}
		function draw() {
			background(0);
				if (gif4.loaded()) {
				image(gif4, 0, 0);
				}
			}
  }
}

function mouseClicked() {
  if (gif4.loaded()) {
		function setup() {
			createCanvas(800, 600);
			gif3 = loadGif("gifs/clothes.gif");
		}
		function draw() {
			background(0);
				if (gif3.loaded()) {
				image(gif3, 0, 0);
				}
			}
  } else if (gif3.loaded()) {
		function setup() {
			createCanvas(800, 600);
			gif4 = loadGif("gifs/makeup.gif");
		}
		function draw() {
			background(0);
				if (gif4.loaded()) {
				image(gif4, 0, 0);
				}
			}
  }
}

function mouseClicked() {
  if (gif4.loaded()) {
		function setup() {
			createCanvas(800, 600);
			gif5 = loadGif("gifs/swipe.gif");
		}
		function draw() {
			background(0);
				if (gif5.loaded()) {
				image(gif5, 0, 0);
				}
			}
  } else if (gif3.loaded()) {
		function setup() {
		createCanvas(800, 600);
		gif5 = loadGif("gifs/swipe.gif");
	}
	function draw() {
		background(0);
			if (gif5.loaded()) {
			image(gif5, 0, 0);
			}
		}
  }
}

function mouseClicked() {
	if (gif5.loaded()) {
		function setup() {
			createCanvas(800, 600);
			img3 = loadImage("images/subway.jpg");
		}
		function draw() {
			image(img3, 0, 0)
			}
	}
}

function keyPressed() {
  if (keyCode === R) {
		function setup() {
			createCanvas(800, 600);
			gif6 = loadGif("gifs/read.gif");
		}
		function draw() {
			background(0);
				if (gif6.loaded()) {
				image(gif6, 0, 0);
				}
			}
  } else if (keyCode === S) {
		function setup() {
			createCanvas(800, 600);
			gif7 = loadGif("gifs/sleep.gif");
		}
		function draw() {
			background(0);
				if (gif7.loaded()) {
				image(gif7, 0, 0);
				}
			}
  }
}

function mouseClicked() {
  if (gif6.loaded()) {
		function setup() {
			createCanvas(800, 600);
			gif8 = loadGif("gifs/street.gif");
		}
		function draw() {
			background(0);
				if (gif8.loaded()) {
				image(gif8, 0, 0);
				}
			}
  } else if (gif7.loaded()) {
		function setup() {
		createCanvas(800, 600);
		gif8 = loadGif("gifs/street.gif");
	}
	function draw() {
		background(0);
			if (gif8.loaded()) {
			image(gif8, 0, 0);
			}
		}
  }
}

function mouseClicked() {
	if (gif8.loaded()) {
		function setup() {
			createCanvas(800, 600);
			gif9 = loadGif("gifs/enteruc.gif");
		}
		function draw() {
			background(0);
				if (gif9.loaded()) {
				image(gif9, 0, 0);
				}
			}
	}
}

function mouseClicked() {
	if (gif9.loaded()) {
		function setup() {
			createCanvas(800, 600);
			gif10 = loadGif("gifs/loop.gif");
		}
		function draw() {
			background(0);
				if (gif10.loaded()) {
				image(gif10, 0, 0);
				}
			}
	}
}

function mouseClicked() {
	if (gif10.loaded()) {
		function setup() {
			createCanvas(800, 600);
			gif11 = loadGif("gifs/walk.gif");
		}
		function draw() {
			background(0);
				if (gif11.loaded()) {
				image(gif11, 0, 0);
				}
			}
	}
}

function mouseClicked() {
	if (gif11.loaded()) {
		function setup() {
			createCanvas(800, 600);
			img4 = loadImage("images/choose.jpg");
		}
		function draw() {
			image(img4, 0, 0)
			}
	}
}

function keyPressed() {
  if (keyCode === E) {
		function setup() {
			createCanvas(800, 600);
			gif12 = loadGif("gifs/eat.gif");
		}
		function draw() {
			background(0);
				if (gif12.loaded()) {
				image(gif12, 0, 0);
				}
			}
  } else if (keyCode === C) {
		function setup() {
			createCanvas(800, 600);
			gif13 = loadGif("gifs/class.gif");
		}
		function draw() {
			background(0);
				if (gif13.loaded()) {
				image(gif13, 0, 0);
				}
			}
  }
}

function mouseClicked() {
  if (gif13.loaded()) {
		function setup() {
			createCanvas(800, 600);
			gif14 = loadGif("gifs/walk.gif");
		}
		function draw() {
			background(0);
				if (gif14.loaded()) {
				image(gif14, 0, 0);
				}
			}
			function mouseClicked() {
			  if (gif14.loaded()) {
					function setup() {
						createCanvas(800, 600);
						gif12 = loadGif("gifs/eat.gif");
					}
					function draw() {
						background(0);
							if (gif12.loaded()) {
							image(gif12, 0, 0);
							}
						}}
					}
		} else if (gif12.loaded()) {
		function setup() {
		createCanvas(800, 600);
		gif14 = loadGif("gifs/walk.gif");
	}
	function draw() {
		background(0);
			if (gif14.loaded()) {
			image(gif14, 0, 0);
			}
		}
		 function mouseClicked() {
			 if (gif14.loaded()) {
				 function setup(){
					 createCanvas(800, 600);
					 gif13 = loadGif("gifs/class.gif");
				 }
				 function draw() {
					 background(0);
					 if (gif13.loaded()) {
					 image(gif13, 0, 0);
				 }
			 }
			 }
		 }
  }
}
