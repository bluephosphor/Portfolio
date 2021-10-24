let today       = new Date;
let tomorrow    = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const TODAY       = today.toISOString().slice(0,10);
const TOMORROW    = tomorrow.toISOString().slice(0,10);

const api_key = "xhPkYdTaRgnJPubfVCFZNC3mGlrETe4BDP5GjGzG";
const api_url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${TODAY}&end_date=${TOMORROW}&api_key=${api_key}`;

const [START, LOADING, DISPLAY_DATA] = [0,1,2];

var application_state = START;
var Response, Asteroids;

async function fetch_json(url) {
    application_state   = LOADING;
    Response            = await fetch(url);
    Asteroids           = await Response.json();
    application_state   = DISPLAY_DATA;
    console.log(Asteroids);
}

function setup(){
    createCanvas(1024, 600);
}

function draw(){
    background(0);
    fill(255);
    
    switch(application_state){
        case START: 
            break;
        case LOADING: 
            text("Loading ASTEROID DATA...", 16, 16);
            break;
        case DISPLAY_DATA: 
            text(`Done! Number of items: ${Asteroids.element_count.toString()}`, 16, 16);
            Asteroids.near_earth_objects['2015-09-08'].forEach((ast, i) => {
                text(ast.name, 32, 32 + (16 * i));
                let dist = ast.close_approach_data[0].miss_distance.astronomical * 1000;
                let diam = ast.estimated_diameter.meters.estimated_diameter_min / 2;
                circle(128 + dist, 64 + (64 * i), diam);
            })
            break;
    }
}