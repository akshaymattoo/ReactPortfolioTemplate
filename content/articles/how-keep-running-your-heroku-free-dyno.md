---
id: d26581cd6890
title: How keep running your free Heroku Dyno?
slug: how-keep-running-your-heroku-free-dyno
date: '2022-01-13'
description: >-
  In my last post I explained how to host your playwright code on heroku. In my
  code I am running a task once a day. Basically, my dyno instance is doing
  nothing for 99.9% of the tim
original: >-
  https://akshaymattoo.medium.com/how-keep-running-your-heroku-free-dyno-d26581cd6890
---
![](/articles/how-keep-running-your-heroku-free-dyno/20e88274495a.png)

In my [last post](https://akshaymattoo.medium.com/how-to-run-deploy-playwright-on-heroku-b97fafff416) I explained how to host your playwright code on heroku. In my code I am running a task once a day. Basically, my dyno instance is doing nothing for 99.9% of the time. Its the most ideal a server can be.

After deploying it I realized Heroku was changing the state of the dyno server to ideal and the service was stopped. At the time the URL was hit again in a day it would bring the service up but not the cron job i was running because that was exposed to an API that I had to hit manually.

To overcome this there were two options I write the logic in my code where I would update the server startup code to start the cron job at the same time or add some metrics to to my API which will automatically check the health of my API. I choose the later and checked if there are options to add new reliec or something to my dyno server but I couldn’t find it for free.

I looked at the options outside of heroku and finalized on [UptimeRobot](https://uptimerobot.com/). Its a very simple service which gives you 5 URLs to monitor for free. I just added the health endpoint of my service to monitor now which it checks every 20 minutes. This was my service is never ideal as every 20 minutes a request goes to check if its up or not and I am getting the monitoring metrics from uptime as well.

Hope you learned something from from this short article. Leave your comments for any feedback and suggestions. Happy learning happy coding.
