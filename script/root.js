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

  contact:[
    {name: "Twitter",   url:"https://twitter.com/toonlinks",              icon: ""},
    {name: "LinkedIn",  url:"https://www.linkedin.com/in/bluephosphor/",  icon: ""},
    {name: "GitHub",    url:"https://github.com/bluephosphor",            icon: ""},
    {name: "itch",      url:"https://okboy.itch.io/",                     icon: ""},
    {name: "Bandcamp",  url:"https://bluephosphor.bandcamp.com/",         icon: ""},
  ],
  
  fetch_markdown: (url, target) => {
    fetch(url)
    .then((r)=>{r.text()
    .then((d)=>{
      id(target).innerHTML = marked(d);
      hljs.highlightAll();
    })});
  },
  
  show_article: (source) => {
    state = ARTICLE;
    id('posts').innerHTML = Elements.back_button;
    Site.fetch_markdown(PATH + source, 'content');
    delay(100).then(() => Elements.article_nav(id('content')));
  },
  
  show_list: () => {
    state = LIST;
    id('content').innerHTML = "";
    id('nav-secondary').innerHTML = "";
    id('posts').innerHTML = RENDERED_LIST;
  },
}
// Building the main navbar for every page.
Elements.navigation();