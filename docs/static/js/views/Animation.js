import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Animation");
    }

    //Async lets us render html to use fetch API to grab/return data from method.
   
    async getHtml() {
        return `
        <div class="fade-in-text">
        <h2>Animation</h2>

        <p>
           This is a collection of animation I have done for 
           classes, Youtube, or just for personal improvement.</p>

           <div class="row">
            <div class="column">
           
           
           <div class="container"> 
           <iframe class="responsive-iframe" 
           src="https://www.youtube.com/embed/KAlrZNAqPUI" 
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
           clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
           </div>
          

            <img src="https://i.imgur.com/8GFBb42.gif" title="source: imgur.com"
            alt="Sonic Run Gif"/>

            <img src="docs/static/css/images/Flour_Fight.gif" 
            style="width=100%; height=576">

            <img src="docs/static/css/images/Art120_Gif.gif" 
            style="width=80%; height=540">

            <img src="docs/static/css/images/BallTail.gif" 
            style="width=100%; height=576"</a>
            
            <img src="docs/static/css/images/Sonic_Final.gif" 
            style="width=100%; height=576">
   
            <img src="docs/static/css/images/flow.gif"  
            style="width=100%; height=576">

            <img src="docs/static/css/images/owlphibia.gif" 
            style="width=100%; height=576">

            <img src="docs/static/css/images/SnomSpin.gif" 
            style="width=100%; height=576">

            </div>
            </div>
        </div>
        `;
    }
}
