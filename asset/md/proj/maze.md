### Technologies used: <span style="color:cyan">HTML</span> | <span style="color:pink">CSS</span> | <span style="color:yellow">JavaScript</span> (p5.js)

<iframe src="https://bluephosphor.github.io/portfolio/asset/example/lgv.html" height="500 "title="maze"></iframe>

<a class="source-link" target="_blank" href="https://bluephosphor.github.io/portfolio/asset/example/lgv.html">[Full page version]</a>

<a class="source-link" target="_blank" href="https://github.com/bluephosphor/portfolio/blob/main/asset/example/lgv">[Source]</a>

For this personal project I decided to showcase the maze generation algorithm I used in my game Phosphora.

It uses an iterative implementation of what's called the Randomized depth-first search algorithm, also called a 'Recursive backtracker'. Since we're doing this iteratively, we're creating a virtual sort of recursion by creating our own stack. We start with a grid of 'cells'. We pick an initial cell to start with, then we push it onto our stack after marking it as 'visited'. From there, each iteration goes as follows:

- While the stack is not empty:
    
    - Pop a cell location from the stack and make it out 'current cell'
    
    - If current cell has any neighbors who have not been marked as visited:
        
        - Push current cell onto stack
        
        - Choose an unvisited neighbor at random
        
        - Remove boundary separating our current and chosen cells
        
        - Mark that chosen cell as visited and puch it onto the stack