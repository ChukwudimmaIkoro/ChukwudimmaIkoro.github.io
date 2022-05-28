import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Storyboards");
    }

    //Async lets us render html to use fetch API to grab/return data from method.
   
    async getHtml() {
        return `
        <div class="fade-in-text">
        <h1>Storyboards</h1>

        <iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/70ecb31e8f524ce09411ca6b03ac7c5e" title="August Storyboard Challenge: Ocean " allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 560px; height: 433px;" data-ratio="1.2933025404157044"></iframe>

        <iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/50fee14e7353497f97e92c622bdc0d1b" title="Zelda Test " allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 560px; height: 433px;" data-ratio="1.2933025404157044"></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/RmMAZkXsq6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BQv7hqgtacM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>


        `;
    }
}