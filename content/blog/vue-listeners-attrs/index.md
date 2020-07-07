---
title: "How to Properly Use $refs for DOM manipulation in Vue.js"
date: "2020-07-06"
description: "This post explains how $refs and ref are used together to manipulate DOM, and in which situation we should not overuse these"
---

Vue is one of the most beginner-friendly JavaScript frameworks I have ever used before. I have been using Vue for almost 2 years and I have no stress about creating and updating the Vue component.

However, right after I started using Vue I wondered how we could manipulate DOM inside a Vue file. This issue will be resolved by using `$refs` to access DOM. Many developers might get the same issue so that I decided to write today's blog post.

## What is $refs and ref

So, I refer to it from the official Vue documentation.

### $refs
 
[![Image from Gyazo](https://i.gyazo.com/a70464bd944aea94dc29cee38df61580.png)](https://gyazo.com/a70464bd944aea94dc29cee38df61580)

https://vuejs.org/v2/api/#vm-refs

### ref

> `ref` is used to register a reference to an element or a child component. The reference will be registered under the parent component’s `$refs` object. If used on a plain DOM element, the reference will be that element; if used on a child component, the reference will be component instance: https://vuejs.org/v2/api/#ref

```html
<!-- vm.$refs.p will be the DOM node -->
<p ref="p">hello</p>

<!-- vm.$refs.child will be the child component instance -->
<child-component ref="child"></child-component>
```

## But, I can't understand it by checking the official documentation...

![Wait What Idk GIF by Originals](https://media.giphy.com/media/fstgqv79jrn0KnscKo/giphy.gif)

I have attached the details of both `$refs` and `ref` introduced by the official Vue.js Documentation. However, These are not kind enough for most of the developers who have never experienced using Vue.js.

That's why hopefully this blog post will be a valuable source to help to understand the core concepts about `$refs`.

## How to use $refs and ref?

To clarify the difference between `$refs` and `ref`, `$refs` is the object and all the DOM elements are contained within this object.

But, `$refs` itself is useless.  `ref` should always be registered in the HTML code to take effect `$refs`.

For example, to access to the DOM of the element which is set `ref="slider"`, either `this.$refs.slider` or `this.$refs['slider']` can be accessible to DOM. 

In order to confirm the DOM of the one you are supposed to access, **you can write `console.log(this.$refs.slider)` in mounted().** 

Then, the result of DOM will be displayed in the console of the dev tool as below.

[![Image from Gyazo](https://i.gyazo.com/51e50576f13e29066d99b5bd914bdeba.png)](https://gyazo.com/51e50576f13e29066d99b5bd914bdeba)

[![Image from Gyazo](https://i.gyazo.com/a63b56bc9002c2029249ff418b9aa3c5.png)](https://gyazo.com/a63b56bc9002c2029249ff418b9aa3c5)

## Possible to DOM access using vanilla JavaScript, However...

Until now, I have explained about `$refs` for DOM access. But actually, you can even manipulate DOM by using vanilla JavaScript like `document.querySelector('test')`.

If you only need to manipulate DOM of the current component, You could use vanilla JavaScript instead of `$refs`.

The reason why `$refs` can be prepared for Vue is that with `$refs` we can **access the DOM of a parent and child component.** Moreover, even DOM of the plugin will be accessible by `$refs`. With only vanilla JavaScript, It won't be possible. 

## 2 things you should be considered before using $refs

### Don't overuse $refs 

Before adding `$refs` into the component code, Please take a deep breath and consider that you do really need `$refs` to achieve the expected behavior. 

According to the basic concept of Vue.js, we should use Vue's features as much as possible **rather than directly manipulate DOM.** That's how Vue is welcomed for the developers. We were all fatigued direct manipulation of DOM using jQuery.

### Don't forget adding `ref` to the element

To be honest, I have had this mistake several times. It looks so amateur mistake but It has happened it anyway. To make `$refs` be applied to the component, **the `ref` must be set to the target element** you want to call out.

Note that `$refs` and `ref` are the pair used for DOM manipulation. 

## Conclusion

I personally don't prefer to use or update the code which `$refs` are included in several parts. However, sometimes It happens for the Vue developers.

In addition, getting familiar with the specific feature of the daily used technology will eventually help to save your time a lot.

So hopefully, this blog post is worth reading and gaining someone's knowledge. Cheers for all the devs, Thanks!

