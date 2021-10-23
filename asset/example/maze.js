const [TOP, RIGHT, BOTTOM, LEFT, SUPER_SLOW, SLOW, FAST, UNVISITED, VISITED, IN_STACK, CURRENT, NEXT] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];



class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true];
        this.visited = false;
        this.in_stack = false;
        this.state = UNVISITED;

        this.check_neighbors = () => {
            let neighbors = [];

            let top     = grid[index(i,     j - 1)];
            let right   = grid[index(i + 1, j)];
            let bottom  = grid[index(i,     j + 1)];
            let left    = grid[index(i - 1, j)];

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

        };

        this.show = () => {
            let color;
            let mod = 2;
            
            let x = w + this.i * w * mod;
            let y = w + this.j * w * mod;

            switch (this.state) {
                case VISITED:   color = [0, 0, 255];    break;
                case IN_STACK:  color = [150, 0, 100];  break;
                case CURRENT:   color = [255, 0, 0];    break;
                case NEXT:      color = [0, 255, 0];    break;
                default:        color = [51];           break;
            }

            fill(...color);
            rect(x, y, w * mod, w * mod);

            if (this.state != UNVISITED) {
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
}

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

function set_mode(mode) {
    mode = mode;
    initialize();

    switch(mode){
        case FAST: while (!finished) maze_step();   break;
        case SUPER_SLOW: frameRate(10);             break;
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
    const MOBILE = (windowWidth < 700);
    let dims = [344,344];
    if (MOBILE) dims = [248,344];
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