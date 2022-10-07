// Selectors
const mapBackgroundEl = document.getElementById("map-container");

// Functions

// Global for number of tile divisions per x and y
const numMapDivisionsX = 10;
const numMapDivisionsY = 10;


// Populate map with tiles
const populateMap = () => {

    // Define the width and height of the map
    let mapWidth = mapBackgroundEl.offsetWidth;
    let mapHeight = mapBackgroundEl.offsetHeight;

    // TODO: Check if there are already tiles on the map.  If there are, resize them without
    // re-randomizing their colors.  Otherwise, create new elements and randomize them.

    // Divide into squares for each x and y division global stated earlier
    for (let i = 0; i < numMapDivisionsX; i++) {
        //Create a column and run the Y division
        let column = document.createElement("div");
        // Set column width
        column.style.width = ((mapWidth/numMapDivisionsX))+"px";
        // Set column x coordinate based on value of i
        column.style.position = "absolute";
        column.style.left = (i*mapWidth/numMapDivisionsX)+"px";
        for (let j = 0; j < numMapDivisionsY; j++) {
            let row = document.createElement("div");
            row.style.height = ((mapHeight/numMapDivisionsY))+"px";
            row.style.width = ((mapWidth/numMapDivisionsX))+"px";
            column.appendChild(row);
        }
        mapBackgroundEl.appendChild(column);
    }

    // Randomly assign a color to each of the tiles from a pool of allowable colors

    // Will eventually also assign classes with the color assignment to indicate terrain, etc.
}

// Listeners

// Testbed
populateMap();
