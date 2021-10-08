# Title section
How I upgraded my mess of a game codebase into a global state system.

```
#macro INGAME		0
#macro PAUSE		1
#macro INV			2
#macro DIALOGUE 	3
#macro SHELL		4
#macro FISHING		5
#macro TRANSITION 	6
#macro CUTSCENE 	7

globalvar gamestate;
gamestate = INGAME;

```

---

## part[1] = "DnD, but not with Dungeons or Dragons";

Game Maker was my introduction to the whole world of programming. Even as a little kid I have very fond memories of playing around with the Drag and Drop system of the now ancient Game Maker 5. Building all kinds of things ranging from a platformer where you roll around as a cheeseburger, and a fangame where you play as Mario, but he has a sniper rifle and you pick off Paragoombas as they cascade towards you. (Don't tell Nintendo)

<img 
	 src="https://static.wikia.nocookie.net/gamemaker/images/d/dd/Version_5.png"
	 alt="Game Maker 5 User Interface in Windows XP"
	 >
	 
Humble beginnings.

That interest of course came and went as I grew up. It wasn't until later in my early adulthood that I would rediscover the software, and all the changes it had made in the years since.

<img 
	 src="https://m.media-amazon.com/images/G/01/DeveloperBlogs/AppstoreBlogs/GameMakerStudio2/0125_Debugging_image2._CB487876990_.png"
	 alt="Game Maker Studio 2 User Interface. Showcasing more advanced features such as GML (Game Maker Language), and the debugger."
	 >
	 
Needless to say I was very surprised and curious to try it out, and dispite how intimidating it may have looked, the old features I used to use were still around, and even improved.

<img 
	 src="https://i.gyazo.com/63749de4741125b29397d01d879ddf10.png"
	 alt="Game Maker Studio 2 User Interface. Showcasing a updated Drag and Drop system"
	 >

I would have never claimed to know anything about coding at this time, besides very basic HTML and CSS (we all remember MySpace and many of us remember Tumblr) so it was natural for me to gravitate back to this Drag and Drop system, since it was pretty easy to understand at a glance.

The other option, GML or Game Maker Language was around even in the Game Maker 5 days, but I never paid it any mind even back then, as there was always something easier and more accessable to me in the form of DnD. 

So I got to playing around. Could I make fun little games like I did in the past? Of course with real-life work and the lack of energy that comes with being an adult with ADHD, that creativity is not gonna come as easily, but as long as it was interesting to me it wouldn't be impossible to stay focused. It didn't take me long to get started with my first project. What would eventualy become a short action-rpg adventure where you play as a cute little ghost. For now though, it was a very simple demo where you play as a ghost, you can fly around, and can pick up objects like keys, and open doors.

As someone who was heavily inspired lately by indie RPG gems such as Oneshot and Undertale, I really wanted to get a dialog system going in my ghost game. Not knowing where to even begin with a task as complex as this, I turned to YouTube.

Unsuprising to me, there were many, many resources online supplied by a passionate community of creaters who all use the platform. The one immmediate problem that I noticed however, was that **every single tutorial was for GML!**

Dangit! How the heck was I supposed to learn how to do this if I didn't know a single thing about coding? Oh well. Luckily for me, Game Maker allows you to mix and match scripting styles. Adding blocks of GML code as DnD nodes meant I could seamleslly integrate some lines of code into my game logic. I'd just follow the tutorials, copy along, and I'd have text boxes. Boom.

I had no idea why the code I copied down worked, but hey, it did. and I was happy with that, for a time.

---

## part[2] = "No way, fuck this vertical croissant bullshit";

I ended up repeating this process several times throughout the early stages of development on this project.
	
- Have thing I want to build, or problem I want to solve.
- Go to YouTube, find tutorial written in GML.
- Follow tutorial, copy code.
- Profit?

Due to all of this copying and repetition, it didn't take long to start becoming familiar with the syntax of the code. Once this happened, it was almost instantly that I connected the dots. I actually *do* know some things about code, and not only that, but I have for a while. The Drag and Drop system is nothing more than a visual representation of the code I was looking at and copying down this whole time, so naturally it was really easy to follow the conditional flow of the statements.

So I started practicing. In Game Maker, there is even a feature that lets you translate your DnD scripts into code, so I would utilize this from time to time and try to get an idea of how to translate the things that I was already doing. As I got more and more familiar with the code I quickly came to yet another realization: This was actually easier?

Here, I'll show you:

<img 
	 src="dndexample.png"
	 alt="Crop of Game Maker Studio 2 User Interface. Showcasing a Drag and Drop script"
	 >



Here is a block of DnD logic. Now I'm gonna write this up in GML right quick:

```
if (instance_exists(obj_player)){
	direction = point_direction(obj_player.x,obj_player.y);
	speed = spd;
}

image_angle = direction;

if (hp <= 0){
	theScore += 5;
	audio_sound_pitch(snd_death,random_range(0.8,1.2));
	audio_play_sound(snd_death);
	instance_destroy();
}
```

So the first thing I noticed was just the screen real-estate that was being saved here. The second was just the ease of assigning variables with operators such as `=` and `+=` and how invoking functions is as easy as typing their name and adding any perameters inside the parenthases. 

While the DnD system is really good at laying out what is happening for someone who doesn't know code, the time saved 

1) writing `speed = spd`

over: 

1) Dragging a box into the interface
2) Opening a menu
3) Selecting an option
4) Then typing a value into a text box

can not be understated.

So needless to day, I was quickly converted into a GML person, and would use the language from then onto that project's completion.

---

# part[3] = A game about a forest.

TBC.

---

# part [4] = Real Talk.

TBC.