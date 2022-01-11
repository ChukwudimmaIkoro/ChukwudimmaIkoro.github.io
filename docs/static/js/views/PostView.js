import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Viewing Posts");
    }

    //Async lets us render html to use fetch API to grab/return data from method.
   
    async getHtml() {
        console.log(this.params.id);
        return `
        <h1> Posts</h1>

        <p>
            You are viewing the posts!</p>
        `;
    }
}