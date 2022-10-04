const spec = "js/chart.vg.json";
vegaEmbed('#chart', spec).then(function(result) {
}).catch(console.error);

const spec2 = "js/choropleth_map.vg.json";
vegaEmbed('#map', spec2).then(function(result) {
}).catch(console.error);