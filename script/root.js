// Some small essentials. 
const id = (id) => document.getElementById(id);
const irandom_range = (min, max) => Math.floor(Math.random() * (max - min) ) + min;
const url_slug = (text) => text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

// Keeping main site data in one place.
const [LIST, ARTICLE] = [0,1];
const Site = {
  page:[
    {name: "Home",      url: "index.html"},
    {name: "Projects",  url: ""},
    {name: "Blog",      url: "blog.html"},
    {name: "Notes",     url: ""},
    {name: "Template",  url: "template.html"},
    {name: "Test",      url: "pix.html"},
  ],
  fetch_markdown: (url,target)=>{
    fetch(url)
    .then((r)=>{r.text()
    .then((d)=>{id(target).innerHTML = marked(d)})});
  },
  parse_tags: (arr) => {
    let str = '';
    arr.forEach(e => {str += `<span class="tag">#${e}</span>`});
    return str;
  }
}
// Building the main navbar for every page.
id('nav-main').innerHTML += `<img class="img-round" src="asset/img/phosphora.png">`;

Site.page.forEach(elem => id("nav-main").innerHTML += `<a href="${elem.url}">${elem.name}</a>`);