---
id: ceebb6107287
title: Notion as a database for your next MVP
slug: notion-as-a-database-for-your-next-mvp
date: '2022-06-30'
description: >-
  In the last few years, we have seen how easy it is to publish your app using
  firebase or any other cloud platform. Especially firebase is a one-stop-shop
  for everything from databa
original: >-
  https://akshaymattoo.medium.com/notion-as-a-database-for-your-next-mvp-ceebb6107287
---
![](/articles/notion-as-a-database-for-your-next-mvp/4ce997dfe0b4.jpg)

*Photo by [Team Nocoloco](https://unsplash.com/@teamnocoloco?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)*

In the last few years, we have seen how easy it is to publish your app using firebase or any other cloud platform. Especially firebase is a one-stop-shop for everything from database to hosting your app.

Building an app has many aspects to it but primarily it is backend and frontend. These days we are not short of options for both the technologies like node, java, PHP, and Ruby on the backend and React, Svelte, Angular, etc on the front end. When we have an idea in our mind we tend to think a lot about how our data will look like and what not, which is very important too but data modeling is hard, and spending too much time too can make you slip from the project. While building an MVP these days there are No-code options for web, and mobile which we can take and get the initial product out. Another approach can be where we build the MVP ourselves to get the hang of development as well. In doing so, backend APIs play a vital role.

We all know [Notion](https://www.notion.so/) as a productivity system. Notion is a brilliant JS heavy shop where you can write JS formulas in tables and many other things that I won't deep dive into. We are here to talk backend API’s. One more time Notion comes to our rescue.

Let's dig into how we can get a working API with a database ready to work in few minutes.

Go to notion.so and click on Add a page on left-hand side. Once you do you will see something like this.

![](/articles/notion-as-a-database-for-your-next-mvp/9b5538c2745f.png)

Under the databases section, there are many options. In this example, we will use Table. Go ahead and click create. Once done we will see a blank table like this.

![](/articles/notion-as-a-database-for-your-next-mvp/65f175fe0346.png)

Now we can add entries to this table. Lets enter something very simple which we can relate to. I added a list of dad jokes to the table.

![](/articles/notion-as-a-database-for-your-next-mvp/6feceda37605.png)

We are all set to retrieve this as a JSON response now. Let go to [integrations](https://www.notion.so/my-integrations) page and create a new integration. Doing will ask you certain questions about permissions and workspace you want the integration to associate with.Once you hit submit you will see a token appreas at the top of the screen.

![](/articles/notion-as-a-database-for-your-next-mvp/8978c842b5c8.png)

We need to keep this secret hadndy as we will need it to call the API’s from notion to fetch the data.

Now we need to connect the database and integration that we created. On the top right hand side you see share button click on that. It would pop up options to share this with a person or integrations that you have.

![](/articles/notion-as-a-database-for-your-next-mvp/7dff66998dae.png)

![](/articles/notion-as-a-database-for-your-next-mvp/d4dac8a4b944.png)

![](/articles/notion-as-a-database-for-your-next-mvp/56ba547342fa.png)

Once you select the integration you would see it in the selected options. Good news is we are all set to query these results from the [developer API’s](https://developers.notion.com/reference/intro) provided by notion. You will many options what we can do with the API’s but today we will just query the dad jokes database that we created.

Now lets head over to Insomnia or postman or any other client to call the API’s. API to fetcht the data is

[https://api.notion.com/v1/databases/<databaseID>/query](https://api.notion.com/v1/databases/dd3f285de07a43a8a8cae8d99a5a02ef/query)

and it uses the bearer token as auth. We can get the token from the integrations we created.

To get the databaseID we will look at the url and fetch the long alphanumeric sequence before the query parametres start. That is our databaseID which we will substitute in the above API.

![](/articles/notion-as-a-database-for-your-next-mvp/7e002cf33064.png)

We have all the pieces that we need and lets see the response that we get from the client.

![](/articles/notion-as-a-database-for-your-next-mvp/c0b13630539a.png)

As we see it returns a 200 OK from the API and we have the data in results key.

### Conclusion

Building an MVP can be overwhelming and if some of the load can be lifted it feels good. Today we leveraged notion to get the tabular data in a JSON format which can then be used to display it on a UI. Hope we learned something today. Let me know in comments how else we can leverage notion API’s to expedite some of our tasks. Happy learning happy coding.
