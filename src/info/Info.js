import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Akshay",
  lastName: "Mattoo",
  initials: "am", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by chai",
    },
    {
      emoji: "🌎",
      text: "based in 🇺🇸",
    },
    {
      emoji: "💼",
      text: "Sofware Engineer at Meta",
    },
    {
      emoji: "📧",
      text: "akshaymattoo@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://medium.com/@akshaymattoo",
      icon: "fa fa-medium",
      label: "medium",
    },
    {
      link: "https://github.com/akshaymattoo",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/akshaymattoo",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/akshaymattoo",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Akshay. I'm a software engineer for Meta. I keep experimenting with different tech stacks. I primarily use HTML, CSS and JavaScript. My current go to tech stack is React.js, Node, Express.Currently trying 12*12 inspired by Peter Levels and ignited by Justin Rahardjo.Read more about it in my",
  skills: {
    proficientWith: ["javascript", "react", "git", "html5", "css", "nodejs"],
    exposedTo: ["chakra ui", "firebase", "typescript"],
  },
  hobbies: [
    {
      label: "running",
      emoji: "🏃",
    },
    {
      label: "lifting heavy",
      emoji: "🏋️",
    },
    {
      label: "listening audio books, podcasts",
      emoji: "🎧",
    },
    {
      label: "binge watch youtube",
      emoji: "📺",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Karya",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Project 2",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock2,
    },
    {
      title: "Project 3",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock3,
    },
    {
      title: "Project 4",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock4,
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock5,
    },
  ],
  blog: [
    {
      id: "11e117463726",
      url: "https://akshaymattoo.medium.com/my-first-vacation-races-event-zion-at-night-half-marathon-11e117463726",
      createdAt: 1632854309364,
      title: "My first Vacation Races event Zion at night half marathon",
      description:
        "I ran my first half marathon last year after pounding over running for few years. I must tell you it was a great experience to get to the…",
      imageUrl: "https://miro.medium.com/max/990/1*bT66aRLH8eyA_KgWP-bbNw.jpeg",
    },
    {
      id: "cb43f38da24f",
      url: "https://akshaymattoo.medium.com/whatsapp-instagram-and-facebook-is-down-why-cb43f38da24f",
      createdAt: 1633372986993,
      title: "Whatsapp, Instagram and Facebook is down. Why?",
      description:
        "Today morning we saw another big tech outage with all the major websites from Facebook not accessible. So I thought I will try to do my…",
      imageUrl: "https://miro.medium.com/max/676/1*sO2BFtBkBBPBM6ontbnMvQ.png",
    },
    {
      id: "b97fafff416",
      url: "https://akshaymattoo.medium.com/how-to-run-deploy-playwright-on-heroku-b97fafff416",
      createdAt: 1641932619021,
      title: "How to run/deploy playwright on Heroku?",
      description:
        "To start with what is playwright? Its a framework to enable end-2-end testing for web apps. But its not the only use case of playwright…",
      imageUrl: "https://miro.medium.com/max/1200/0*krj53sWa4qnbnmyt",
    },
    {
      id: "d26581cd6890",
      url: "https://akshaymattoo.medium.com/how-keep-running-your-heroku-free-dyno-d26581cd6890",
      createdAt: 1642037397996,
      title: "How keep running your free Heroku Dyno?",
      description:
        "In my last post I explained how to host your playwright code on heroku. In my code I am running a task once a day. Basically, my dyno…",
      imageUrl: "https://miro.medium.com/max/1080/1*E0DxlP23hp9B0z1pkRVJ5g.png",
    },
    {
      id: "d322ccf9ef48",
      url: "https://akshaymattoo.medium.com/web-scraping-with-playwright-firebase-functions-d322ccf9ef48",
      createdAt: 1653533367026,
      title: "Serverless playwright/firebase functions",
      description:
        "In my previous post I had explained how to deploy playwright on heroku. Playwright being a new kid on the block and constantly evolving and…",
      imageUrl: "https://miro.medium.com/max/1200/0*oYGCQ5rLz7EZ-Vlo",
    },
    {
      id: "ceebb6107287",
      url: "https://akshaymattoo.medium.com/notion-as-a-database-for-your-next-mvp-ceebb6107287",
      createdAt: 1654030720671,
      title: "Notion as a database for your next MVP",
      description:
        "In the last few years, we have seen how easy it is to publish your app using firebase or any other cloud platform. Especially firebase is a…",
      imageUrl: "https://miro.medium.com/max/1200/0*xWM5LllZCx8STeIk",
    },
    {
      id: "ffef310a434d",
      url: "https://akshaymattoo.medium.com/embarrassment-driven-development-a-must-kill-attitude-for-any-developer-ffef310a434d",
      createdAt: 1667584532492,
      title: "Embarrassment Driven Development not a framework to be followed",
      description:
        "We all start our journey in the work industry somewhere. Still, one common thing is we are all thrown with a lot of industry jargon like…",
      imageUrl: "https://miro.medium.com/max/1200/0*ibTIZQ40UNc1JiWz",
    },
    {
      id: "4d6d83d00a2a",
      url: "https://akshaymattoo.medium.com/why-did-you-ditch-us-heroku-3-best-free-alternatives-to-heroku-4d6d83d00a2a",
      createdAt: 1667751105867,
      title: "Why did you ditch us Heroku? 3 best free alternatives to Heroku",
      description:
        "Heroku we were in a beautiful relation for so many years. Why did you leave us high and dry in this cold world. I must say it hurts. For…",
      imageUrl: "https://miro.medium.com/max/1200/0*UlOazx8jWXc64i5T",
    },
    {
      id: "ba44a33f4452",
      url: "https://akshaymattoo.medium.com/not-able-to-push-to-git-from-vscode-ba44a33f4452",
      createdAt: 1667759371867,
      title: "Not able to push to git from VSCode?",
      description:
        "Vscode is the developer&#x27;s choice these days to write code. With so many extensions and a very clean UI, it is obvious why we like it so…",
      imageUrl: "https://miro.medium.com/max/1200/0*mzByeEMFu_-EHNFc",
    },
    {
      id: "e1fbffdc11e5",
      url: "https://akshaymattoo.medium.com/run-mac-in-clamshell-mode-e1fbffdc11e5",
      createdAt: 1668274066861,
      title: "Run mac in clamshell mode.",
      desc: "Let&#x27;s start with why. I have a brand new MacBook and a 2-year-old decided to step on it, and the screen was broken. I took it to the apple…",
      imageUrl:
        "https://miro.medium.com/max/1200/1*pWUwoM-WWTmuDiImcvK2-Q@2x.jpeg",
    },
    {
      id: "7cf54e833fbb",
      url: "https://akshaymattoo.medium.com/shorthand-to-a-search-in-the-browser-7cf54e833fbb",
      createdAt: 1594413327798,
      title: "Shorthand to a search in the browser",
      description:
        "“Data is the new oil”, this phrase has been around for a while now. With more and more websites more data is being generated every day…",
      imageUrl:
        "https://images.unsplash.com/photo-1553895501-af9e282e7fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "2701fb0c99c0",
      url: "https://akshaymattoo.medium.com/story-of-and-in-package-json-2701fb0c99c0",
      createdAt: 1611729939527,
      title: "Story of ^ and ~ in `package.json`",
      description:
        "Ever wondered what are these characters in your package.json file. Let’s decipher it together. In `package.json` you write external…",
      imageUrl: "https://miro.medium.com/max/1200/0*GZyPBvjvhwxlqiqe",
    },
    {
      id: "7c931dcd483d",
      url: "https://akshaymattoo.medium.com/how-to-create-a-gamestop-logo-7c931dcd483d",
      createdAt: 1612032909428,
      title: "How to create a GameStop logo",
      description:
        "GameStop got a lot of attention in the last few days. It was all over the news because of a sudden rise in stock price, but here we are…",
      imageUrl: "https://miro.medium.com/max/1200/1*7jE2zwfq3E-OTk_6aaYuTQ.png",
    },
    {
      id: "759407a8c5de",
      url: "https://akshaymattoo.medium.com/what-are-execution-contexts-hoisting-scopes-and-closures-in-javascript-759407a8c5de",
      createdAt: 1614810708092,
      title:
        "What are Execution Contexts, Hoisting, Scopes, and Closures in JavaScript?",
      description:
        "We all have this question about these concepts when Es6 was introduced to us. I stumbled upon this video which answered all my questions…",
      imageUrl: "https://miro.medium.com/max/1200/0*1yIIIWGJA1JKgZ0G",
    },
    {
      id: "8282b2e4eee1",
      url: "https://akshaymattoo.medium.com/what-is-null-in-json-stringify-obj-null-2-8282b2e4eee1",
      createdAt: 1621617244161,
      title: "What is null in JSON.stringify(obj,null,2)",
      description:
        "As a javascript developer, we have been using JSON.stringify() to display a formatted JSON. But ever wondered what is null . Today we will…",
      imageUrl:
        "https://images.unsplash.com/photo-1607706009771-de8808640bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: "e9fc8b456de0",
      url: "https://akshaymattoo.medium.com/what-is-npx-npkill-e9fc8b456de0",
      createdAt: 1621876984221,
      title: "What is npx npkill?",
      description:
        "When building JS projects we tend to quickly build projects and forget about them. Say in the future you move on with the idea and behind…",
      imageUrl: "https://miro.medium.com/max/500/1*HJBu-Dq26YJDA5QX7e-wBw.png",
    },
    {
      id: "717a7c76feef",
      url: "https://akshaymattoo.medium.com/exercise-is-the-more-underrated-power-we-have-717a7c76feef",
      createdAt: 1607631348490,
      title: "Exercise is the most underrated power we have",
      description:
        "Running is like meditation to me. I have come to this conclusion after been in this process for more than a year now. Let rewind a little…",
      imageUrl: "https://miro.medium.com/max/1200/0*tDSJvhqI2wpp7VI8",
    },
    {
      id: "320dcb927856",
      url: "https://akshaymattoo.medium.com/why-we-call-2-then-on-fetch-320dcb927856",
      createdAt: 1629182486127,
      title: "Why we call 2 .then() on fetch()",
      description:
        "I have been writing javascript for a while and 1 fine day looking at my React code I realized why it takes 2 .then() promise calls to…",
      imageUrl: "https://miro.medium.com/max/1200/1*qRHUqMBnUHxSEhiUHFt1ZQ.png",
    },
    {
      id: "c5a5c29f9576",
      url: "https://akshaymattoo.medium.com/create-a-new-github-repository-c5a5c29f9576",
      createdAt: 1630992604339,
      title: "Create a new Github repository",
      description:
        "A shorthand to create a new Github repository is to go to your browser and type “repo.new”. Then go ahead and fill out all the details.",
      imageUrl:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
    },
  ],
};
