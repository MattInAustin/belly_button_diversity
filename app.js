//Start by reading json
d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleValues = data.samples[0].sample_values.slice(0,10).reverse();
    console.log(sampleValues)
    var ids = data.samples[0].otu_ids;
    console.log(ids)
    var lables = data.samples[0].otu_labels.slice(0,10);
    console.log(lables)

    //Get the top 10
    var topTen = (data.samples[0].otu_ids.slice(0,10)).reverse();

    //Clean the ID's for the plot
    var cleanId = topTen.map(d => "OTU " + d);

    //Get values for the plot
    var labels = data.samples[0].otu_labels.slice(0,10);
    var trace = {
        x: sampleValues,
        y: cleanId,
        text: labels,
        marker: {
        color: 'blue'},
        type: "bar",
        orientation: "h",
    };

    var data = [trace];

    //Layout for plot chart
    var layout = {

        title: "Top Ten OTU",
        yaxis:{
            tickmode: "linear",
        },
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 30
        }
    };
    //Trace for bubble graph
    var trace1 = {
        x: cleanId, 
        y: sampleValues, 
        mode: 'markers',
        marker: {
            size: sampleValues
        }
    };
    //Turn Trae into Data2 for bubble graph
    var data2 = [trace1];

    //Layout for bubble graph
    var layout2 = {
        title: 'Bubble Chart',
        height: 600,
        width: 600
    };

    //Display the plots
    Plotly.newPlot("bar", data, layout);

    Plotly.newPlot('bubble', data2, layout2);
});




