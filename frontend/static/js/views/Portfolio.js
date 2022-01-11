import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Portfolio");
    }

    //Async lets us render html to use fetch API to grab/return data from method.
   
    async getHtml() {
        return `
        <div class="fade-in-text">
        <h1> Portfolio</h1>

        <p>
           This is a portfolio of my best work in coding/art.</p>
        </div>
        `;
    }
}
