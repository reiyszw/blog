---
title: 5 tips to use BEM css naming convention properly
date: "2020-05-10"
description: "BEM is the most concise way of writing CSS nowadays but you might not know about the proper way using that"
---

CSS seems pretty easy at first sight. But trust me, It doesn't. If you are a beginner as a frontend developer then CSS might be the biggest hurdle to complete your task. To make your life more comfortable as a frontend developer, I highly recommend you to follow the BEM naming convention.

As many of you know, BEM stands for **Block, Element, Modifier**. `Bloc__Element--Modifier` may be more recognizable for some people. For those who would like me to introduce BEM, I will refer this to you. [the introduction of the official website for BEM](http://getbem.com/naming/). Please look over this official website of BEM.

However, To deeply understand how to use BEM for your project, no offence, but this official website is just useless compared to the official documentation of Vue.js, React, or other well-documented ones especially. You will obviously not use BEM properly if you only saw the official website of BEM or only know more or less about the keywords as `Block__Element--Modifier`.

In this article, I will talk about how to apply BEM properly since many developers may not know about including BEM into the project.

## The way I use BEM was wrong

I can not remember when I started using BEM for a project. It probably was 2 or 3 years ago. Believe it or not, I have never reached [the official website of BEM](http://getbem.com/) until last week. I do not blame myself about that since I found out this page is rather created for just a short introduction about BEM. not much new information was found.

BEM is not a framework or a library that shines brightly in the frontend world. In most cases, BEM is categorized as a principle.

While BEM does not force us to follow the strict rules. Some developers might have been kept considering about the proper way to use BEM.

So now I would like to suggest how to use BEM more efficient and maintainable way. Don't get me wrong that my opinion is not perfect. These are just my suggestions but I hope some of them could help you to rethink BEM and make your project better.

## Don't do this: Block\_\_Element\_\_Element or Block\_\_Element--modifier\_\_element

I am pretty sure some of you might have ever written BEM like this.

```html
<div class="card">
  <p class="card__title"></p>
  <p class="card__subtitle"></p>
  <div class="card__body">
    <a href="card__body__link">
      <p class="card__body__title"></p>
    </a>
  </div>
</div>
```

With this BEM style, class name could be relatively long and hard for someone who do not have enough knowledge about the project and file structures to update CSS.

In the case you need to write the second element in the block, I would suggest writing BEM like this.

```html
<div class="card">
  <p class="card__title"></p>
  <p class="card__subtitle"></p>
  <div class="card__body">
    <a href="card__link">
      <p class="card__linkTitle"></p>
    </a>
  </div>
</div>
```

If you prefer to use kebab case, code could be like this.

```html
<a href="card__link">
  <p class="card__link-title"></p>
</a>
```

Keep following the rule, `Block__Element--modifier`. Instead of connecting an element to another element, you should always follow this simple rule.

## Naming is definitely important

Naming is hard for anything. Not only for class name, id name, but also for variable, function or any kind of names. Take some time to let you convince yourself to add an appropriate class name to make it a great BEM structure. If you have no idea what kind of name would be appropriate for class names, [Check this cheat sheet out](https://9elements.com/bem-cheat-sheet/). I have recently found this and It is simple and easy to understand.

Few suggestions for naming to the class name of HTML, I often use these as the class name of an element.

`title`, `link`, `image`, `body`, `box`, `item`, `inner`

Pretty simple and easy, isn't it?

## The meaningful name is crucial

Some developers prefer to put shorthand names on the class names. That is not 100% a bad thing. Also, if the team has the specific naming rule which recommends to use shorthand names, that would totally be ok.

However, from my point of view, a meaningful names should be always preferred to a shorthand name.

```html
<div class="card">
  <p class="card__ttl"></p>
  <p class="card__subttl"></p>
</div>
```

`ttl` stands for title, `subttl` should probably be for subtitle in this case. But what is the point of making it short? What if someone gets confused about the meaning of a word? Although putting Shorthand class names on class may reduce a tiny bit of bytes, a Meaningful name is always secured and understandable for everyone.

## Deep nesting is not readable

Applying a CSS preprocessor such as Sass or less is standard in frontend. Nesting is one of the efficient features of these preprocessors. I have recently been keen to write clean code as much as possible and realized deep nesting (I suppose that more than 4 hierarchies could be called as deep nesting) is unreadable.

Look how deep nesting is not readable.

```less
.card {
  &__title {
  }

  &__subtitle {
  }

  .cardBody {
    &__title {
    }

    .cardList {
      &__title {
      }
    }
  }
}
```

Instead, You should write code something like this

```less
.card {
  &__title {
  }

  &__subtitle {
  }
}

.cardBody {
  &__title {
  }
}

.cardList {
  &__title {
  }
}
```

In the latter, when you get asked to fix styles you can reach to where the code should be updated without any hesitation. It would not only save developer's time but also prevent a possibility to occur a side effect which might have been caused by updating code.

## Do not add !important to your code as much as possible

No wonder that if you are a frontend developer you have been ended up adding `!important` to code countless times. or you may even have added `!important` to the code which already `important` was assigned to many classes.

In my point of view, In most of the cases, the reason why we have to add `!important` is caused by having common styles in a root directory.

I remember the days I applied bootstrap to a project and somehow I was forced to add `!important` to some CSS instead of updating a default stylesheet of bootstrap.

I am not saying that having a common CSS is relatively bad. However adding common CSS without thinking about the whole project, would make CSS code being messy.

## I don't recommend to customize BEM

BEM naming convention is just a principle and obviously we have no reason to follow all of them. For example, some people decide to add a class name something like that.

```html
<button class="button">
  <i class="button_icon">
  <span class="button_title">
  <span class="button_body">
</button>
```

It just replaced a double underscore with a single underscore. That's not a big deal. However, a double underscore reminds me of BEM, undoubtedly. Even when a new employee joins a team and looks over the code for the first time, he or she realizes that BEM is applied to this project without asking a team member.

So that there is no point to let BEM rules customize to be your original way. Always care about how the other developers feel when updating your code. Don't make your team member get confused.

## Conclusion

Not so many frontend developers try to explore about a naming convention. Without organizing code, the bigger the project goes the less organized the code would be. So that organizing code makes a massive impact on the project to reduce refactoring time and team member's stress.

I introduced BEM to you since I have never encountered any CSS naming convention more convincing than BEM. BEM is simple, easy to understand, and more importantly maintainable.

I hope this post will help you write CSS code. If you have any questions or opinions about the post, please feel free to reach to my social account or email. Especially if you know a great tip to be a productive way of writing CSS more, I would love to hear that. Thanks!
