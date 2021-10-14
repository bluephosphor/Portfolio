### Technologies used: <span style="color:cyan">HTML</span> | <span style="color:red">SCSS</span> | <span style="color:yellow">JavaScript</span>

[Source](https://github.com/bluephosphor/portfolio) 

This very site! It feels appropriate to have this as the first project as it was my first full web project. I used plain html/css/javascript with some scss to preprocess the style. Simplicity was a core concept going into this perticular project.

I think that keeping framework usage to a minimal was appropriate for a project of this scope, and as such has given me an opportunity to come up with my own ways to organize things and make dynamic data happen.

Some key features:

- ### Loading inner page content via Markdown.

    Using the JavaScript Fetch API, I was able to load .md files dynamically in the front end without using a static site generator or a dynamic server.

    ```javascript
    fetch_markdown = (markdown_url, target_element) => {
        fetch(target_url)
        .then((r)=>{r.text()
        .then((d)=>{id(target_element).innerHTML = marked(d)})});
    },
    ```
    ##### Note: The id() method shown here is just a shorthand method I use for `Document.getElementById().`
    
    Maybe this is a hacky solution, I'm not sure to be honest, but it worked well for my purposes, so I'm happy with it.

- ### Saving reuseable elements to be reloaded functionaly
   
    ``` javascript
    const Elements = {
        // ...
        proj_list_item: (obj) => { 
            let path = "asset/md/proj/";
            let name = url_slug(obj.name);
            let content_id = name + '-content';
            return `
            <div class="list-item" id=${name}>
                <a class="list-title" onclick="Projects.open_post('${obj.name}')">${obj.name}</a>
                <article class="proj-content" id=${content_id}>${Site.fetch_markdown(path + obj.source, content_id)}</article>
                <div class="list-footer">
                    <span class="list-date"> Posted: ${obj.posted}</span>
                    <span class="list-tags">${Site.parse_tags(obj.tags)}</span>
                </div>
            </div>`;
        }
    }   
    ```