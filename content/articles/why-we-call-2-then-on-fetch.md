---
id: 320dcb927856
title: Why we call 2 .then() on fetch()
slug: why-we-call-2-then-on-fetch
date: '2021-08-16'
description: >-
  I have been writing javascript for a while and 1 fine day looking at my React
  code I realized why it takes 2 .then() promise calls to fetch the data.
original: 'https://akshaymattoo.medium.com/why-we-call-2-then-on-fetch-320dcb927856'
---
I have been writing javascript for a while and 1 fine day looking at my React code I realized why it takes 2 .then() promise calls to fetch the data.

![](/articles/why-we-call-2-then-on-fetch/afcf77ef6c48.png)

It has a solid reason behind it. When we make a fetch call it returns us with headers and other metadata information. This is brilliant as in case if we only want to see the status code we don't have to wait for the server to compile the whole body for us and all we would do is checked the status code. Now that the client knows the request is OK, then we make another call and fetch the response body.

## **Conclusion**:

A curious mind is a healthy mind. Your best friend in the javascript world is [mdn](https://developer.mozilla.org/en-US/) docs. Many thanks to [Mozilla](https://medium.com/u/95f4ec6ae6f6?source=post_page---user_mention--320dcb927856-----------------------------------------) for having this compiled for us. Hope you learned something about fetch that we use almost every day. Happy learning happy coding.
