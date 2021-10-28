const today = new Date;
const TODAY = today.toISOString().slice(0,10);

const api_key = "xhPkYdTaRgnJPubfVCFZNC3mGlrETe4BDP5GjGzG";
const api_url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${TODAY}&end_date=${TODAY}&api_key=${api_key}`;

const [START, LOADING, DISPLAY_DATA] = [0,1,2];

var application_state = START;
var Response, Asteroids, Earth, offset, zoom, canvas
var draw_data = [];
var html_list = '';
var DAY = TODAY; console.log(DAY);

async function fetch_json(url) {
    if (application_state === DISPLAY_DATA) return;
    
    //request data, wait for it
    application_state   = LOADING;
    Response            = await fetch(url);
    Asteroids           = await Response.json();
    
    //once we have response, display data
    application_state   = DISPLAY_DATA;
    Asteroids.near_earth_objects[DAY].forEach((ast,i) => {
        //get data for drawing in canvas
        let dist  = ast.close_approach_data[0].miss_distance.astronomical  * 768;
        let rad   = ast.estimated_diameter.meters.estimated_diameter_min / 4;
        let spd   = ast.close_approach_data[0].relative_velocity.kilometers_per_second / 10000;
        
        draw_data[i] = Earth.add_child(dist,rad,10*i,spd);
        draw_data[i].reference_index = i;

        //get data for webpage
        html_list += 
        `<div class="container-x ast-label" onclick="expand_info('${ast.name}')">
            <span class="ast-name">${ast.name}</span>
            <span class="expand-icon" id='${url_slug(ast.name)}-icon'>[+]</span>
        </div>
        <div class="container-y ast-info" id='${url_slug(ast.name)}-info' index=${i}>
            <span class="ast-attribute">ID: ${ast.id}</span>
            <span class="ast-attribute">Magnitude: ${ast.absolute_magnitude_h}h</span>
            <span class="ast-attribute">Diameter (Estimate):<br> ${ast.estimated_diameter.kilometers.estimated_diameter_min}km - ${ast.estimated_diameter.kilometers.estimated_diameter_max}km</span>
            <span class="ast-attribute">Near miss recorded:<br>${ast.close_approach_data[0].close_approach_date_full}</span>
            <span class="ast-attribute">Recorded velocity:<br>${ast.close_approach_data[0].relative_velocity.kilometers_per_second}km/s</span>
            <span class="ast-attribute">Recorded distance:<br>${ast.close_approach_data[0].miss_distance.kilometers}km</span>
            <span class="ast-attribute">Potentially Hazardous: ${(ast.is_potentially_hazardous_asteroid) ? '<span style="color:red"> Yes </span>' : '<span style="color:green"> No </span>'} </span>
        </div>`;
    })
    id("info").innerHTML += html_list;
}

function setup(){
    canvas  = createCanvas(768, 768);
    offset  = createVector(width/2,height/2);
    zoom    = 1;

    canvas.mouseWheel(event => zoom = clamp(zoom + event.deltaY/1000, 0.1,10));
    
    Earth = new Orbit(0,0,width/10,0);
    textFont('Monospace');
}

function draw(){
    
    //application surface
    background(0);
    push(); //save drawing state before transformations
    translate(offset.x,offset.y);
    scale(zoom);
    Earth.show();
    
    draw_data.forEach((ast) => {
        ast.update();
        ast.show();
    })
    
    pop(); //reset drawing state for gui
    fill(255);
    let text_location = [8, 16];
    
    switch(application_state){
        case START: 
            text("Press 'Get Today's Data' to get started.", ...text_location);
            break;
        case LOADING: 
            text("Loading ASTEROID DATA...", ...text_location);
            break;
        case DISPLAY_DATA: 
            text(`Displaying ASTEROID DATA for ${today.toLocaleDateString(undefined)} - Number of items: ${Asteroids.element_count.toString()}`, ...text_location);
            break;
    }
}

//handle moving image around in mouseDragged()
function mouseDragged(event) {
    offset.x += event.movementX;
    offset.y += event.movementY;
} 
//handle clicking on asterpids in mouseclicked()
function mouseClicked(event) {
    let mx = Math.round((mouseX * zoom) - offset.x);
    let my = Math.round((mouseY * zoom) - offset.y);
    console.log(`x:${mx} y:${my}`)
    console.log("zoom:" + zoom);
    draw_data.forEach(ast => {
        if (ast.in_boundary(mx,my)) {
            expand_info(Asteroids.near_earth_objects[DAY][ast.reference_index].name);
        }
    })
}

function expand_info(name) {
    let section     = id(`${url_slug(name)}-info`);
    let icon        = id(`${url_slug(name)}-icon`);
    let is_opened   = section.getAttribute('data-opened') === 'true';
    let i           = section.getAttribute('index');
  
    if(is_opened) {
        collapse_section(section);
        icon.innerText = "[+]";
        section.style.borderBottom = 'none';
        draw_data[i].color = 255;
    } else {
        expand_section(section);
        icon.innerText = "[-]";
        section.style.borderBottom = '1px solid white';
        draw_data[i].color = [255,0,0];
    }
}