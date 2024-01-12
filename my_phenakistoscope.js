const SLICE_COUNT = 18;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.set_direction(CCW);
  pScope.load_image("Water_2", "png");
  pScope.load_image("Water", "png");
  pScope.load_image("Water_3", "png");
  pScope.load_image("Fishes", "png");
  pScope.load_image("Fishes_2", "png");
}

function setup_layers(pScope){
  
  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries
  
  var layer1 = new PLayer(bubbles);
  layer1.mode( SWIRL (4) );
  layer1.set_boundary( 20, 1000 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(imagedraw);
  layer3.mode( RING )
  layer3.set_boundary( 0, 1000 );

  var layer4 = new PLayer(boarder);
  layer4.mode( SWIRL (5) );
  layer4.set_boundary( 125, 100 );

}

function imagedraw (x, y, animation, pScope){
  
  pScope.draw_image("Water",animation.wave()*60,300);
  pScope.draw_image("Water_2",animation.wave()*80,400);
  pScope.draw_image("Water_3",animation.wave()*100,500);

  pScope.draw_image("Fishes",animation.wave()*40,630,);
  pScope.draw_image("Fishes_2",animation.wave()*30,750,800,10);
}

function bubbles(x, y, animation, pScope){

  noStroke();
  scale(animation.frame*9);
  fill(45, 178, 220);
  ellipse(0,0,100,100);

  fill(255, 255, 255, 20);
  ellipse(x,500,150,100);

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  
  
  strokeWeight(1);
  stroke(119, 210, 228, 127);
  fill(119, 210, 228, 180, 127);
  arc(x,y,200,800,backgroundArcStart,backgroundArcEnd); 

}

function boarder(x, y, animation, pScope){

  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 180 - angleOffset;
  let backgroundArcEnd = 50 + angleOffset;

  noStroke();
  fill(31, 33, 85, 127);
  arc(700,1000,800,500,backgroundArcStart,backgroundArcEnd);
}
