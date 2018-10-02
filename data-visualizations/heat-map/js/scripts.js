d3.json(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"
).then(function(data) {
  var margin = { top: 0, right: 0, bottom: 0, left: 0 },
    height = 400 - margin.top - margin.bottom,
    width = 1500 - margin.right - margin.left;

  //Map the years from the data object
  var xYears = d3
    .set(data.monthlyVariance.map(entry => new Date(entry.year, 1, 1)))
    .values();

  //Define x scale
  var xScale = d3
    .scaleTime()
    .domain(xYears)
    .range([0, width]);

  //Define x axis values
  var xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y"));

  //draw svg
  var svg = d3
    .select("#heatmap")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("background", "gray");
});
