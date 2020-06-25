---
title: "Discard File Changes by VSCode Instead of git stash"
date: "2020-06-24"
description: "SCode has a simple functionality to discard file changes"
---

This is a small tip for anyone who uses git command daily.

How do you manage when you don't want file changes to be staged but need to checkout another branch?

I have usually cleared a branch by using git stash. git stash is not for discarding unnecessary files but for storing the file changes for just a temporary moment.

I knew that this way would not be ideal but didn't know the proper way of that.

Lately, I have found a much simple solution to discard file changes. Everyone should use that.

[![Image from Gyazo](https://i.gyazo.com/db4f6dc2f262555cdced2523140b9694.gif)](https://gyazo.com/db4f6dc2f262555cdced2523140b9694)

## Discard file changes

1. Use Visual Studio Code
2. Select `Sorce Control` in the left option (with shortcut key, Control + Shift + G)
3. Click `Discard All Changes`

That's it! If you have specific files to discard, You only need to select that file.

I'm not familiar with this type of superpower of VSCode. If you know about VSCode tips to improve productivity, Please let me know. I would really appreciate it. Thanks!
