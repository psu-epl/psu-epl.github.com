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

# About this Site
This site is hosted through [GitHub Pages][GH Pages] using [Jekyll], 
to make things easier for managers to edit than HTML and cleaner than a GitHub wiki.
All of the actual content is in [Markdown] files (`.md` or sometimes `.markdown`) on the site's GitHub [repo].

## Useful Links
- [repo]
- [Jekyll] website
- [Ruby] website
- [Markdown] syntax
- [YAML] website
- [machine status] file
- [GH Pages] website
- [LESS] website
- [Liquid] website
- [supported plugins] on GH Pages

# Content Changes
Managers are able to make changes to this site [through the GitHub repo.][repo]
You can edit these relatively easily through a browser by clicking the "Edit this Page" link [at the bottom of a page](#footer).
However, it's preferred that big changes (particularly multi-file changes) be done locally through Git (outside the scope of this guide).
Check out the [Markdown] syntax, if it's not familiar to you.

Non-managers can still contribute through issues and pull requests.

## Marking Machines as Working or Broken
The main page features [a list of which machines are currently working]({{ site.url }}/#lab-equipment),
so users can tell at a glance if they'll be able to use what they need.
If a machine isn't ready to be used by students, it's highlighted in red.
To change the status of a machine, go to [_data/machines.yml][machine status].
Then, set the `up: ` field to `true` if the machine is working.
I'm sure you can figure out what to do if it isn't working.

## Style
Documents should be structured hierarchically with descriptive headings.
Headings should be done with pound signs, rather than dashes, to avoid ambiguity.
The contents of each heading should fit on a single screen (less than 40 lines), not counting images.

All files must contain a [YAML] header, which you should be able to figure out by looking at an existing page..
All YAML headers must contain a title and a layout (if in doubt, use `doc`). 
Level 1 headings are not titles.

Media for any documents should go in the `doc/images` directory or in an `img` directory next to the document.
Supplementary documents, like a manufacturer manual, should go in the same directory as the associated document.

Relative links should be used whenever possible. 
For example, `![](images/kitten.jpg)` should be used instead of `{{ site.url }}/images/kitten.jpg`.
Absolute links should only be used when linking outside of {{ site.url }}.
For distant relative links, you may find it convenient to take advantage of Jekyll:
```
{% raw %}{{ site.url }}/some/weird/subdirectories{% endraw %}
```

While you *can* put HTML directly in Markdown files, this is strongly discouraged.
In most cases, HTML is unnecessary and badly hurts readability and maintainability.

### SOPs
Below is a template for how the Markdown of an SOP should [look](SOPtemplate.html). Pictures and concrete examples are always preferred.

```markdown
{% include SOPtemplate.md %}
```

## Organization
Every directory gets an `index.md`. 
It's okay if that's the only file in that directory, but it must link to all the other files in that directory.
(That includes the subdirectories.)
`index.md` is also what other files should generally point to. 
To link from `doc/policies/foo.md` to `doc/equip/misc/index.md`, you'd use a link like this:
`[Click here to go to misc.](../equip/misc)`

# Structural Changes
GitHub Pages automatically builds the Markdown content into HTML pages using [Jekyll], a [Ruby] library.
It's possible to make changes to the layout, configuration, and theme files through the GitHub website,
however this is strongly discouraged. 
Instead, you should make and preview changes locally before publishing them to the website. 
This helps us not have a broken website.
Small changes to Markdown files are still okay though.

## Previewing your Changes Locally
It's assumed that you already know how to use `git` to clone and make changes to the website's repo.
For small changes, you can probably get away with not learning much about Jekyll.
For larger changes, you'll need to find your own help. The [Jekyll] website is pretty good for this.
A look at [Liquid], upon which Jekyll is based, may also be very helpful.

### Installing Jekyll
You'll need to install [Ruby] to run Jekyll. 
Within Ruby, you'll need the `bundler` and `ruby-dev` libraries before you install `jekyll`.
If you're using the `apt` package manager, this can be done very easily by running these commands:

```
sudo apt install ruby
sudo gem install bundler ruby-dev jekyll
```

`gem` is the package manager for Ruby libraries.

#### Jekyll Plugins
If there are any plugins in use, you'll need to install those too. 
You can check the `_config.yml` file for a list of enabled plugins.
Note that if you're wanting to enable more plugins, 
[only those used by GitHub Pages][supported plugins] will work in the published site.

### Running Jekyll
The necessary commands are already set up in the Makefile, 
so you can simply run `make preview` and visit the address it tells you in a browser.
This is usually `localhost:4000`. (Literally paste `localhost:4000` into your address bar.) 
While this command is running, any file you change will be automatically rebuilt in the site.

It can be very helpful to keep the terminal running this command visible, since it will call out any errors
or instances of files that couldn't be found, such as broken image links.
Remember to refresh the page in your browser to see these changes.
If you don't have `make`, running `jekyll serve --watch` is equivalent.

Note that the Markdown, YAML, CSS, et cetera files are the *source* files for the site. 
Jekyll renders them and puts the results in `_site`.
Thus, any changes you make to files in `_site` will get wiped out when they're rendered again.
You should __*never*__ commit anything in the `_site` directory! 
(It's ignored by the `.gitignore`, so this should be hard to do by accident anyway.)
GitHub Pages will automatically re-render the site when changes are pushed to the `master` branch.

## Styling 
The site's CSS is built via [LESS CSS][LESS] from `assets/less/style.less`.
The resulting CSS is already in the repo, so you don't need to worry about it unless you're changing it.
If you do need to change it, you'll need the `less` gem installed:

```
sudo gem install less
```

This should give you access to the `lessc` command.

You'll also need to get the submodule that contains the theme that serves as a basis for the styling:

```
git submodule init
git submodule update
```

This will clone the repo that provides that styling.

Run `make theme` or `make themedev` to build the CSS.
(`make theme` compresses the CSS by removing whitespace. Currently, it tries to use a deprecated option to `lessc`. There isn't much reason to update it going forward though.)

[repo]: https://github.com/psu-epl/psu-epl.github.com/
[Jekyll]: https://jekyllrb.com/
[Ruby]: https://www.ruby-lang.org/en/
[Markdown]: https://daringfireball.net/projects/markdown/syntax
[YAML]: http://yaml.org/
[machine status]: https://github.com/psu-epl/psu-epl.github.com/blob/master/_data/machines.yml
[GH Pages]: https://pages.github.com/
[LESS]: http://lesscss.org/
[Liquid]: https://shopify.github.io/liquid/
[supported plugins]: https://pages.github.com/versions/
