### Technologies used: <span style="color:cyan">HTML</span> | <span style="color:pink">CSS</span> | <span style="color:yellow">JavaScript</span> (p5.js)

<iframe src="https://bluephosphor.github.io/portfolio/asset/example/lgv.html" height="500 "title="maze"></iframe>

<a class="source-link" target="_blank" href="https://bluephosphor.github.io/portfolio/asset/example/lgv.html">[Full page version]</a>

<a class="source-link" target="_blank" href="https://github.com/bluephosphor/portfolio/blob/main/asset/example/lgv">[Source]</a>

For this personal project I decided to showcase the maze generation algorithm I used in my game Phosphora. for context, Phosphora is a roguelike with unique procedurally generated levels. I needed a way to generate a labyrinth that would be unique every time, and also look nice and neat like you would expect. 

The solution is really interesting.

We start with a grid of 'cells'. We then impliment a Breadth-First Search philosiphy to traverse our grid of cells and operate on them. We pick an initial cell to start with, then we push it onto our stack. From there, each iteration goes as follows:

```javascript
while (!finished) {
    // Mark current cell as visited, then check for unvisited neighbors.
    current.state = VISITED;
    let next = current.check_neighbors();

    if (next) {
        // If there is a next cell, push the current cell into our stack.
        stack.push(current);
        current.state = IN_STACK;

        // Remove boundary between next and current cells.
        remove_walls(current, next);

        // Move to next cell.
        current = next;
    
    } else if (stack.length > 0) {
        // If no unvisited neighbors, move on and refer back to the stack.
        current = stack.pop();
        current.state = CURRENT;

    } else {
        // Once we get here we know that we've cleared the stack
        // and there are no more unvisited neighbors.
        finished = true;

    }
}
```

I like to think of it like an ant digging tunnels. Our curent cell is our ant, and it's constantly creating passages until it gets stuck, then it's time to turn around go back until it finds a way it hasn't gone yet. This process is extremely thorough and always leaves us with a unique labyrinth.