var raw = [4, 8, 15, 16, 23, 42];

var x = d3.scale.linear()
    .domain([0, d3.max(raw)])
    .range([0, 420]);

d3.select(".chart")
  .selectAll("div")
    .data(raw)
    <!--add one div section -->
  .enter().append("div")
    <!-- x(d) is a function , bounded by div -->
    .style("width", function(d) { return x(d) + "px"; }) 
    .text(function(d) { return d; });


    <!-- second way -->
var width = 420,
    barHeight = 20;


var chart2 = d3.select(".chart2")
    .attr("width", width)
    .attr("height", barHeight * raw.length);

var bar = chart2.selectAll("g")
    .data(raw)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);

bar.append("text")
    .attr("x", function(d) { return x(d) - 3; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });

<!--third one -->    
var x = d3.scale.linear()
    .range([0, width]);

var chart3 = d3.select(".chart3")
    .attr("width", width);


     d3.csv("temp.csv", function(data) {
          data.forEach(function(d) {d.population = +d.population;});
          x.domain([0, d3.max(data, function(d) { return d.population; })]);
          chart3.attr("height", barHeight * data.length);

  var bar1 = chart3.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * barHeight
          + ")"; });

  bar1.append("rect")
      .attr("width", function(d) { return x(d.population); })
      .attr("height", barHeight - 1);

  bar1.append("text")
      .attr("x", function(d) { return x(d.population) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d.population; });
        });


<!--fourth one -->    
var svg = d3.select("#svgtable"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width4 = +svg.attr("width") - margin.left - margin.right,
    height4 = +svg.attr("height") - margin.top - margin.bottom;

  svg.append("text")
        .attr("x", (width4 / 2))             
        .attr("y",  (margin.top)+10)
        .attr("text-anchor", "middle")  
        .style("font-size", "30px") 
        .text("value");


var x4 = d3.scaleBand().rangeRound([0, width4]).padding(0.1),
    y4 = d3.scaleLinear().rangeRound([height4, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("temp.csv", function(d) {
  d.population = +d.population;
  return d;
}, function(error, data4) {
  if (error) throw error;

  x4.domain(data4.map(function(d) { return d.region; }));
  y4.domain([0, d3.max(data4, function(d) { return d.population; })]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height4 + ")")
      .call(d3.axisBottom(x4));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y4).ticks(10))
    .append("text")
      .attr("transform", "rotate(-90)");

  g.selectAll(".bar")
    .data(data4)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x4(d.region); })
      .attr("y", function(d) { return y4(d.population); })
      .attr("width", x4.bandwidth())
      .attr("height", function(d) { return height4 - y4(d.population); });

});

var svgmap = d3.select("#svgmap"),
    widthmap = +svg.attr("width"),
    heightmap = +svg.attr("height");

var unemployment = d3.map();
var path = d3.geoPath();
var xmap = d3.scaleLinear()
    .domain([1, 10])
    .rangeRound([600, 860]);

var color = d3.scaleThreshold()
    .domain(d3.range(2, 10))
    .range(d3.schemeBlues[9]);

var gmap = svgmap.append("g")
    .attr("class", "key")
    .attr("transform", "translate(0,40)");

gmap.selectAll("rect")
  .data(color.range().map(function(d) {
      d = color.invertExtent(d);
      if (d[0] == null) d[0] = xmap.domain()[0];
      if (d[1] == null) d[1] = xmap.domain()[1];
      return d;
    }))
  .enter().append("rect")
    .attr("height", 8)
    .attr("x", function(d) { return xmap(d[0]); })
    .attr("width", function(d) { return xmap(d[1]) - xmap(d[0]); })
    .attr("fill", function(d) { return color(d[0]); });

gmap.append("text")
    .attr("class", "caption")
    .attr("x", xmap.range()[0])
    .attr("y", -6)
    .attr("fill", "#000")
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")
    .text("Unemployment rate");

gmap.call(d3.axisBottom(xmap)
    .tickSize(13)
    .tickFormat(function(xmap, i) { return i ? xmap : xmap + "%"; })
    .tickValues(color.domain()))
  .select(".domain")
    .remove();

d3.queue()
    .defer(d3.json, "https://d3js.org/us-10m.v1.json") // us data. 
    .defer(d3.csv,"unemployment.csv", function(d) {unemployment.set(d.id, +d.rate); })
    .await(ready);

function ready(error, us) {
  if (error) throw error;

  svgmap.append("g")
      .attr("class", "counties")
    .selectAll("path")
    // topojson.feature()
    .data(topojson.feature(us, us.objects.counties).features)
    .enter().append("path")
      .attr("fill", function(d) { return color(d.rate = unemployment.get(d.id)); })
      .attr("d", path)
    .append("title")
      .text(function(d) { return d.rate + "%"; });

  svgmap.append("path")
      .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
      .attr("class", "states")
      .attr("d", path);
}

