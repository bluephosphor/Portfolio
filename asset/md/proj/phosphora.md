## Technologies used: <span style="color:green">GML</span> | <span style="color:gray">GLSL</span> 

[Source](https://github.com/bluephosphor/phosphora-2-3) 

My main Game Maker project! I've been working on this on and off for a few years now when I have the time. Some key technical features I've built for this include.

- Procedural level generation
    
    - Several level generation algorithms were written for use in various areas, including Drunken Walk, Cellular Automata, and even a custom Maze generator using a Recursive Backtracking algorithm.

- State Machines and Ememy AI
    
    - Both the player and all mobile entities operate on a custom state machine. 

    - Utilizing state concepts, the player is able to have complex behaviors with no interferance between states. The player can run, spin attack, be in hitstun, and also swim.
    
    - Enemies can have passive, aggro and other states. Often times, sub states will be used to create even more complex behaviors (different attack patterns, blocking, ect.).

- UI Elements

    - The Dialogue system, Inventory, HUD and all menus were written from scratch.