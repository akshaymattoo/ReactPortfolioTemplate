---
id: 8282b2e4eee1
title: 'What is null in JSON.stringify(obj,null,2)'
slug: what-is-null-in-json-stringify-obj-null-2
date: '2021-05-21'
description: >-
  As a javascript developer, we have been using JSON.stringify() to display a
  formatted JSON. But ever wondered what is null . Today we will see how we can
  use it to our use.
original: >-
  https://akshaymattoo.medium.com/what-is-null-in-json-stringify-obj-null-2-8282b2e4eee1
---
As a javascript developer, we have been using JSON.stringify() to display a formatted JSON. But ever wondered what is `null` . Today we will see how we can use it to our use.

The second argument to the function can be an array or a function. Let's talk about what happens when we pass an array.

```
const obj = {
 "name":"akshay",
 "password":"some password",
 "email":"abc@hotmail.com"
}
```

if we pass JSON.stringify(obj,\[name,password\],2) the output will be

```
{
 "name":"akshay",
 "password":"some password",
}
```

It acts as a filter on the console.

Now let's see what happens when we pass a function like

```
JSON.stringify(obj,(key,value) => { 
  if(key.match(/(email|password)/)) return "**"
  return value;
},2)
```

as we can see we are masking the value based on keys. In the above case, we are masking sensitive information.

## Conclusion

Now we have learned how to effectively use the second argument for stringify method we can be more careful in using it. We can save to pass on some sensitive information on the logs and save some memory footprint by printing the required values onto the console. Hope we learned something new here. Be curious, be a learner. Happy coding.
