import * as d3 from 'd3';
import {links} from "./links.js";

const overlay = 'https://cdn.prod.website-files.com/66e5c9799b48938aa3491deb/67929538a94c8a3c19d7f9eb_Thane%20Maps_Jan2025.svg';
const bgPng = 'https://cdn.prod.website-files.com/66e5c9799b48938aa3491deb/679295395639bb12a3b8d16c_Thane%20Maps_Jan2025_BG.jpg';



// detect if a touch device
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
function hideStories() {
  fullStories.forEach((story) => {
    story.style.pointerEvents = "none"; 
    story.style.display = "none";
  });
}

d3.xml( overlay )
  .then(data => {
    // Get the root SVG element from the loaded file
    const svg = data.documentElement;
    svg.id = "overlay-item"; // Assign an ID for reference
    
    // Select the SVG element using D3 to use D3 methods
    const d3Svg = d3.select(svg);

    // resize the svg
    d3Svg
      .attr("viewBox", "0 0 4383 3914") 
      .attr("preserveAspectRatio", "xMidYMid meet") // Ensures no distortion
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("x", )
    // Insert the PNG as an <image> element at the start of the SVG
    d3Svg.insert("image", ":first-child") // Inserts as the first child
      .attr("href", bgPng) // Path to your PNG
      .attr("x", "0")
      .attr("y", 0)
      .attr("class", "bgPng")
      // .attr("width", "20%") 
      // .attr("height", "20%") 
    // Append the SVG to the DOM
    const svgContainer = document.querySelector(".svg-container-bridges");
    console.log("svgContainer", svgContainer, svg)
    svgContainer.appendChild(svg);
  })
  
  .then( data => {
    // select the added svg
    const d3Svg = d3.select('#overlay-item');
    
    // select the bgPng
    const bg = d3.select('.bgPng');

    


    // Add mouseover and mouseout to each group
    // select all the groups in the overlay by using the id field in links object
    
    const theGroups = d3Svg.selectAll('g');
    console.log("the groups", theGroups)

    Object.entries(links).forEach(([id, { link }]) => {
      const group = d3.select(`#${id}`);
      
      // Calculate the bounding box for the group
      const bbox = group.node().getBBox();
      group
        .style("transform-origin", "center center")  // Set transform origin to center
        .style("transform-box", "fill-box")          // Use element's fill box as reference
        .style("transition", "transform 1s ease") // Smooth transition
        .style("filter", "drop-shadow(15px 15px 15px rgba(0, 0, 0, 0))")
        // .append("rect")
        // .attr("x", bbox.x)
        // .attr("y", bbox.y + bbox.height/4)
        // .attr("width", bbox.width)
        // .attr("height", bbox.height/3)
        // .style("fill", "transparent") // Invisible rectangle
        // .style("pointer-events", "all") // Ensure it captures mouse/touch events
        .on("mouseenter touchstart", function () {
          d3.select(this)
            .style("transform", "scale(1.2)") 
            .style("filter", "drop-shadow(15px 15px 5px rgba(0, 0, 0, 1))")
        })
        .on("mouseleave touchend", function () {
          setTimeout(() => {
            d3.select(this)
              .style("transform", "scale(1.0)")
              .style("filter", "drop-shadow(15px 15px 15px rgba(0, 0, 0, 0))")
          }, 1000);
        })
        .on("click", () => {
          // Open the link in a new tab
          window.open(link, "_blank");
        })
        .style("cursor", "pointer"); // Add a pointer cursor to indicate interactivity
    
    });
   
    
  })
.catch(error => console.error("Error loading the SVG:", error));








