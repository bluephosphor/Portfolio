<h1>
  FEATURED PROJECT: <span style="color:#858">Niko Engine</span>
  <hr>
  <span style="color:#555; font-size: 0.7em">Posted: 2/16/2022</span>
</h1>

<h3>
  Technologies used: 
  <span style="color:#378">Lua</span>
</h3>

<a class="source-link" target="_blank" href="https://github.com/bluephosphor/NikoEngine">[Github Source]</a>

<img src="https://bluephosphor.github.io/portfolio/asset/img/projects/example18.gif" alt="">

I've always been a game developer at heart, and so when it came time to venture back into this dicipline again 
after months of learning web development I had a lot of decisions to make! I felt like I was beginning
to outgrow my engine, Game Maker. Despite how much I still love it, I wanted to venture out 
and experiment a bit with other things. 

I came across Love2D sometime in the past, but back then I was way too inexperienced with programming
to be able to appreciate it's barebones nature. However, more recently, after experimenting with it
I started to really fall in love(haha) with it's simplicity and openness. I could use whatever IDE 
I wanted and all I needed was the Love binary and a main.lua file to get started. 

<img src="https://bluephosphor.github.io/portfolio/asset/img/projects/example.gif" alt="">

<div class="img-footer">Little things like being able to organize inheritence of classes were on my mind from the very beginning</div>

Love2D is a very lightweight game development framework. It has a lot of nice APIs for doing 
some of the essential things like drawing to the screen, handling audio and inputs, ect. Other than that, 
you're pretty much on your own with how you structure things. This had me very excited.

```lua
function love.load()
end

function love.update(dt) 
end

function love.draw()
end
```
<div class="img-footer">This is the starting point of a Love program</div>

So, I got to work on what will be a nice starting point for future game projects. What's really nice about this is that I'm in control of pretty much everything that's happening and more importantly, I know *when* everything is hapening. I'm in charge of designing a class system, how the event and draw order works, what kind of file structure to use, what kinds of external tools I can integrate into my development cycle. The flexibility if it all!

The thing I'm most proud of is how this turned from a 2D game engine project into a 3D one. It just goes to show the benefits of a really flexible underlying system like this. Even if Love2D has '2D' in the name, all you need is a vertex shader and some clever math and boom. 3D.

<img src="https://bluephosphor.github.io/portfolio/asset/img/projects/example8.gif" alt="">

I've learned a lot from tinkering away at this project and I'm really excited to see where it goes from here.