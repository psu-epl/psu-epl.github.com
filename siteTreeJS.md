---
title: Site Tree Using JS
layout: doc
author: Joe Shields
date: 2019-11-14
---

<!-- 
This may be helpful later:
https://stackoverflow.com/questions/39092476/sharepoint-2013-build-a-site-tree-navigation-using-javascript 
--!>


<h1>the array using JS</h1>
<pre id="arr"></pre>

<h1>the site using JS</h1>
<pre id="site"></pre>

<h1>the pages using JS</h1>
<pre id="pages"></pre>

<h1>the testVar using JS</h1>
<pre id="testVar"></pre>

<script>
console.log('hello world')

var siteUrl = "{{site.url}}";

// read the site structure into a JSON object
var pages = [ 
{%for pagei in site.pages%}  { 
        title: "{{pagei.title}}" ,
        url: "{{pagei.url}}", 
        dir: "{{pagei.dir}}", 
        path: "{{pagei.path}}", 
        name: "{{pagei.name}}", 
        layout: "{{pagei.layout}}", 
        author: "{{pagei.author}}", 
        date: "{{pagei.date}}", 
        pageRole: "",
        parent: "",
        children: [],
        siblings: []
    }{% unless forloop.last %},{% endunless %}
{%endfor%}
];
console.log('here is the page list is it comes from Liquid:');
console.log(pages);


var testVar = {
	text: "example",
	num: 1
};



var npages = Object.keys(pages).length;
console.log('the size of the array is '+npages);
var indexPattern = /\/$/; // url ends with a slash
var rootPattern = /^\/$/; // url is a single slash (root index)
var leafParentPattern = /^\/.*\//; // a bunch of stuff with slashes on either end
var dirs = []; // used for splitting the files/directories in a path
var leafParentArr = ""

for (i=0; i < npages; i++) {
    // console.log('i is '+i+' and the page title is '+pages[i].title);
    if (rootPattern.test(pages[i].url)){
        pages[i].pageRole = "root";
    } else if (indexPattern.test(pages[i].url)){
        pages[i].pageRole = "index";
    } else {
        pages[i].pageRole = "leaf";
    }
    switch (pages[i].pageRole) {
    case "root":
        pages[i].parent = "/";
        break;
    case "index":
        dirs = pages[i].dir.split("/");
        dirs.pop(); // remove the last dir
        dirs.pop(); // remove the last dir
        pages[i].parent = dirs.join("/")
        break;
    case "leaf":
        console.log('page url '+ pages[i].url);
        //dirs = pages[i].dir.split("/");
        //dirs.pop(); // remove the last item
        //pages[i].parent = "/" + dirs.join("/")
        leafParentArr = leafParentPattern.exec(pages[i].url);
        if ( leafParentArr == null ){
            pages[i].parent = "/";
        } else {
            pages[i].parent = leafParentArr[0];
        }
        break;
    default:
        console.debug("There was an un-handled page role!");
    }
    if (! /\/$/.test(pages[i].parent)){ // if it doesn't end with a slash
        pages[i].parent = pages[i].parent + "/" // make it so
    }
}

document.getElementById("testVar").innerHTML = JSON.stringify(testVar, null, 4)
document.getElementById("pages").innerHTML = JSON.stringify(pages, null, 4)
</script>
