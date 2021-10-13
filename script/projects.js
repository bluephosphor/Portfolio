//defining our path and blog data
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
            source: "portfolio_site.md", 
            posted: "10-13-21",
            tags:   ["gml","glsl"]
        },
    ],
    open_post: name => {
        let section = id(url_slug(name) + '-content');
        let is_opened = section.getAttribute('data-opened') === 'true';
      
        if(is_opened) {
            collapseSection(section);
        } else {
            expandSection(section);
        }
    }
}

//getting our list html and saving it.
var RENDERED_LIST = '';
Projects.posts.forEach(elem => {RENDERED_LIST += Elements.proj_list_item(elem)});
id("posts").innerHTML = RENDERED_LIST;


