### Technologies used: <span style="color:cyan">HTML</span> | <span style="color:pink">CSS</span> | <span style="color:yellow">JavaScript</span> (p5.js)

<iframe src="https://bluephosphor.github.io/portfolio/asset/example/lgv.html" height="500 "title="maze"></iframe>

<a class="source-link" target="_blank" href="https://bluephosphor.github.io/portfolio/asset/example/lgv.html">[Full page version]</a>

<a class="source-link" target="_blank" href="https://github.com/bluephosphor/portfolio/blob/main/asset/example/lgv">[Source]</a>

For this personal project I decided to showcase the maze generation algorithm I used in my game Phosphora. for context, Phosphora is a roguelike with unique procedurally generated levels. I needed a way to generate a labyrinth that would be unique every time, and also look nice and neat like you would expect. 

The solution is really interesting, and so I thought it would be fun to slow it down and visualize it.

We start with a grid of 'cells'. We then impliment an iterative Depth-First-Search algorithm to traverse our grid of cells and operate on them, while keeping track of what cells we've vistied in a stack. How this works is we start by picking an initial cell to start with, then we push that cell onto our stack. From there, each iteration goes as follows:

```javascript
while (!finished) {
    // Mark current cell as visited, then check for unvisited neighbors.
    current.state = VISITED;
    let next = current.check_neighbors();
    // The check_neighbors function picks an adjacent cell at random,
    // then it determines whether or not it has been visited.
    // If not, then that cell is returned as our next cell.

    if (next) {
        // If there is a next cell, push the current cell into our stack.
        stack.push(current);
        current.state = IN_STACK;

        // Remove boundary between next and current cells.
        remove_walls(current, next);

        // Move to next cell, and repeat.
        current = next;
    
    } else if (stack.length > 0) {
        // If no unvisited neighbors, refer back to the stack, and repeat.
        current = stack.pop();
        current.state = CURRENT;

    } else {
        // Once we get here we know that we've cleared the stack
        // AND there are no more unvisited neighbors.
        
        finished = true; // Success!

    }
}
```

I like to think of it like an ant digging tunnels. Our current cell is our ant, and it's constantly creating passages until it gets stuck, then it's time to turn around go back until it finds a way it hasn't gone yet. This process is extremely thorough and always leaves us with a unique labyrinth.

Obviously, in the above live example, we're not operating inside of the while loop (unless we pressed 'instant') rather we're letting each step take place on a given frame. It was really fun to visualize the different operations using different colors and I think it creates an effect that is really interesting and satisfying to watch. Try entering a lower framerate to see the process in more detail!