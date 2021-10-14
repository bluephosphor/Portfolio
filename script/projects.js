//defining our path and project data
const PATH = "asset/md/proj/";
const Projects = {
    state: LIST,
    posts: [
        {
            name:   "Portfolio Site", 
            source: "portfolio_site.md", 
            posted: "October 2021 - Current",
            tags:   ["html","scss","javascript"]
        },
        {
            name:   "Phosphora", 
            source: "phosphora.md", 
            posted: "January 2020 - Current",
            tags:   ["gml","glsl"]
        },
    ],
    open_post: name => {
        let section     = id(url_slug(name) + '-content');
        let icon        = id(url_slug(name) + '-icon');
        let is_opened   = section.getAttribute('data-opened') === 'true';
      
        if(is_opened) {
            collapseSection(section);
            id('nav-secondary').innerHTML = "";
            section.style.borderBottom = "none";
            icon.innerHTML = "[+]";
        } else {
            expandSection(section);
            Site.generate_article_nav(section);
            section.style.borderBottom = "1px solid #CBC0CC70";
            icon.innerHTML = "[-]";
        }
    }
}

//getting our list html and saving it.
var RENDERED_LIST = '';
Projects.posts.forEach(elem => {RENDERED_LIST += Elements.proj_list_item(elem)});
id("posts").innerHTML = RENDERED_LIST;