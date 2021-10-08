const intro = 
` # niko.

Welcome to my site! My name is Jonny (my friends call me Niko) and I'm currently self-studying to become a web-developer! This is where I'll be hosting portfolio projects, gamedev and music related things, blog posts and more. 

Thanks for stopping by! :)`;

id('content').innerHTML = marked(intro);
id('nav-secondary').innerHTML += `<img class="img-round" src="asset/fallshrubbie.png">`;