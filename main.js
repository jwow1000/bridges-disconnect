import * as d3 from 'd3';


const overlay = 'https://cdn.prod.website-files.com/66e5c9799b48938aa3491deb/67572e44c0a6bd9cf93e0c34_bridge-map-buttons.svg';
const bgPng = 'https://cdn.prod.website-files.com/66e5c9799b48938aa3491deb/67572e4663fe1bd5e68912a2_bridge-map-bg.png';

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

    // Insert the PNG as an <image> element at the start of the SVG
    d3Svg.insert("image", ":first-child") // Inserts as the first child
      .attr("href", bgPng) // Path to your PNG
      .attr("x", 0)
      .attr("y", 0)
      .attr("class", "bgPng")
      
      // .attr("transform", "scale(0.95)")
      .attr("width", "100%")
      .attr("height", "100%");
    
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

    // select all the groups in the overlay
    const theGroups = d3Svg.selectAll('g');
    console.log("the groups", theGroups)
    // Define a drop shadow filter
    const defs = d3Svg.append("defs");

    const filter = defs.append("filter")
      .attr("id", "drop-shadow")
      .attr("filterUnits", "userSpaceOnUse") // Prevents bounding box adjustment
      .attr("x", "-50%") // Expand filter area
      .attr("y", "-50%")
      .attr("width", "200%") // Ensure enough space for the glow
      .attr("height", "200%");

    filter.append("feGaussianBlur")
      .attr("in", "SourceGraphic")
      .attr("stdDeviation", 5) // Controls the blur level
      .attr("result", "coloredBlur");
    
    filter.append("feOffset")
      .attr("dx", 3) // Horizontal offset
      .attr("dy", 3) // Vertical offset
      .attr("result", "coloredBlur");

    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "offsetBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // Add mouseover and mouseout to each group
    theGroups
      .on("mouseover", function () {
        d3.select(this).attr("filter", "url(#drop-shadow)");
      })
      .on("mouseout", function () {
        d3.select(this).attr("filter", null); // Remove the filter
      })
      .on("click", function () {
        // match the group id to the link object, open new tab
        console.log("hhaha", this.id)
      })

    
    // get the info

    // // then add the event listeners
    // // detect when mouse is over item
    // info.forEach( ( element ) => {
    //   // find the match to the current element 
    //   const theMatch = theGroups.filter(function () {
    //     return this.id.toLowerCase() === element.idMatch.toLowerCase();
    //   });

    //   // add mouseover event to the buttons
    //   // if touch device use a click state, if not use mousein/mouseout 
    //   const enter = isTouchDevice ? "click" : "mouseenter";
    //   const leave = isTouchDevice ? "click" : "mouseleave"; 
      
    //   // if not touch device use hover for preview
    //   if( theMatch ) {
    //     theMatch
    //       .on( enter, function(event) {
    //         if( cardHoverState === 0 ) {
    //           // fade out background
    //           bg.transition()
    //             .duration(1000) 
    //             .ease(d3.easeLinear) 
    //             .style("opacity", 0.2); 
    //           // fade out all buttons
    //           fadeOut( theMatch );
  
    //           // make the card visible
    //           cardTitle.innerText = element.title;
    //           card.style.opacity = "100";
              
    //           // set the global state
    //           cardHoverState = 1;
    //         } 
    //       })
    //       .on( leave, function(event) {
    //         // Hide the blur layer and reset the stroke and opacity
    //         bg.transition()
    //           .duration(1000) 
    //           .ease(d3.easeLinear) 
    //           .style("opacity", 1); 
            
    //         fadeIn();
    //         card.style.opacity = "0";

    //         // set the global state
    //         if( cardHoverState === 1 ) {
    //           cardHoverState = 0;
    //         }
      
    //       })
    //       .on( "click", function(event){
    //         if( cardHoverState === 1 ) {
    //           card.style.opacity = "0";
              
    //           // set the global state
    //           cardHoverState = 2;
              
    //           // select the full story
    //           const theStory = document.querySelector(`#${element.selectMatch}`);
    //           if( theStory ) {
    //             theStory.style.pointerEvents = "auto";          
    //             theStory.style.display = "block";
    //           }
              
    //         }
            
    //       })
        
    //   }
    // })
    // // add event listener to close full-story on click
    // fullStories.forEach((story) => {
    //   story.addEventListener("click", (event) => {
    //     if( cardHoverState === 2 ) {
    //       // const images = document.querySelectorAll('.dyn-images');
    //       // const cont = document.querySelector('.full-img-container');
    //       // // remove the pictures
    //       // images.forEach((item) => {
    //       //   cont.removeChild( item );
    //       // });
    //       // hide the stories
    //       hideStories();
          
    //       cardHoverState = 0;
    //     }
    //   }); 


    // });
    
  })
.catch(error => console.error("Error loading the SVG:", error));








