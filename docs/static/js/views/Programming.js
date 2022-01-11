import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Programming");
    }

    //Async lets us render html to use fetch API to grab/return data from method.
   
    async getHtml() {
        return `
        <div class="fade-in-text">

        <h3>
           This is a collection of coding projects I've completed for
           school projects, extracurricular classes, or for personal
           endeavors.<br><br></h3>

           <h2>Personal Single Page Website Application</h2>
           <h3>You're looking at it right now!</h3>
           <h3><a href="https://github.com/ChukwudimmaIkoro/ChukwudimmaIkoro.github.io" target="_blank" rel="noopener noreferrer">Github Link</a></h3>

           <p>JavaScript website created from scratch, hosted and edited locally using no frameworks, and uploaded online via Github.</p>
           <p>● Utilizes single-page infrastructure in order to only load the page once, with subsequent links leading to different views.</p>

           <hr style="height:6px;border-width:0;color:gray;background-color:gray">

           <h2>ShareLabs</h2>
           <h3><a href="https://github.com/ShareLabs-ToDo/ShareLabsRepository" target="_blank" rel="noopener noreferrer">Github Link</a></h3>

           <p>Android Java app that uses a Parse server	to upload/ share photos	and	messages, and complete tasks with others.</p>
               <p>● Implemented Parse backend using Back4App to save users, posts, projects, and tasks to a server.</p>
               <p>● Through the app, users can sign up and login, create and inish tasks, view the tasks of themselves or other
               members, and post updates to a feed that all project members can see.</p>
               <p>● Project was created for Codepath Demo Day 2020, while working with two other team members.</p>

               <img src="https://i.imgur.com/y5OeAEw.gif" title="source: imgur.com"<br><br><br/>

               <hr style="height:6px;border-width:0;color:gray;background-color:gray">

           <h2>SimpleTweet</h2>
           <h3><a href="https://github.com/ChukwudimmaIkoro/SimpleTweetFinal2" target="_blank" rel="noopener noreferrer">Github Link</a></h3>

           <p>Android Java app that	utilizes the Twitter API to	display	a user’s Twitter feed.</p>
               <p>● Program takes in the Twitter API and displays it in a readable RecyclerView format.</p>
               <p>● Users can log in with their Twitter account and scroll through their home feed, as well as compose and post
               new tweets which are automatically put onto the feed without a refresh.</p>
               <p>● User can scroll up to refresh the home page with newly fetched tweets, which also displays the poster and time
               since the tweet was posted.</p>

               <img src="https://i.imgur.com/AhKltwV.gif" title="source: imgur.com"<br><br><br/> 

               <hr style="height:6px;border-width:0;color:gray;background-color:gray">

           
           <h2>Memory Game</h2>
           <h3><a href="https://github.com/ChukwudimmaIkoro/Ikoro-Memory-Game" target="_blank" rel="noopener noreferrer">Github Link</a></h3>

           <p>JavaScript application that allows the user to play a memory-matching game.</p>
               <p>● Created a program that allows the user to play a memory matching game, with the computer playing a pattern
               that the user must play back.</p>
               <p>● Utilized JavaScript, CSS, and HTML in order to link sounds and rules to button presses.</p>
               <p>● Program creates new random patterns for the game on every runthrough.</p>
               <p>KNOWN BUG: This project was coded in Mozilla Firefox and is fully functional there.
                However, when used in Google Chrome, there is a chance that the audio for the buttons cuts out. 
                This is due to the way Chromium browsers process sound, so it is recommended to use this
                 application in Firefox.</p>
          

            <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
            <iframe
                src="https://glitch.com/embed/#!/embed/ikoro-memory-game?path=README.md&previewSize=100"
                title="ikoro-memory-game on Glitch"
                allow="midi; encrypted-media; fullscreen"
                allowFullScreen
                style="height: 260%; width: 100%; border: 0;">
            </iframe>
            </div>
    
        </div>
        `;
    }
}
