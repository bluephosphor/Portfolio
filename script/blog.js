//defining our path and blog data
const PATH = "asset/md/blog/";
const Blog = {
    state: LIST,
    posts: [
        {
            name:   "My start with Game Maker", 
            source: "atc_history.md", 
            posted: "10-8-21",
            tags:   ["gamedev","personal","game maker"]
        },
    ],
}

//getting our list html and saving it.
var RENDERED_LIST = '';
Blog.posts.forEach(elem => {RENDERED_LIST += Elements.blog_list_item(elem)});
id("posts").innerHTML = RENDERED_LIST;