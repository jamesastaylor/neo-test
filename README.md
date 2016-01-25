# Australian Taxation Office Digital Transformation promo website.

A single page website about the ATO Digital Transformation in collaboration with [Neo](http://neoteny.com.au/).

You can view the site at [atocweb.github.io/neo-experience-framework/](http://atocweb.github.io/neo-experience-framework/).

## Workflow

We use [Waffle](https://waffle.io/) to manage feature requests, log and action defects and fix bugs.

If you want to request a new feature or let us know about a defect or bug on the site, you can [create an issue](https://github.com/atocweb/neo-experience-framework/issues). You will need to have a GitHub account to be able to do this though.

## Notes for developers

This site is built using [Jekyll](jekyllrb.com) and hosted on [GitHub pages](https://pages.github.com/).

`master` branch is the development branch.

`gh-pages` is the production branch.

### How to develop

Using Terminal is the best way to manage a project with GitHub.

**Setting up**

1. Clone the repository by using `git clone git@github.com:atocweb/neo-experience-framework.git`
2. Navigate to the local repository `cd neo-experience-framework`
3. Make sure you have Jekyll installed  `sudo gem install jekyll` (if you don't have MAC network administrator privileges you will need to ask Luke Cathcart for assistance)

**Developing**

You can build the site locally using `jekyll serve --watch`. This will automatically host the site locally and compile sass as you go. (note: changes to _config.yml will require you to rebuild the site)

We use a [simple GitHub workflow](https://gist.github.com/simonschwartz/178f415a8a6212bdb719) for this project. All new features, defect fixes etc should be developed in branches, then merged into master when completed. When ready to release changes in `master` to production we megre `master` into `gh-pages`.


## Notes for publishers

All content is in the `_content` folder

All content needs Frontmatter for Jekyll to process it. 

Frontmatter should look like this:


```
---
title: Name of page
weight: 2
---
```

`title` defines the title for the page that will be displayed in the menu.

`weight` defines where the order of the sections on the site. For example `weight: 2` will mean the page will be the second page.
