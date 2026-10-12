---
id: ba44a33f4452
title: Not able to push to git from VSCode?
slug: not-able-to-push-to-git-from-vscode
date: '2022-11-06'
description: >-
  Vscode is the developer's choice these days to write code. With so many
  extensions and a very clean UI, it is obvious why we like it so much. Lately,
  I was on my new machine, and m
original: >-
  https://akshaymattoo.medium.com/not-able-to-push-to-git-from-vscode-ba44a33f4452
---
![git push error](/articles/not-able-to-push-to-git-from-vscode/9ab3b9d027f4.jpg)

*Photo by [Yancy Min](https://unsplash.com/@yancymin?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

Vscode is the developer's choice these days to write code. With so many extensions and a very clean UI, it is obvious why we like it so much. Lately, I was on my new machine, and my git push was failing. i had forgotten couple of things we need to do in order to get git working. Set you username and email in the global config with below commands.

\` git config — global user.name “<name>”\`

\` git config — global user.email “<email>”\`

Once done when you try to git push it take you to login screen on the browser and authenticates the account for further pushes. Happy coding.
