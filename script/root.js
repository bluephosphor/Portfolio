// Keeping main site data in one place.
const Site = {
  nav:[
    {name: "Home",      url: "index.html"},
    {name: "Projects",  url: ""},
    {name: "Blog",      url: "blog.html"},
    {name: "Notes",     url: ""},
    {name: "Template",  url: "template.html"},
  ]
}
// Building the main navbar for every page.
const id = (id) => document.getElementById(id);
id('nav-main').innerHTML += `<img class="img-round" src="asset/phosphora.png">`;
Site.nav.forEach(elem => id("nav-main").innerHTML += `<a href="${elem.url}">${elem.name}</a>`);

// Some function declarations.

const irandom_range = (min, max) => Math.floor(Math.random() * (max - min) ) + min;

function generate_paras(num, sentenceMin, sentenceMax, tag){
  let words = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".toLowerCase().split(" ");
  let str = "", i = 0, j = 0;
  
  while (i < num){
    str += `<${tag}>`; 
    j = 0; while (j < irandom_range(sentenceMin, sentenceMax)){
      str += words[irandom_range(0,words.length)] + " ";
      j++;
    }
    str += `</${tag[0]}>`;
    i++;
  }
  
  return str;
}

function fetch_markdown(url,target){
    fetch(url)
    .then((r)=>{r.text()
    .then((d)=>{id(target).innerHTML = marked(d); console.log(d);})});
}

function create_post(obj){

}