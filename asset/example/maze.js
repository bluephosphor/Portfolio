const [TOP, RIGHT, BOTTOM, LEFT, SUPER_SLOW, SLOW, FAST, UNVISITED, VISITED, IN_STACK, CURRENT, NEXT] = [0,1,2,3,4,5,6,7,8,9,10,11];

function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;
    this.in_stack = false;
    this.state = UNVISITED;

    this.check_neighbors = function() {
        var neighbors = [];

        var top     = grid[index(i, j - 1)];
        var right   = grid[index(i + 1, j)];
        var bottom  = grid[index(i, j + 1)];
        var left    = grid[index(i - 1, j)];

        if (top && top.state == UNVISITED) {
            neighbors.push(top);
        }
        if (right && right.state == UNVISITED) {
            neighbors.push(right);
        }
        if (bottom && bottom.state == UNVISITED) {
            neighbors.push(bottom);
        }
        if (left && left.state == UNVISITED) {
            neighbors.push(left);
        }

        if (neighbors.length > 0) {
            let candidate = neighbors[floor(random(0, neighbors.length))];
            candidate.state = NEXT;
            return candidate;
        } else {
            return undefined;
        }

    }
    this.highlight = function() {
        var x = w + this.i * w * 2;
        var y = w + this.j * w * 2;
        fill(255, 0, 0);
        circle(x + w / 2, y + w / 2, w, w);
    }

    this.show = function() {
        var x = w + this.i * w * 2;
        var y = w + this.j * w * 2;
        
        let color;
        let mod = 2; 
        switch(this.state){
          case VISITED:   color = [0,0,255]; break;
          case IN_STACK:  color = [150,0,100]; break;
          case CURRENT:   color = [255,0,0]; break;
          case NEXT:      color = [0,255,0]; break;
          default:        color = [0]; break;
        }
        
        
        fill(...color);
        rect(x,y,w*mod,w*mod);
        
        if (this.state != UNVISITED){
        fill(200);
        //draw corners
        
        //top left
        rect(x - w, y - w, w, w);
        //top right
        rect(x + w, y - w, w, w);
        //bottom left
        rect(x - w, y + w, w, w);
        //bottom right
        rect(x + w, y + w, w, w);
        
        //draw walls
        if (this.walls[TOP]) {
            rect(x, y - w, w, w);
        }
        if (this.walls[RIGHT]) {
            rect(x + w, y, w, w);
        }
        if (this.walls[BOTTOM]) {
            rect(x, y + w, w, w);
        }
        if (this.walls[LEFT]) {
            rect(x - w, y, w, w);
        }
      }
    }
}

var cols, rows;
var w = 8;
var grid = [];
var mode = SLOW;

var current;
var finished;
var step_type = 0;

var stack;

function initialize(){
    grid = [];
    finished = false;
    stack = [];
    frameRate(30);

    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
          var cell = new Cell(i, j);
          grid.push(cell);
        }
      }
    current = grid[0];
}

function set_mode(mode){
    mode = mode;
    initialize();

    if (mode === FAST){
      while (!finished) maze_step();
    } else if (mode === SUPER_SLOW){
      frameRate(10);
    }
}



function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}


function remove_walls(a, b) {
  var x = a.i - b.i;
  if (x === 1) {
    a.walls[LEFT]   = false;
    b.walls[RIGHT]  = false;
  } else if (x === -1) {
    a.walls[RIGHT]  = false;
    b.walls[LEFT]   = false;
  }
  var y = a.j - b.j;
  if (y === 1) {
    a.walls[TOP]    = false;
    b.walls[BOTTOM] = false;
  } else if (y === -1) {
    a.walls[BOTTOM] = false;
    b.walls[TOP]    = false;
  }
}

function maze_step(){
  current.state = VISITED;
  //current.highlight();
  // STEP 1
  
  var next = current.check_neighbors();

  if (next) {
    //next.state = VISITED;

    // STEP 2
    stack.push(current);
    current.state = IN_STACK;

    // STEP 3
    remove_walls(current, next);

    // STEP 4
    current = next;
  } else if (stack.length > 0) {
  
    current = stack.pop();
    current.state = CURRENT;

  } else {
    finished = true;
  }
}

function setup() {
  createCanvas(348, 348);
  cols = floor(width / w / 2);
  rows = floor(height / w / 2);
  initialize();
}

function draw() {
  background(51);
  noStroke();
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }
  if (mode === SLOW) maze_step();
}