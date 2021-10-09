const [LIST, ARTICLE, PATH]
 =    [0,    1,       "asset/md/blog/",];

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
            name:   "A Test Post", 
            source: "test.md", 
            posted: "1-1-75",
            tags:   ["some","fake","tags"]
        },
    ]
}

var RENDERED_LIST = '';

Blog.posts.forEach(elem => {
    RENDERED_LIST += `
        <div class="list-item" id=${url_slug(elem.name)}>
            <a class="list-title" onclick="Site.fetch_markdown('${PATH + elem.source}', 'content')">${elem.name}</a>
            <div class="list-footer">
                <span class="list-date"> Posted: ${elem.posted}</span>
                <span class="list-tags">${Site.parse_tags(elem.tags)}</span>
            </div>
        </div>`;
    }
)

id("blog-posts").innerHTML = RENDERED_LIST;

//Site.fetch_markdown(PATH + article, 'content');