
// computes the hypotenuse given the catheti's lengths
var ipotenuse = (x,y) => {
    return Math.sqrt(x*x+y*y);
}

// verifies if a given pixel is part of the circle
var isInCircle = (x, y, center, data) => {
    let distX = x-center;
    let distY = y-center;
    let dist = ipotenuse(distX, distY);
    return (dist>=center-data.offset-data.thickness+1 && dist<center+1-data.offset);
}

// renders the circle in a grid on screen
var printCircle = () => {
    let specs = getSpecs();
    console.log(specs);
    let n = specs.diameter;
    let data = specs.data;
    
    let center = (n-1)/2;
    let html = "";
    for(let i=0; i<n; i++){
        html += '<div class="square-parents">';
        for(let j=0; j<n; j++){
            if(isInCircle(i,j,center, data)){
                html += '<div style="background: black;"></div>'
            }
            else{
                html += "<div></div>";
            }
        }
        html += "</div>";
    }
    document.getElementById("body").innerHTML = html;
}

// returns the user settings
var getSpecs = () => {
    let specs = {};
    specs.diameter = document.getElementById("diameter").value;
    specs.data = {};
    specs.data.thickness = document.getElementById("thickness").value;
    specs.data.offset = document.getElementById("offset").value;
    return specs;
}

printCircle();