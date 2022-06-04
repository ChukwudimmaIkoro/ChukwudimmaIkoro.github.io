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
        
           
           <iframe src="https://drive.google.com/file/d/1AIZ6sBtnlxDOZ6CRbKJdp2RhLX1Vab-q/preview" width="50%" allow="autoplay"></iframe>
           
           
           <h1>Art Resume</h1>
           
           
           <iframe src="https://drive.google.com/file/d/1NGbNtH4NDODOeDoOGtybTfT5xALsxdyn/preview" width="50%" allow="autoplay"></iframe>
           
           
        </div>


        `;
    }
}
