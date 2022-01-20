//defining our path and project data
const PATH = "asset/md/proj/";
const Projects = {
    state: LIST,
    posts: [
        {
            name:   "GOT Games?", 
            source: "gotgames.md", 
            posted: "November 2021 - Current",
            tags:   ["web-dev","vue", "firebase"]
        },
        {
            name:   "Nearby Asteroids (NASA API Demo)", 
            source: "asteroids.md", 
            posted: "October 2021",
            tags:   ["web-dev","html","css","p5"]
        },
        {
          name:   "Expandable Info Cards", 
          source: "info-cards.md", 
          posted: "January 2022",
          tags:   ["web-dev","svelte"]
        },
        {
            name:   "Labyrinth Generator", 
            source: "maze.md", 
            posted: "October 2021",
            tags:   ["web-dev","html","css","p5"]
        },
        {
            name:   "This Site", 
            source: "portfolio_site.md", 
            posted: "Octover 2021 - Current",
            tags:   ["web-dev","html","scss","javascript"]
        },
        {
            name:   "Phosphora", 
            source: "phosphora.md", 
            posted: "January 2020 - Current",
            tags:   ["game-dev","gml","glsl"]
        },
        {
            name:   "25 + 5 Clock", 
            source: "255clock.md", 
            posted: "October 2021",
            tags:   ["web-dev","html","css","javascript"]
        },
    ],
    open_post: name => {
        let section     = id(url_slug(name) + '-content');
        let icon        = id(url_slug(name) + '-icon');
        let is_opened   = section.getAttribute('data-opened') === 'true';
      
        if(is_opened) {
            collapse_section(section);
            Elements.contact();
            section.style.borderBottom = "none";
            icon.innerHTML = "[+]";
        } else {
            expand_section(section);
            Elements.article_nav(section);
            section.style.borderBottom = "1px solid #CBC0CC70";
            icon.innerHTML = "[-]";
        }
    }
}

//getting our list html and saving it.
var RENDERED_LIST = '<h2 align="center">Press [+] on a Project Name to learn more about it!</h2>';
Projects.posts.forEach(elem => {RENDERED_LIST += Elements.proj_list_item(elem)});
id("posts").innerHTML = RENDERED_LIST;