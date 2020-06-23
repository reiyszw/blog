---
title: "Dynamic Components is A Great Vuejs Feature"
date: "2020-06-22"
description: "Dynamic Components can be useful for the project which requires multiple modals or tabs."
---

I have been using Vue for over 1.5 years now. I don't think I have known all the Vue features but I can at least share some knowledge about Vue.

Today's topic is about **Dynamic Components** of Vuejs. In my understanding, this feature is not widely taught in tutorials. However, This will be helpful to make the project more scalable and maintainable.

## What is Dynamic Components?

As [It's mentioned in the official Vuejs Documentation](https://vuejs.org/v2/guide/components.html#Dynamic-Components), Dynamic Components provide a simple way to **switch dynamically each component.** Since we don't need to add an either `v-if` or `v-show`, Code would be more concise and readable.

The gif image below lets you convince how Dynamic Components is a useful feature.

![alt text](https://i.gyazo.com/ac855e42cb30f5daea4ced8625a87624.gif "Dynamic Components tabs")

You can see the above code [here](https://vuejs.org/v2/guide/components.html#Dynamic-Components)

The basic concept is simple. In this case, `currentTabComponent` is a computed property that is updated every time the result of this property is changed. You can see how it works in the code.

```html
<component v-bind:is="currentTabComponent" class="tab"></component>
```

```javascript
  <script>
      Vue.component("tab-home", {
        template: "<div>Home component</div>"
      });
      Vue.component("tab-posts", {
        template: "<div>Posts component</div>"
      });
      Vue.component("tab-archive", {
        template: "<div>Archive component</div>"
      });

      new Vue({
        el: "#dynamic-component-demo",
        data: {
          currentTab: "Home",
          tabs: ["Home", "Posts", "Archive"]
        },
        computed: {
          currentTabComponent: function() {
            return "tab-" + this.currentTab.toLowerCase();
          }
        }
      });
    </script>
```

## Multiple modals -> 1 modal + dynamic components

Dynamic Components itself is a simple feature as I have already explained it. No complicated trick involved. What I would like to share with you here is my specific story using this feature in the project.

So, I have recently had a task to update a canceling flow of our software. I won't tell the detail of that but note that the previous canceling flow was made by using multiple modals.

Although there were no bugs in it, I could have found a lot of duplicate codes. So I decided to switch this to only have 1 modal with dynamic components.

As a result, All the **duplicate codes were gone** and made it more readable. Less code, more maintainable. I think I have successfully completed the task.

## Conclusion

Vue has various useful features to help develop more easily and keep adding great features constantly. I would like to share some techniques more and more.

I hope that this article would help your developer's life. Please ask me if you have any questions. Also Please let me know if you have some interesting thoughts about this feature or other features. Thanks!
