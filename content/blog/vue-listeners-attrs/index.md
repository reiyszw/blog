---
title: "Vue $listeners, $attrs are The Handy Way for Passing Event and Data"
date: "2020-06-29"
description: "By using $listeners and $attrs, You can pass event and data pretty easy"
---

Today, I will explain about **$listeners** and **$attrs** of Vue. These features may probably be underestimated among developers despite the handy features since there is not enough information on the internet.

Try to search `$listeners vue` `$attrs vue`. You won't grasp the whole concept of $listeners and $attrs by reading and watching the information you find. I am the one who has been feeling that way. So I decided to contribute to helping other developers who can't fully understand that.

## What is $listeners? How is it used?

So, the code will be below when the click event is required. Pretty basic code of handling event. This time `clickHanlder` is invoked when the button is clicked. Nothing is complicated.

```html
<button v-on:click="clickHanlder"></button>
```

But how about this situation?

```html
<inherited-child @click="sayHello"></inherited-child>
```

In this situation, the click event is not invoked in `inherited-child`. To make it possible, click event here should be passed to `inherited-child`.

**Adding $listeners will resolve this problem.**

```html
<inherited-child v-on="$listeners"></inherited-child>
```

Now, `sayHello` function is successfully invoked when clicked. This is very straightforward. If you are a Vue developer, $listeners can be used more casually.

## $listeners and v-bind="$attrs"

$listeners is used for passing the event to be invoked in a child component. As similar to $listeners, Setting v-bind="$attrs" in a parent component with props can be also used for passing data.

```html
<inherited-child id="1" name="rei" v-bind="$attrs" @click="sayHello"></inherited-child>
```

Both `id` and `name` props are passed to `inherited-child` from the parent component. And the key point is it is not necessary to receive props in the child component.

```html
 <div>
    <h1>Child</h1>
    <div>
      $attrs -> {{$attrs.id}}, {{$attrs.name}}
    </div>
  </div>
```

## What kind of situation $listeners and $attrs would be useful?

I have explained about $listeners and $attrs by using an example of the parent&child components.

However, these can be more useful when you need to **pass the event or data to a deeper hierarchy.**

For example, In the situation below if we need to pass the event and data from `A component` to `C component`, $listeners and $attrs can be set in `B component`.

`A component -> B component -> C component`

Of course, Setting emit or props in the B component will also make it work exactly the same. However, It bothers you adding them in both B and C components. 

In addition, That's not readable and also confuse the developers to update in the future. If the project has Vuex installed we could rely on storing data using that but otherwise, you could probably have an opportunity using $listeners and $attrs sometime soon.

## Conclution

Vue has a lot of useful features but not all of the details are introduced carefully. Since utilizing features makes the project more concise, I will keep publishing these things to encourage especially beginners to write code more simple and clean. Thanks.

### Reference
https://jsfiddle.net/nw2r8d63
