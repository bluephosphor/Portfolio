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

            if (top && top.state === UNVISITED) {
                neighbors.push(top);
            }
            if (right && right.state === UNVISITED) {
                neighbors.push(right);
            }
            if (bottom && bottom.state === UNVISITED) {
                neighbors.push(bottom);
            }
            if (left && left.state === UNVISITED) {
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