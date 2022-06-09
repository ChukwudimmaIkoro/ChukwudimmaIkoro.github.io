import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Resume");
    }

    //Async lets us render html to use fetch API to grab/return data from method.
   
    async getHtml() {
        return `
        <div class="fade-in-text">
        <h1>CS Resume</h1>
        
            <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
            <iframe
                src="https://drive.google.com/file/d/1AIZ6sBtnlxDOZ6CRbKJdp2RhLX1Vab-q/preview"
                title="ikoro-memory-game on Glitch"
                allow="midi; encrypted-media; fullscreen"
                allowFullScreen
                style="height: 260%; width: 100%; border: 0;">
            </iframe>
            </div>

           <iframe frameborder="0" scrolling="yes"
           width="720" height="720" float="left"
           src="https://drive.google.com/file/d/1AIZ6sBtnlxDOZ6CRbKJdp2RhLX1Vab-q/preview">
           </iframe>

           <h1>Art Resume</h1>

           <iframe frameborder="0" scrolling="yes"
           width="720" height="720" float="left"
           src="https://drive.google.com/file/d/1NGbNtH4NDODOeDoOGtybTfT5xALsxdyn/preview">
           </iframe>


        </div>


        `;
    }
}
