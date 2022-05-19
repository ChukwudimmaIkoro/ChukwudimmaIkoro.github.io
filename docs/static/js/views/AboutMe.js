import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("AboutMe");
    }

    //Async lets us render html to use fetch API to grab/return data from method.
   
    async getHtml() {
        return `
        
        <div class="fade-in-text">
        

        <div class="row">
            <div class="column">

        <h2>Welcome to my website!</h2>
        <p>
            Hello, my name is Chukwudimma Ikoro. I am a computer scientist 
            currently studying at the University of Massachusetts Amherst, who
            specializes in developing web and mobile applications in Java, JavaScript, HTML, and CSS,
            as well as standalone Java and C programs. I even constructed this very website from scratch-
            no frameworks used!</p>
            
        <p>
            You may also know me as AzureChuck! I also study animation and digital
            art, and produce animated videos working with other creators and artists
            on my Youtube channel AzureChuck, which has gained over 6,000 subscribers. 
            I have had a huge passion for animation since I was a kid making flipbook 
            videos with Flipnote Studio on my DS (quality withstanding)!</p>
         
        <p>
            One day I hope to enter both the computer science and animation
            industries as a Software/Web Engineer and/or a Story
            Artist/Animator, but until then I want to keep creating and improving
            in my work.</p>

        <p>
            <a href="/resume" data-link>Here are my current resumes,</a>
            and you can find individual portfolios in the tabs above! I hope to work with you
            one day!
        </p>

        <h2>Contact:</h2>
        <p>Email: chuchuikoro@gmail.com</p>
        <p>Phone: (781)-408-2675</p>    
        <p>Social Media Links Below!</p>  
        
        </div>
        <div class="column">
            <img src="docs/static/css/images/about4.png" style="padding:40px">
        
        </div>
      </div>
  
        </div>
        `;
    }
}
