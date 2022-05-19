import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    //Async lets us render html to use fetch API to grab/return data from method.
   
    async getHtml() {
        return `

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <div class="fade-in-text">

        <h2>Hello!</h2>

        <div class="row">

            <div class="column">

                <div class="fade-in-image">
                    <div class="img-with-text">

                    <img src="docs/static/css/images/Art120_Gif.gif" style="width=800; height=600">
                    <h2><a href="/animation" class="nav__link" data-link>Animation</h2></a>
                </div>
            </div>

                <h3> Animation projects I have done for classes, Youtube, or just for personal improvement.</h3>
                </div>
            
             <div class="column">

                <div class="fade-in-image">
                    <div class="img-with-text">
                   
                    <img src="docs/static/css/images/matrixgif.gif" style="width=800; height=600">
                    <h2><a href="/programming" class="nav__link" data-link>Programming</h2></a>
                </div>
            </div>

                <h3>Web, mobile, and backend coding projects I developed using various languages such as Java, C, HTML/CSS, and JavaScript.</h3>
            </div>


            <div class="column">

                <div class="fade-in-image">
                <div class="img-with-text">
                    
                <img src="docs/static/css/images/ZeldaSB.gif" style="width=800; height=600">
                
                <h2><a href="/storyboards" class="nav__link" data-link>Storyboards</h2></a>
                </div>
            </div>

            <h3> Collection of storyboards and animatics I have created. </h3>
            </div>

            <div class="column">

                <div class="fade-in-image">
                <div class="img-with-text">
                                   
                <img src="docs/static/css/images/resumeThumb.jpg" style="width=800; height=600">
                    
                <h2><a href="/resume" class="nav__link" data-link>Resumes</h2></a>
                </div>
            </div>

            <h3> My official resumes for art and programming. <br> Updated May 2022.</h3>
            </div>
            
        </div>
     </div>
        `;
    }
}

