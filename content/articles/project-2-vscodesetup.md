---
id: f45e67c8fa9c
title: 'Project #2 — VsCodeSetup'
slug: project-2-vscodesetup
date: '2023-03-10'
description: 'URL: https://vscodesetup.com'
original: 'https://akshaymattoo.medium.com/project-2-vscodesetup-f45e67c8fa9c'
---
_URL:_ [_https://vscodesetup.com_](https://vscodesetup.com)

To bring a product to the market, it needs to succeed twice — first in your mind, and then in reality. In my case, my idea was successful in my mind, but it didn’t turn out the way I had expected when it came to reality. However, I still believe in the idea, so I changed the workflow.

### What is the Idea?

So, what is the idea? The idea is to find out which vscode extensions developers are actually using and share that information with the world. But why? If there is a developer who is using some brilliant extensions, it can help other fellow developers. Moreover, there are millions of extensions available, and some are pretty good, but we are not aware of them. With this approach, we can see what the community is actually using, rather than what has been downloaded over the years. One may argue that the marketplace can give us the same data with filters on downloads, ratings, etc. However, it doesn’t give an accurate picture since we tend to change extensions all the time.

### What went off the tangent?

There were some issues with the initial idea. To get the current list of installed extensions, we need to run the command “code — list-extensions — show-versions”. The whole time, I was building the project on my local machine without realizing the biggest security risk that a browser cannot initiate command requests on the client machine. It was working on my dev server because vscode is on my machine, and the backend server is also running on my machine. When I would test the API, it would return the correct results. I had to take a back seat and see what the other approach could be.

### Current solution

The initial design and flow of the idea involved clicking, and everything would be taken care of. However, now there is a slight change. I have created a nodejs script that the developer would run on their machine, and it would save the extensions in the firebase DB. If they change anything in the future, they can run the script again, and it would update the results. After that, the developer can navigate to the web app and see what extensions other developers are using.

### Tech Stack

Regarding the tech stack, this project has separate backend and frontend code. I started the project with Nextjs, keeping in mind that I would use it to build APIs and that it would make my life easier. However, I had to carve out the backend code and build a small nodejs backend to receive the extensions and save the results. I kept the frontend as Nextjs, which I found very powerful, and may use the same for the following projects. I am using firebase to store the results, but I could use any database as it’s not very complicated.

### What platform did I launch on?

Finally, to launch the project, I am using Render to host my backend and Vercel to host the Nextjs project. However, I was not able to push the Nextjs project on Render, so I will look into that since only one free project is allowed on Vercel.

### What platforms did I market on?

I have used Product Hunt, Reddit groups, Facebook groups, LinkedIn and Indie hackers.

### Design inspiration

My idea was to develop a portfolio app that would be based on the vscode-like theme. Upon searching I found this [git repo](https://github.com/itsnitinr/vscode-portfolio), so I decided to use this in my project instead of creating one from scratch. It's a very well-written project you must see if you are a vscode enthusiast.

### Previous posts

I started working on this last month. See my initial post [here](https://medium.com/@akshaymattoo/starting-12-12-project-startups-challenge-c3d38dddcbcd) and the first startup launch post [here](https://medium.com/@akshaymattoo/startup-1-karyaa-246f2cac2ad).

Please tell me your feedback and shoot suggestions. I would love to include them in the product.
