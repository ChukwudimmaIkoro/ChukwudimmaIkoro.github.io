//Client-sid, asynchronous router
import Dashboard from "./views/Dashboard.js";
import AboutMe from "./views/AboutMe.js";
import PostView from "./views/PostView.js";
import Portfolio from "./views/Portfolio.js";
import Animation from "./views/Animation.js";
import Programming from "./views/Programming.js";
import Resume from "./views/Resume.js";
import Storyboards from "./views/Storyboards.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

//Returns every value from index 1 onwards, then captures each param
const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

//Router paths
const router = async () => {
    // /posts/:id
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/aboutme", view: AboutMe },
        { path: "/posts/:id", view: PostView },
        { path: "/portfolio", view: Portfolio },
        { path: "/portfolio/animation", view: Animation},
        { path: "/portfolio/programming", view: Programming},
        { path: "/portfolio/resume", view: Resume},
        { path: "/portfolio/storyboards", view: Storyboards}
    ];

    //Test each route for potential match
    
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    //Finds and returns matched route. If not a match, default to dashboard.

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

//Allows no page refresh when using back history arrow
window.addEventListener("popstate", router);

//Allows for navigating views without page refresh

document.addEventListener("DOMContentLoaded", () => {

    document.body.addEventListener("click", e => {

        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});
