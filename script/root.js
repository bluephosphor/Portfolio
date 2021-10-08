// Some small essentials. 
const id = (id) => document.getElementById(id);
const irandom_range = (min, max) => Math.floor(Math.random() * (max - min) ) + min;

// Keeping main site data in one place.
const Site = {
  page:[
    {name: "Home",      url: "index.html"},
    {name: "Projects",  url: ""},
    {name: "Blog",      url: "blog.html"},
    {name: "Notes",     url: ""},
    {name: "Template",  url: "template.html"},
  ],
  fetch_markdown: (url,target)=>{
    fetch(url)
    .then((r)=>{r.text()
    .then((d)=>{id(target).innerHTML = marked(d); console.log(d);})});
  }
}
// Building the main navbar for every page.
id('nav-main').innerHTML += `<img class="img-round" src="asset/img/phosphora.png">`;

Site.page.forEach(elem => id("nav-main").innerHTML += `<a href="${elem.url}">${elem.name}</a>`);