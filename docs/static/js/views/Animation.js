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
           src="https://www.youtube.com/embed/TD9cUuaGlI0" 
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
           clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

           <img src="../../../static/css/images/SonicRunGif.gif" 
            alt="Sonic Run" width="1024" height="576"/>

            <img src="../../../../static/css/images/Flour_Fight.gif" 
            alt="Flour Fight" width="1024" height="576"/>

           <img src="https://i.imgur.com/oIxz8AN.gif" title="source: imgur.com" 
            alt="Art 120 Gif" width="960" height="540"/>

            <img src="../../static/css/images/BallTail.gif" 
            alt="Ball Tail" width="1024" height="576"/>

            <img src="../../css/images/Sonic_Final.gif" 
            alt="Sonic Final" width="1024" height="576"/>
   
            <img src="../../../css/images/flow.gif" 
            alt="Flow" width="1024" height="576"/>

            <img src="../../../../../static/css/images/owlphibia.gif" 
            alt="Owlphibia" width="1024" height="576"/>

            <img src="../../../../../static/css/images/SnomSpin.gif" 
            alt="SnomSpin" width="1024" height="576"/>

        </div>
        `;
    }
}
