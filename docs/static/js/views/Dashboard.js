import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    //Async lets us render html to use fetch API to grab/return data from method.
   
    async getHtml() {
        return `

        <div class="fade-in-text">

        <h2>Hello!</h2>

        <div class="row">

            <div class="column">

                <div class="fade-in-image">
                    <div class="img-with-text">
                        <a href="/portfolio/animation">                    
                        <img src=""https://i.imgur.com/oIxz8AN.gif" title="source: imgur.com" width:800 height=600></a> 
                        <h2>Animation</h2>
                    </div>
                </div>

                <h3>
                    A collection of animation projects I have done for 
                    classes, Youtube, or just for personal improvement.</h3>
                </div>
            
             <div class="column">

                <div class="fade-in-image">
                <div class="img-with-text">
                    <a href="/portfolio/programming">
                    <img src="https://i.imgur.com/dN8wCcl.gif" title="source: imgur.com" width=800 height=600></a> 
                    <h2>Programming</h2>
                </div>
            </div>

            <h3>
                Web, mobile, and backend coding projects I developed
                using various languages such as Java, C, HTML/CSS, and JavaScript.
                </h3>
            </div>

            <div class="column">

                <div class="fade-in-image">
                <div class="img-with-text">
                    <a href="/portfolio/resume">
                    <img src="https://i.imgur.com/jbIKWK7.jpg" title="source: imgur.com" width=800 height=600></a> 
                    <h2>CS Resume</h2>
                </div>
            </div>

            <h3>
                My official computer science resume. <br> Updated December 2020.
                </h3>
            </div>

            <div class="column">

                <div class="fade-in-image">
                <div class="img-with-text">
                    <a href="/aboutme">
                    <img src="https://i.imgur.com/9GoxCIO.jpg" title="source: imgur.com" width=800 height=600></a>
                    <h2>About Me</h2>
                </div>
            </div>

            <h3>
                A quick summary of my skills and goals. <br> Get to know me!
                </h3>
            </div>
            
        </div>
     </div>
        `;
    }
}

