//defining our path and project data
const PATH = "asset/md/proj/";
const Projects = {
    state: LIST,
    posts: [
        {
            name:   "Portfolio Site", 
            source: "portfolio_site.md", 
            posted: "10-13-21",
            tags:   ["html","scss","javascript"]
        },
        {
            name:   "Phosphora", 
            source: "phosphora.md", 
            posted: "10-13-21",
            tags:   ["gml","glsl"]
        },
    ],
    open_post: name => {
        let section     = id(url_slug(name) + '-content');
        let icon        = id(url_slug(name) + '-icon');
        let is_opened   = section.getAttribute('data-opened') === 'true';
      
        if(is_opened) {
            collapseSection(section);
            section.style.borderBottom = "none";
            icon.innerHTML = "[+]";
        } else {
            expandSection(section);
            section.style.borderBottom = "1px solid #CBC0CC70";
            icon.innerHTML = "[-]";
        }
    }
}

//getting our list html and saving it.
var RENDERED_LIST = '';
Projects.posts.forEach(elem => {RENDERED_LIST += Elements.proj_list_item(elem)});
id("posts").innerHTML = RENDERED_LIST;


