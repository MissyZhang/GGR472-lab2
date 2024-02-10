mapboxgl.accessToken = "pk.eyJ1IjoibWlzc3l6MjEiLCJhIjoiY2xyNW84dXNlMDh3cDJrcGIwMTJnbXp4NyJ9.iiAXKwL46ofLjtf_quFs-A"

// Create a new Mapbox map instance
const map = new mapboxgl.Map({
    container: 'my-map', // ID of the HTML element to contain the map
    style: "mapbox://styles/missyz21/clsc9ohzc00k101qrebx28fp1", // Map style URL
    center: [-79.45, 43.67], // Initial center coordinates [longitude, latitude]
    zoom: 12, // Initial zoom level
});



map.on('load', () => {
    //add the first data source containing cycling network GeoJSON data
    map.addSource('network-data', {
        type: 'geojson',
        data: 'https://MissyZhang.github.io/GGR472-lab2/data/cycling-network.geojson' 

    });

     // Add a layer to display the cycling network lines
     map.addLayer({
        'id': 'network-line', // Unique ID for the layer
        'type': 'line', // Type of layer (line)
        'source': 'network-data', // Source of the layer data
        'paint': {
            'line-color': '#62a6f8', // Color of the lines
            'line-width': 3, // Width of the lines
            'line-opacity': 0.8 // Opacity of the lines
        }
    });
    

    //add the second data source containing parking racks GeoJSON data
    map.addSource('parking-data', {
        type: 'geojson',
        data: 'https:///MissyZhang.github.io/GGR472-lab2/data/Bicycle%20Parking%20Racks%20Data.geojson' 

    });
    // Add a layer to display the parking rack points
    map.addLayer({
        'id': 'parking-point', // Unique ID for the layer
        'type':'circle', // Type of layer (point)
        'source': 'parking-data', // Source of the layer data
        'paint': {
            'circle-color': '#fdf6ba', // Color of the circles
            'circle-opacity': 0.8, // Opacity of the circles
            'circle-radius': 5 // Radius of the circles
        }
        
    });

    
});


