---
id: b97fafff416
title: How to run/deploy playwright on Heroku?
slug: how-to-run-deploy-playwright-on-heroku
date: '2022-01-11'
description: >-
  To start with what is playwright? Its a framework to enable end-2-end testing
  for web apps. But its not the only use case of playwright. Web scraping is
  also another use case we ca
original: >-
  https://akshaymattoo.medium.com/how-to-run-deploy-playwright-on-heroku-b97fafff416
---
![](/articles/how-to-run-deploy-playwright-on-heroku/162e8be9fc21.jpg)

*Photo by [Roman Synkevych](https://unsplash.com/@synkevych?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)*

To start with what is playwright? Its a framework to enable end-2-end testing for web apps. But its not the only use case of playwright. Web scraping is also another use case we can use it for.

Doing scraping is very easy with playwright as it gives you an option where you can navigate through the workflow and it will generate the code for you. There are many languages support for that.

![playwright inspector](/articles/how-to-run-deploy-playwright-on-heroku/40451231d8a2.png)

you can get started with with the below command `npx playwright codegen <url>` . This will open the url entered and the playwright inspector and one has many options to select the language of choice code.

![](/articles/how-to-run-deploy-playwright-on-heroku/d6926843a217.png)

In the above example I opened google and searched javascript and one the right hand side it generated code for that. Like this one can generate the code quickly.

Fast forward if you [deploy](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app) the code on heroku. It fails to recognize the playwright package. As many I tried many different options and nothing worked until I found this [stack overflow](https://stackoverflow.com/questions/64198107/heroku-cannot-find-playwright-files) link.

All one has to do is add the [playwright build pack](https://github.com/playwright-community/heroku-playwright-buildpack). To run the playwright on Heroku the container needs the right build pack and order matters. Make sure its first and then running environment. In my case its node.

![](/articles/how-to-run-deploy-playwright-on-heroku/21827f1237eb.png)

My app is exposed as an API and now I can use the playwright capabilities. Let me know if you have questions I am happy to help. Happy learning happy coding.
