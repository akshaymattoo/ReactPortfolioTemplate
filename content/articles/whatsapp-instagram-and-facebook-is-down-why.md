---
id: cb43f38da24f
title: 'Whatsapp, Instagram and Facebook is down. Why?'
slug: whatsapp-instagram-and-facebook-is-down-why
date: '2021-10-04'
description: >-
  Today morning we saw another big tech outage with all the major websites from
  Facebook not accessible. So I thought I will try to do my anaylysis for my
  knowledge with what went wr
original: >-
  https://akshaymattoo.medium.com/whatsapp-instagram-and-facebook-is-down-why-cb43f38da24f
---
Today morning we saw another big tech outage with all the major websites from Facebook not accessible. So I thought I will try to do my anaylysis for my knowledge with what went wrong here.

I started with nslook and I can see that all websites are resolving to an IP address.

![](/articles/whatsapp-instagram-and-facebook-is-down-why/bfd0d442f713.png)

That means ping would also resolve and just for my sanity I tried ping on all three as well and it was giving a response.

![](/articles/whatsapp-instagram-and-facebook-is-down-why/48dd80afff45.png)

We can reach to the servers but the request is not being resolved.

Now lets go back to the browser and see what is happening with the request. i tried all three requests and there is a common header `proxy_status`which is being set with a value `no_server_available`. There is an another key value pair with `e_isproxyerr` with some long string. Not sure what that is but sure an indicator that something wrong with the proxy server. All I can understand from this is,reverse proxy is not able to resolve request to the back-end server which in turn would feed the landing page to these websites. Please let me know in comments what are your thoughts about this outage. It would be an interesting update from Facebook with what exactly went wrong.
