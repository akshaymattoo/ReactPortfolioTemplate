---
id: 7c931dcd483d
title: How to create a GameStop logo
slug: how-to-create-a-gamestop-logo
date: '2021-01-31'
description: >-
  GameStop got a lot of attention in the last few days. It was all over the news
  because of a sudden rise in stock price, but here we are not discussing any of
  the financial jargons.
original: 'https://akshaymattoo.medium.com/how-to-create-a-gamestop-logo-7c931dcd483d'
---
![](/articles/how-to-create-a-gamestop-logo/be8842766292.png)

*GameStop*

GameStop got a lot of attention in the last few days. It was all over the news because of a sudden rise in stock price, but here we are not discussing any of the financial jargons. We will create the GameStop logo using HTML and CSS. We will use codepen to code this. Codepen is an online code editor and very useful as one can see the results instantaneously. Let's start coding.

When you open [Codepen](http://codepen.io) it will look something like this

![](/articles/how-to-create-a-gamestop-logo/c5b4bfdc7b03.png)

First, let's write the text for the logo. On the HTML side write

```
<h1>GameStop</h1>
```

Now you should see something like this.

![](/articles/how-to-create-a-gamestop-logo/b112a4da3f1e.png)

As we can see some text on the screen. Let's code some CSS and make the text look like the actual logo. On the CSS section start writing as you follow the article and we will see the changes as we code along.

We will write all the CSS under h1 tag.

```
h1{
  font-family:Impact;
}
```

The above line will set the font type of the text

```
h1{
  font-family:Impact;
  font-size:100px;
}
```

above addition will set the font size.

```
h1{
  font-family:Impact;
  font-size:100px;
  height:100vh;
}
```

This will set the height of the text to be the whole page irrespective of the screen. At this point, the text should look something like this

![](/articles/how-to-create-a-gamestop-logo/4578083748fe.png)

Now we will do the most interesting part 😉, centering the text. I will use flexbox to do it.

```
h1{
  font-family:Impact;
  font-size:100px;
  height:100vh; 
  display:flex;
  justify-content:center;
  align-items:center;
}
```

At this moment it looks like this.

![](/articles/how-to-create-a-gamestop-logo/45bb49103dcf.png)

Now the last part to make the Stop in red color. For that will put Stop text inside a <span> tag. Now the HTML looks like

```
<h1>Game<span>Stop</span></h1>
```

You will see no change in the text. Now the end part to make it red.

```
h1 > span {
  color:red
}
```

The above CSS is a selector query. You can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors). The final text looks like this.

![](/articles/how-to-create-a-gamestop-logo/441422b352ef.png)

For your reference [here](https://codepen.io/akshaymatoo/pen/VwmYeOG) is the link to my codepen.

## Conclusion

In this post, we learned about codepen (a great place to prototype things) basic flexbox, and css selectors. Keep experimenting, keep coding. Happy learning.
