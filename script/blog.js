//defining our path and blog data
const PATH = "asset/md/blog/";
const Blog = {
    state: LIST,
    posts: [
        {
            name:   "My start with Game Maker", 
            source: "atc_history.md", 
            posted: "10-8-21",
            tags:   ["gamedev","personal","gml"]
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
    show_article: (source) => {
        state = ARTICLE;
        id('blog-posts').innerHTML = Elements.blog_back_button;
        Site.fetch_markdown(PATH + source, 'content');
    },

    show_list: () => {
        state = LIST;
        id('content').innerHTML = "";
        id('blog-posts').innerHTML = RENDERED_LIST;
    }
}

//getting our list html and saving it.
var RENDERED_LIST = '';
Blog.posts.forEach(elem => {
    RENDERED_LIST += `
        <div class="list-item" id=${url_slug(elem.name)}>
            <a class="list-title" onclick="Blog.show_article('${elem.source}')">${elem.name}</a>
            <div class="list-footer">
                <span class="list-date"> Posted: ${elem.posted}</span>
                <span class="list-tags">${Site.parse_tags(elem.tags)}</span>
            </div>
        </div>`;
    }
)

id("blog-posts").innerHTML = RENDERED_LIST;