---
id: d322ccf9ef48
title: Serverless playwright/firebase functions
slug: web-scraping-with-playwright-firebase-functions
date: '2022-05-31'
description: >-
  In my previous post I had explained how to deploy playwright on heroku.
  Playwright being a new kid on the block and constantly evolving and bringing
  in features it's a little trick
original: >-
  https://akshaymattoo.medium.com/web-scraping-with-playwright-firebase-functions-d322ccf9ef48
---
![](/articles/web-scraping-with-playwright-firebase-functions/b3acf486d765.jpg)

*Photo by [Mitchell Luo](https://unsplash.com/@mitchel3uo?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)*

In my [previous post](https://akshaymattoo.medium.com/how-to-run-deploy-playwright-on-heroku-b97fafff416) I had explained how to deploy [playwright](https://playwright.dev/) on [heroku](https://www.heroku.com/). Playwright being a new kid on the block and constantly evolving and bringing in features it's a little tricky to host it on public cloud environments. My uncle had some requirements where I was supposed to do some scraping to get him some information. Then I realized how would I host it seamlessly on firebase as firebase is getting a lot of traction and more specifically I wanted to try firebase functions. So without wasting any more time lets get started with some technical stuff.

Below are the steps that we will follow to host playwright function.

*   Create a firebase function with playwright.
*   Running it on local for testing.
*   Running it on firebase infrastructure.

## Create a firebase function

To create a firebase function follow the below steps.

*   Go to [https://console.firebase.google.com/](https://console.firebase.google.com/).
*   Click on + sign to add anew project and navigate through the screens.

![](/articles/web-scraping-with-playwright-firebase-functions/5ac22316647c.png)

![](/articles/web-scraping-with-playwright-firebase-functions/d6793d3023ae.png)

![](/articles/web-scraping-with-playwright-firebase-functions/969d07a6d86b.png)

![](/articles/web-scraping-with-playwright-firebase-functions/84feda104325.png)

![](/articles/web-scraping-with-playwright-firebase-functions/4659dfe343ed.png)

![](/articles/web-scraping-with-playwright-firebase-functions/a4c9cfa0237c.png)

*   Go to terminal again and create a directory and cd into that. Also change the node version to 14.19.0. For that use command `nvm use 14.19.0`
*   Install firebase-tools as a global dependency using the command `npm install -g firebase-tools`
*   Now we will login into our firebase account from terminal. From the firectory you create run the command `firebase login` . Either you will be directed to a link to login or if you have already logged in then you will see a message. “ Already logged in as <>”.
*   Now we will setup our firebase function. Run the command `firebase init functions` . This will prompt you with options select as per your need. Below are the screen shots I chose for simplity.

![](/articles/web-scraping-with-playwright-firebase-functions/12614eb9cb42.png)

![](/articles/web-scraping-with-playwright-firebase-functions/2c030b4cc820.png)

![](/articles/web-scraping-with-playwright-firebase-functions/4e5d7ecf48c4.png)

![](/articles/web-scraping-with-playwright-firebase-functions/8fe7e3114a08.png)

Once the setup is complete we will see something like this in Vscode.

![](/articles/web-scraping-with-playwright-firebase-functions/3978c8e274f8.png)

Uncomment the code in index.js for hello world and you will see the function code as below.

![](/articles/web-scraping-with-playwright-firebase-functions/8b84e16c8445.png)

At this moment we are all set to run our first function. First navigate to function direction in your project and run the command npm run server. This will open the functions emulator and end points which we can use to test.

![](/articles/web-scraping-with-playwright-firebase-functions/fafad027c79e.png)

for your project paste the link in the browser to see the output of the function. We will see something like this.

![](/articles/web-scraping-with-playwright-firebase-functions/78caf5c5fa9b.png)

At this moment we are all set with running a function on our local system.

Now lets dive into writing some playwright code and expose it as a function. For this we will use codegen capability of playwright. Run the command `npx playwright codegen` . Once you do it will open these two windows

![](/articles/web-scraping-with-playwright-firebase-functions/fb7fe450d06d.png)

on the left window we will enter the url and on the right window we will see the code being written automatiicaly. Also select Target as javascript on the right side window.

## Running it on local

Firebase gives options to run in an emulator for testing. It's a great feature where we can do all the testing. Before we dive into that we will do some installs.

```
npm i playwright babel-eslint
```

Once we do that add parser: “babel-eslint” to your eslintrc.js file so we can recognise the => in our code.

We will put medium.com in the URL and click on Our story link. We will copy that code and keep it handy. We will make another function in index.js like below and paste the code there.

```javascript
exports.medium = functions.https.onRequest(async (request, response) => {
functions.logger.info("Hello logs!", {structuredData: true});
const browser = await chromium.launch({
headless: false,
});
const context = await browser.newContext();
try {
// Open new page
const page = await context.newPage();
// Go to https://medium.com/
await page.goto("https://medium.com/");
// Click text=Our story
await page.locator("text=Our story").click();
// assert.equal(page.url(), 'https://medium.com/about?autoplay=1');
// ---------------------
} catch (e) {
console.log(e);
} finally {
await context.close();
await browser.close();
response.send("Playwright medium function running!");
}
});
```

we will have const {chromium} = require(“playwright”); as top level import.

We are all set to run our first playwright firebase function on local. Run ‘npm run serve’. This will open emulator endpoints. Go to the new endpoint like [http://localhost:5001/medium-b914e/us-central1/medium](http://localhost:5001/medium-b914e/us-central1/medium) ( it maybe different on your machine) . When you hit this URL this will open a chromium browser and go to medium.com click Our story, close the browser and give you the response. Congratulations you have written a playwright firebase function.

Note if your firebase is on spark plan then you will not be able to deploy and may run in the the below error.

```
Error: Your project medium-b914e must be on the Blaze (pay-as-you-go) plan to complete this command. Required API cloudbuild.googleapis.com can't be enabled until the upgrade is complete. To upgrade, visit the following URL:
```

You have to convert your project to blaze plan and then deploy your function. For that go to firebase console and click on spark plan on the screen. Once you do that it will give you option to convert it to blaze plan.

![](/articles/web-scraping-with-playwright-firebase-functions/8e154f1bdabb.png)

select plan and you are good to go.

Now the catch is if you deploy this on firebase it will not work. You can give it a try. Run ‘npm run deploy’.

![](/articles/web-scraping-with-playwright-firebase-functions/ce7575e5139b.png)

Functions are up and running on firebase. If you try and accessing both the URL you will see helloWorld works and medium doesn’t.

![](/articles/web-scraping-with-playwright-firebase-functions/622184c8fefb.png)

![](/articles/web-scraping-with-playwright-firebase-functions/dee9c2447bc0.png)

So at this moment we will make changes in our code so it gets deployed and can run on firebase.

## Running it on firebase

To make it work on firebase we have to make the changes in dependencies in`package.json`

```
{
  "dependencies": {
        "chrome-aws-lambda": "10.1.0",
        "playwright-core": "1.14.1"
  }
}
```

What the above code does is runs a chromium browser on firebbase which was a problem above.

Then in index.js make the below adjustments to initialize chromium and browser object.

```
const { chromium } = require('playwright-core');
const bundledChromium = require('chrome-aws-lambda');........const browser = await Promise.resolve(bundledChromium.executablePath).then(
      (executablePath) => {
        if (!executablePath) {
          // local execution
          return chromium.launch({});
        }
        return chromium.launch({ executablePath });
      }
    );
```

and we are done. Updated index.js looks like this

```javascript
const functions = require("firebase-functions");
const {chromium} = require("playwright-core");
const bundledChromium = require("chrome-aws-lambda");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
functions.logger.info("Hello logs!", {structuredData: true});
response.send("Hello from Firebase!");
});
exports.medium = functions.https.onRequest(async (request, response) => {
functions.logger.info("Hello logs!", {structuredData: true});
const browser = await Promise.resolve(bundledChromium.executablePath).then(
(executablePath) => {
if (!executablePath) {
// local execution
return chromium.launch({});
}
return chromium.launch({executablePath});
}
);
const context = await browser.newContext();
try {
// Open new page
const page = await context.newPage();
// Go to https://medium.com/
await page.goto("https://medium.com/");
// Click text=Our story
await page.locator("text=Our story").click();
// assert.equal(page.url(), 'https://medium.com/about?autoplay=1');
// ---------------------
} catch (e) {
console.log(e);
} finally {
await context.close();
await browser.close();
response.send("Playwright medium function running!");
}
});
```

Note: This code will not work in the local environment as chrome-aws-lambda is only supposed to work on cloud infrastructure. That is why I mentioned developing and testing everything using playwright module on local.

Once you do ‘npm install and then npm run deploy’ you would see a success message on the console that affirms that it has been deployed to the cloud. Try accessing the Url’s and you should see the success message for both.

If in case you got a memory issue while accessing the route make the below modification.

Code before would be like

```
functions.https.onRequest(()=> {})
```

We have to make a change to adjust the memory used by the function using the below code

```
functions.runWith({timeoutSeconds: 300,memory: "1GB",}).https.onRequest(()=> {})
```

we can adjust timeout and memory.

If you see an error with request not handled you can cross check if package.json has correct engine pointing to 14

At this point we have dealt with almost every error we can encounter to get our function working. Final package.json should look like this

```json
{
  "name": "functions",
  "description": "Cloud Functions for Firebase",
  "scripts": {
    "lint": "eslint .",
    "serve": "firebase emulators:start --only functions",
    "shell": "firebase functions:shell",
    "start": "npm run shell",
    "deploy": "firebase deploy --only functions",
    "logs": "firebase functions:log"
  },
  "engines": {
    "node": "14"
  },
  "main": "index.js",
  "dependencies": {
    "babel-eslint": "^10.1.0",
    "firebase-admin": "^9.2.0",
    "firebase-functions": "^3.11.0",
    "chrome-aws-lambda": "10.1.0",
    "playwright-core": "1.14.1"
  },
  "devDependencies": {
    "eslint": "^7.6.0",
    "eslint-config-google": "^0.14.0",
    "firebase-functions-test": "^0.2.0"
  },
  "private": true
}
```

## Conclusion

To summarize we saw how we can run playwright ( new kid on the web scraping world) as a firebase functions. We can use it in many ways to automate our jobs. Give it a try and try to automate any of your jobs. personally I found this more scaleble and easy to use than Heroku. I hope you learned something today and please let know about it in comments. Happy Coding.
