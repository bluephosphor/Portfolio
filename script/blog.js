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
        {
            name:   "A test post", 
            source: "test.md", 
            posted: "1-1-75",
            tags:   ["some","fake","tags"]
        },
        {
            name:   "Another test post", 
            source: "test.md", 
            posted: "2-10-95",
            tags:   ["some","more","fake","tags"]
        },
    ],
}

//getting our list html and saving it.
var RENDERED_LIST = '';
Blog.posts.forEach(elem => {RENDERED_LIST += Elements.blog_list_item(elem)});
id("posts").innerHTML = RENDERED_LIST;