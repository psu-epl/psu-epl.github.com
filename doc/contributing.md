---
title: How to Improve this Site
author: Joe Shields
date: 2018-07-21
layout: doc

---

## Table of Contents
{:.no_toc}
* ToC
{:toc}

{% comment %}
----- An Explanation of the ToC -----
The `## Table of Contents` just provides a section heading (h2) for the ToC.
The `{:.no_toc}` assigns the class name `no_toc` to the header, to exclude it from the ToC.
`* Table of Contents` is a dummy unordered list for the next line to operate on.
`{:toc}` turns the previous unordered list into a ToC.
{% endcomment %}

# Content Changes
Managers are able to make changes to this site [through the GitHub repo.][repo]
All of the content is in [Markdown] files (`.md` or sometimes `.markdown`).
You can edit these relatively easily through a browser, 
though it's preferred that big changes (particularly multi-file changes) be done locally through Git.
Check out the [Markdown] syntax, if it's not familiar to you.
Each page also requires a [YAML] header with a title and layout, which you should be able to figure out by looking at an existing page.

Non-managers can still contribute through issues and pull requests.

## Marking Machines as Working or Broken
The main page features [a list of which machines are currently working]({{ site.url }}/#lab-equipment),
so users can tell at a glance if they'll be able to use what they need.
If a machine isn't ready to be used by students, it's highlighted in red.
To change the status of a machine, go to [_data/machines.yml][machine status].
Then, set the `up: ` field to `true` if the machine is working, or `false` if it isn't working.

## Style
Documents should be structured hierarchically with descriptive headings.
Headings should be done with pound signs, rather than dashes, to avoid ambiguity.
The contents of each heading should fit on a single screen (less than 40 lines), not counting images.
All YAML headings must contain a title. Level 1 headings are not titles.

### SOPs
Here's a template for how the Markdown of an SOP should look. Pictures and concrete examples are always preferred.

```
---
title: Coffee Maker SOP
layout: doc
author: "Alice Barnicle, Charles Dunkirk"
date: 2069-04-20
---

## Table of Contents
{:.no_toc}
* ToC
{:toc}
A ToC is optional, but preferred for longer documents.
Simply paste the above code into the document.
See this document's source for an explanation.

# About this Machine
![](relative/linkTo/aPictureOf/theMachineOrProcess.jpg)
<a short description of what this machine's good for plus its advantages, disadvantages, and quirks>

## Useful Links
- [manufacturer website](https://notanactualaddress.foo)
- You can find the manual [here](manual.pdf).
- <more links to manufacturer docs, calculators, outside tutorials, etc.>  
It's preferred that critical documents like manuals, TDSs, and MSDSs be kept in the repo when possible/allowed.

## Machine Safety
<notes about possible hazards and the necessary procedures and equipment to avoid them>
Make it clear that the user is responsible for their own safety 
and that of the people around them while using this tool.

## How to Get Help
<a list of which documents, websites, people, or mailing lists should be consulted in case of problems>

# Using this Machine
These sections describe the standard usage and common pitfalls.

## Setup
<how to check that the machine is okay to use>
<make the machine ready to use>

## Operation
<how to actually *do the thing*>

## Shutdown
<how to safely shut down the machine>

## Cleanup
<how to reset the work station for the next user>

# Tips and Tricks
<some sections describing advaned techniques>
## How to Brew Coffee with this Machine
```

# Structural Changes
GitHub Pages automatically builds the Markdown content into HTML pages using [Jekyll], a [Ruby] library.
It's possible to make changes to the layout, configuration, and theme files through the GitHub website,
however this is strongly discouraged. 
Instead, you should make and preview changes locally before publishing them to the website. 
This helps us not have a broken website.

## Previewing your Changes Locally
It's assumed that you already know how to use `git` to clone and make changes to the website's repo.
For small changes, you can probably get away with not learning much about Jekyll.
For larger changes, you'll need to find your own help. The [Jekyll] website is pretty good for this.

### Installing Jekyll
You'll need to install [Ruby] to run Jekyll. 
Within Ruby, you'll need the `bundler` and `ruby-dev` libraries before you install `jekyll`.
If you're using the `apt` package manager, this can be done very easily by running these commands:

```
sudo apt install ruby
sudo gem install bundler ruby-dev jekyll
```

`gem` is the package manager for Ruby libraries.

### Running Jekyll
The necessary commands are already set up in the Makefile, 
so you can simply run `make preview` and visit the address it tells you in a browser.
This is usually `localhost:4000`. (Literally paste `localhost:4000` into your address bar.) 
While this command is running, any file you change will be automatically rebuilt in the site.
Remember to refresh the page in your browser to see these changes.
If you don't have `make`, running `jekyll serve --watch` is equivalent.

Note that the Markdown, YAML, CSS, et cetera files are the *source* files for the site. 
Jekyll renders them and puts the results in `_site`.
Thus, any changes you make to files in `_site` will get wiped out when they're rendered again.
You should *never* commit anything in the `_site` directory. 
(It's ignored by the `.gitignore`, so this should be hard to do by accident anyway.)
GitHub Pages will automatically re-render the site when changes are pushed to the `master` branch.

[repo]: https://github.com/psu-epl/psu-epl.github.com/
[Jekyll]: https://jekyllrb.com/
[Ruby]: https://www.ruby-lang.org/en/
[Markdown]: https://daringfireball.net/projects/markdown/syntax
[YAML]: http://yaml.org/
[machine status]: https://github.com/psu-epl/psu-epl.github.com/blob/master/_data/machines.yml
