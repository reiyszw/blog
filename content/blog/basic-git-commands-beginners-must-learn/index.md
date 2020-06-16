---
title: "18 Basic Git Commands Beginners Must Learn"
date: "2020-06-15"
description: "Introduce the most frequently used Git commands for beginners"
---

Understanding perfectly about Git must be almost impossible. I use Git command almost every day and still have the massive amount of Git commands I have never known about. when I get stuck in the errors related to Git in terminal then I just ask the internet. Fortunately, almost all of the problem which occurs to us have a solution on the internet.

What I want to say to you the most in this article (especially for the beginner developers) is that don't get overwhelmed by looking over the Git command list. I have recently heard the 80 20 rule in many different media. In that idea, It says that basically 20% of your activity will accomplish 80% of your objective. The idea can be totally applied to the Git command.

I even feel like I have only used less than 20% of Git commands. It means that you just have to learn a few Git commands. Now, are you feeling so relieved? In this article, I will show you the very basic Git commands you use on a daily basis as a developer.

## git clone <url>

```terminal
$ git clone <url>
```

This command literally downloads the project as a clone in your folder. So you can work on the same project with your team members.

## git branch

```terminal
$ git branch
```

It simply shows all the branches you have ever created. The branch with the mark `*` attached at the beginning of the sentence is the one you are currently working on.

## git checkout <branch name>

```terminal
$ git checkout <branch name>
```

This command will switch you to the branch you want to work on. Note that you don't leave the branch with the unstaged commits. Either complete `git commit` or `git stash` to clear it out in the branch before switching. That will help make the branch without unexpected errors.

## git checkout -b <new branch name>

```terminal
$ git checkout -b <new branch name>
```

You can achieve the exact same thing when you type `git branch <new branch name>` then `git checkout <new branch name>`. `git checkout -b <new branch name>` is just a short version of these commands. Developers love the way more productive no matter what. So why not using the command line of 1 line instead of 2 lines.

## git add .

```terminal
$ git add .
```

This command moves all the unstaged files to be staged. But note that these files which were updated need to be committed with `git commit` . Always remember you choose which changed files should be staged first then commit with the message what kind of changes is included within these changed files.

## git add <file name>

```terminal
$ git add <file name>
```

`git add <file name>` helps you choose the specific changed file to be staged. I just introduced about `git add .` as if the command is the only method to move the files to be staged but It's not.

With `git add <file name>`, It can avoid including the files which were accidentally updated with some reason. The reviewer feels so secured and happy to see the only updated files that you would like the reviewer to check without spending some time to figure out which files were actually updated.

## git commit -m"message"

```terminal
$ git commit -m"message"
```

Obviously this command is the essence of git commands. Developers use the version control system such as Git to update and store the data in an efficient way. `git commit -m"message"` commits all the staged files to be ready for pushing.

However, If you care about the quality of the commit messages you make, `git commit -m"message"` is not the only way.

## git commit

```terminal
$ git commit
```

Instead of heavily using `git commit -m` you better use `git commit` to create the solid and helpful commit messages to other developers.

Once you use `git commit`, the intimidating message is appeared. Don't worry. You can write a commit message with the detail information.

- Click `i` to insert the message
- After writing a commit message, select `shift + :`
- Then select `wq`

Everything goes well if you follow the above order.

You may not notice how the commit messages are important to work as a team, and how each great commit messages helps the teams by keeping the helpful commit messages to the future team members and also yourself in the future.

Believe me, It's worth it.

## git status

```terminal
$ git status
```

This command may be the most frequently used within the Git commands. The command helps you in which files are updated and also currently on stage, ready to commit. Before using `git add` or `git commit` commands, It would be helpful to confirm which files are updated or on stage.

## git stash

```terminal
$ git stash
```

Sometimes you need to switch a branch to another one in the middle of working on some changes in the current branch. And your change is not completed, don't want to commit with this incompleted changes. if so, `git stash` let the current change on hold so you can go back to where you were working on whenever you want.

## git stash list

```terminal
$ git stash list
```

You can check all the stash you have already saved.

## git branch -d

```terminal
$ git branch -d
```

Once you finish updating the specific task, the branch might be useless. To delete the branch you simply use`git branch -d`. If your branch has already been pushed and merged into the remote branch, It works.

## git branch -D

```terminal
$ git branch -D
```

As same as the previous command, This command is used for deleting a branch. This command works well regardless of its push and merge status.

## git remote add <remote name> <url>

```terminal
$ git remote add <remote name> <url>
```

In stead of the remote setting in Git, There is no way to send pull request to an existing GitHub repository. Set the remote url using `git remote add`. For instance, when you need an origin as a new remote you can type `git remote add origin <url>`.

Without a remote setting in Git, There is no way to send a pull request to an existing GitHub repository. Set the remote URL using `git remote add`. For instance, when you need an origin as a new remote you can use the command with `git remote add origin <url>`.

In addition to adding your own GitHub URL, It would be useful to add the other team member's GitHub URL as a remote directory, especially for a code review. Just pull your team member's branch and test it out in the local environment.

## git remote -v

```terminal
$ git remote -v
```

You can check all the remote URLs using this command.

## git push <remote name> <branch name>

```terminal
$ git push <remote name> <branch name>
```

After completing the commits, Just push to the remote URL.

## git pull <remote name> <branch name>

```terminal
$ git pull <remote name> <branch name>
```

As I mentioned about pulling the team member's remote branch in `git remote add <remote name> <url>`, `git pull` pulls the target branch. So you will have the same code that the target branch owns.

## git cherry-pick <commit>

```terminal
$ git cherry-pick <commit>
```

When PR has plenty of commits and you don't want all the commits to be included in PR, `git cherry-pick` will be helpful. At first, Create the new branch. Then `git cherry-pick <commit>`. After that that commit will be included in the branch you are working on.

This is a very useful command. It will save time especially when you struggle to fix the uncountable merge conflicts.

# Summary

What I wanted to let you guys know in this article is that you don't need to worry about the complexity of Git more than necessary. I know Git is intimidating. I only know and use the limited Git commands at work but I'm still alive in this extremely fast speed industry.

Get a basic understanding of Git at first. Even if you encounter any issues, you can resolve most of them searching on the internet, I swear. Or Just ask your team members who are knowledgeable about Git.
