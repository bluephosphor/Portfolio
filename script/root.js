// Some small essentials. 
const id            = id          => document.getElementById(id);
const irandom_range = (min, max)  => Math.floor(Math.random() * (max - min) ) + min;
const url_slug      = text        => text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
const delay         = time        => new Promise(resolve => setTimeout(resolve, time));

// Keeping main site data in one place.
const [LIST, ARTICLE] = [0,1];
const Site = {
  page:[
    {name: "Home",      url: "index.html"},
    {name: "Projects",  url: "projects.html"},
    {name: "Blog",      url: "blog.html"},
    {name: "Notes",     url: ""},
    {name: "Template",  url: "template.html"},
    {name: "Test",      url: "p5.html"},
  ],
  
  fetch_markdown: (url, target) => {
    fetch(url)
    .then((r)=>{r.text()
    .then((d)=>{
      id(target).innerHTML = marked(d);
      hljs.highlightAll();
    })});
  },
  
  parse_tags: arr => {
    let [str, mod, hash] = ['','',''];
    arr.forEach(e => {
      switch(e){
        case 'html':        mod  = ' style="color: cyan;"';     break;
        case 'css':         mod  = ' style="color: pink;"';     break;
        case 'scss':        mod  = ' style="color: red;"';      break;
        case 'javascript':  mod  = ' style="color: yellow;"';   break;
        case 'gml':         mod  = ' style="color: green;"';    break;
        case 'glsl':        mod  = ' style="color: gray;"';     break;
        default:            hash = '#';                         break;
      }
      str += `<a class="tag"${mod}>${hash}${e}</a>`;
    });
    return str;
  },
  
  show_article: (source) => {
    state = ARTICLE;
    id('posts').innerHTML = Elements.back_button;
    Site.fetch_markdown(PATH + source, 'content');
    delay(100).then(() => Site.generate_article_nav(id('content')));
  },
  
  show_list: () => {
      state = LIST;
      id('content').innerHTML = "";
      id('nav-secondary').innerHTML = "";
      id('posts').innerHTML = RENDERED_LIST;
  },
  
  generate_article_nav: (article) =>{
    let target  = id('nav-secondary');
    let list    = article.querySelectorAll("h2,h3,h4,h5");

    target.innerHTML = `<h3>Article nav:</h3>`
    list.forEach(elem => target.innerHTML += `<a href="#${elem.id}">${elem.innerText}</a>`);
  }
}
// Building the main navbar for every page.
id('nav-main').innerHTML += Elements.sidebar_img;

Site.page.forEach(elem => id("nav-main").innerHTML += `<a href="${elem.url}">${elem.name}</a>`);