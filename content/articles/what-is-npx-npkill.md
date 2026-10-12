---
id: e9fc8b456de0
title: What is npx npkill?
slug: what-is-npx-npkill
date: '2021-05-24'
description: >-
  When building JS projects we tend to quickly build projects and forget about
  them. Say in the future you move on with the idea and behind the scenes, the
  node_modules folder is tak
original: 'https://akshaymattoo.medium.com/what-is-npx-npkill-e9fc8b456de0'
---
When building JS projects we tend to quickly build projects and forget about them. Say in the future you move on with the idea and behind the scenes, the node\_modules folder is taking a lot of space on our disk. We know space is cheap but why not save it when we can. In order to delete all the unwanted node\_modules directories run `npx npkill` in your cmd prompt. If it is not installed it will first ask us to install it or we can do it by typing `npm i -g npkill` in cmd prompt. `-g` option is for global install, not project-specific. Once done you will be presented with these options

![](/articles/what-is-npx-npkill/d5fb8467378d.png)

then all we need to do is hit the space bar and it will delete the node\_modules directory. In the future, if we come back to the idea all we need to do is `npm install` and we are good to go. You can learn more about this tool [here](https://npkill.js.org/). Go save some space to build the next billion-dollar idea. Happy learning happy coding.
