### Technologies used: <span style="color:cyan">HTML</span> | <span style="color:red">SCSS</span> | <span style="color:yellow">JavaScript</span>

<a class="source-link" target="_blank" href="https://github.com/bluephosphor/portfolio">[Source]</a>

This very site! It feels appropriate to have this as the first project as it was my first full web project. I used plain html/css/javascript with some scss to make my stylesheets a little cleaner. Simplicity was a core concept going into this perticular project.

I think keeping framework usage to a minimal was appropriate for a project of this scope, and as such has given me an opportunity to come up with my own ways of organizing things and making dynamic data happen.

Some key features:

#### Loading inner page content via Markdown.

Using the JavaScript Fetch API, I was able to load .md files dynamically in the front end without using a static site generator or a dynamic server.

```javascript
fetch_markdown = (markdown_url, target_element) => {
    fetch(target_url)
    .then((response)=>{response.text()
    .then((data)=>{id(target_element).innerHTML = marked(data)})});
},
```
<div class="img-footer">Note: The id() method shown here is just a shorthand method I use for <code>Document.getElementById()</code>.</div>

Maybe this is a hacky solution, I'm not sure to be honest, but it worked well for my purposes, so I'm happy with it.

#### Saving reuseable elements to be reloaded functionaly

Using nice modern features such as string template literals, it's quite easy to set up functions in vanilla JS to do lots of heavy lifting for us and to make our code more modular.
   
``` javascript
const Elements = {
    // ...
    proj_list_item: obj => {
		let path = "asset/md/proj/";
		let name = url_slug(obj.name);
		let content_id = name + '-content';
		return `
			<div class="list-item" id=${name}>
				<a class="list-title" onclick="Projects.open_post('${obj.name}')">
					${obj.name}
					<span class="expand-icon" id=${name + '-icon'}>[+]</span>
				</a>
				<article class="proj-content" id=${content_id}>
					${Site.fetch_markdown(path + obj.source, content_id)}
				</article>
					<div class="list-footer">
					<span class="list-date">${obj.posted}</span>
					<span class="list-tags">${Elements.tags_list(obj.tags)}</span>
				</div>
			</div>`;
	}
}
```
<div class="img-footer">This function is what generates each project section for this page, such as the one you're reading now!</div>