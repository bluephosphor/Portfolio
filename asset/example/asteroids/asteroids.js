const today = new Date;
const TODAY = today.toISOString().slice(0,10);

const api_key = "xhPkYdTaRgnJPubfVCFZNC3mGlrETe4BDP5GjGzG";
const api_url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${TODAY}&end_date=${TODAY}&api_key=${api_key}`;

const [START, LOADING, DISPLAY_DATA] = [0,1,2];

var application_state = START;
var Response, Asteroids, Earth, draw_data = [];
var zoom = 10;
var html_list = '';
var DAY = TODAY;

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
        html_list += `<span class="ast-name">${ast.name}</span>`;
    })
    document.getElementById("info").innerHTML += html_list;
}

function setup(){
    createCanvas(768, 768);
    Earth = new Orbit(width/2,height/2,width/zoom,0);
    textFont('Monospace');
}

function draw(){
    background(0);
    
    Earth.show();
    
    draw_data.forEach((ast) => {
        ast.update();
        ast.show();
    })
    
    fill(255);
    
    switch(application_state){
        case START: 
            text("Press 'Get Today's Data' to get started.", 8, 16);
            break;
        case LOADING: 
            text("Loading ASTEROID DATA...", 8, 16);
            break;
        case DISPLAY_DATA: 
            text(`Displaying ASTEROID DATA for ${today.toLocaleDateString(undefined)} - Number of items: ${Asteroids.element_count.toString()}`, 8, 16);
            
            break;
    }
}