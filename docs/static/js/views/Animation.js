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
           
           <iframe width="1024" height="576" 
           src="https://www.youtube.com/embed/1sfYXsmzv-s" 
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
           clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
           
           <img src="https://i.imgur.com/8GFBb42.gif" title="source: imgur.com"
            alt="Sonic Run Gif" width="1024" height="576"/>

           <img src="https://i.imgur.com/oIxz8AN.gif" title="source: imgur.com" 
            alt="Art 120 Gif" width="960" height="540"/>

           <iframe width="1024" height="576" 
           src="https://www.youtube.com/embed/x_w9IRsb69c" 
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
           clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

           <iframe width="1024" height="576" src="https://www.youtube.com/embed/jsA3IRDXibc" 
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
           clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            

        </div>
        `;
    }
}
