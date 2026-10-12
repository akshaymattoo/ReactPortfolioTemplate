---
id: 2701fb0c99c0
title: Story of ^ and ~ in `package.json`
slug: story-of-and-in-package-json
date: '2021-01-27'
description: >-
  Ever wondered what are these characters in your package.json file. Let’s
  decipher it together. In package.json you write external modules your
  application depends on. Every module 
original: 'https://akshaymattoo.medium.com/story-of-and-in-package-json-2701fb0c99c0'
---
![](/articles/story-of-and-in-package-json/1130f22c84a2.jpg)

*Photo by [Joshua Aragon](https://unsplash.com/@goshua13?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)*

Ever wondered what are these characters in your package.json file. Let’s decipher it together. In package.json you write external modules your application depends on. Every module has a release which is in a format 16.0.1. These three digits mean something. 16 is a major release, 0 is a minor release and 1 is for bug fixes/patches. In technical terms its called Semver. For more info follow this [link](https://semver.org/). Say we wanted only minor fixes for a package we will write ^16.0.1 and do npm install. This will only fetch minor releases from the repository instead of the whole thing. If we want just patches then we will write ~16.0.1. If we specify version then we will write nothing just 16.0.1.

Concluding we have three option ^,~ and nothing. Depending on what are the requirements choose the correct version
