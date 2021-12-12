const [TOP, RIGHT, BOTTOM, LEFT, SUPER_SLOW, SLOW, FAST, UNVISITED, VISITED, IN_STACK, CURRENT, NEXT] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const id    = id => document.getElementById(id);
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

var cols, rows;
var current, finished, stack;

var grid    = [];
var mode    = SLOW;

const w = 8;

function initialize() {
    frameRate(30);
    
    grid        = [];
    stack       = [];
    finished    = false;

    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    current = grid[0];
}

function set_mode(mode, fps) {
    mode = mode;
        
    initialize();
    
    if (mode === FAST){
        while (!finished) maze_step();   
    } else {
        fps = parseInt(fps);
        fps = clamp(fps,1,60);
        id('setfps').value = fps.toString();
        
        frameRate(fps);
    }
    
}



function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
    }
    return i + j * cols;
}


function remove_walls(a, b) {
    let x = a.i - b.i;
    
    if (x === 1) {
        a.walls[LEFT]   = false;
        b.walls[RIGHT]  = false;
    } else if (x === -1) {
        a.walls[RIGHT]  = false;
        b.walls[LEFT]   = false;
    }
    
    let y = a.j - b.j;
    
    if (y === 1) {
        a.walls[TOP]    = false;
        b.walls[BOTTOM] = false;
    } else if (y === -1) {
        a.walls[BOTTOM] = false;
        b.walls[TOP]    = false;
    }
}

function maze_step() {
    // mark current cell as visited, then check for unvisited neighbors
    current.state = VISITED;
    let next = current.check_neighbors();

    if (next) {
        // push current cell into stack
        stack.push(current);
        current.state = IN_STACK;

        // remove boundary between next and current cells
        remove_walls(current, next);

        // move to next cell
        current = next;
    } else if (stack.length > 0) {

        //is no unvisited neighbors, refer back to stack
        current = stack.pop();
        current.state = CURRENT;

    } else {
        finished = true;
    }
}

function setup() {
    const MOBILE = (parent.document.body.clientWidth < 700);
    let dims = (MOBILE) ? [248,344] : [344,344];
    createCanvas(...dims);
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