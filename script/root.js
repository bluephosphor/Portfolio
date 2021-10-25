// Keeping main site data in one place.
const [LIST, ARTICLE] = [0,1];
const Site = {
  page:[
    {name: "Home",      url: "index.html"},
    {name: "Projects",  url: "projects.html"},
    {name: "Blog",      url: "blog.html"},
  ],

  contact:[
    {name: "Twitter",   url:"https://twitter.com/toonlinks",              icon: `<i class="fab fa-twitter"></i>`},
    {name: "LinkedIn",  url:"https://www.linkedin.com/in/bluephosphor/",  icon: `<i class="fab fa-linkedin"></i>`},
    {name: "GitHub",    url:"https://github.com/bluephosphor",            icon: `<i class="fab fa-github"></i>`},
    {name: "Itch",      url:"https://okboy.itch.io/",                     icon: `<i class="fab fa-itch-io"></i>`},
    {name: "Bandcamp",  url:"https://bluephosphor.bandcamp.com/",         icon: `<i class="fab fa-bandcamp"></i>`},
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
    Elements.contact();
    id('posts').innerHTML = RENDERED_LIST;
  },
}
// Building the main navbars for every page.
Elements.navigation();
Elements.contact();