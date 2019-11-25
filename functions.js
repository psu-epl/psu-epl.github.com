---
---
// The empty YAML header allows the use of LIQUID.

useUrl = function(url, otherArgs, fxn) {
    // This is a wrapper for conveniently fetching the content of a URL.
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
        // Sadly, it's a bit of a thing to just wait for something to finish in JS.
        // So, everything that requires the page needs to be inside this function.
        fxn(this.response, otherArgs);
    }
    request.send();
}
useJson = function(url, otherArgs, fxn){
    // This is a wrapper for conveniently fetching the content of a JSON file at a URL.
    // This takes a url of some JSON data, 
    // some arguments to the function fxn, 
    // and a function that operates on the JSON data.
    // fxn must take the object created by the JSON and the otherArgs.
    jargs = {
        otherArgs: otherArgs,
        fxn: fxn
    };
    jfxn = function(response, jargs){
        jsonData = JSON.parse(response);
        jargs.fxn(jsonData, jargs.otherArgs)
    }
    useUrl(url, jargs, jfxn);
}

// ~~~~~ Functions for creating a site tree ~~~~~
// Definitions:
// "Index" pages are pages named "index.html" which represent a directory.
// "Leaf" pages are pages which are not an index page.
// "Child" pages are index pages which belong to a given index page.
// "Sibling" pages are leaf pages which share the same directory as a given index page.
// "Parent" pages are the index pages for whichever directory contains a given page.
// The "root" page is the index page for the root directory of the site.

// A distinction is made between siblings and children for easier displaying.
// A hierarchy is harder to read when leaves are at the bottom.

linkParents = function(pages){
    var indexPattern = /\/$/; // url ends with a slash
    var rootPattern = /^\/$/; // url is a single slash (root index)
    var leafParentPattern = /^\/.*\//; // a bunch of stuff with slashes on either end
    var dirs = []; // used for splitting the files/directories in a path
    var leafParentArr = []; // precursor to the parent of a leaf node; helps with an exception
    var rootIndex = null; // index of the root page

    // Loop over the pages to establish what kind of node they are and what their parent is.
    for (i=0; i < pages.length; i++) {
        // console.log('i is '+i+' and the page title is '+pages[i].title);
        if (rootPattern.test(pages[i].url)){ // the root index
            pages[i].pageRole = "root";
            pages[i].parent = "/";
            rootIndex = i; // record the index of the root page
        } else if (indexPattern.test(pages[i].url)){ // index pages
            pages[i].pageRole = "index";
            dirs = pages[i].dir.split("/");
            dirs.pop(); // remove empty item at the end of the list
            dirs.pop(); // remove the last dir
            pages[i].parent = dirs.join("/")
        } else { // leaf pages
            pages[i].pageRole = "leaf";
            // pattern-match to get the parent directory
            leafParentArr = leafParentPattern.exec(pages[i].url);
            if ( leafParentArr == null ){
                pages[i].parent = "/"; // exception for stuff in the root dir
            } else {
                pages[i].parent = leafParentArr[0];
            }
        }
        if (! /\/$/.test(pages[i].parent)){ // if it the parent doesn't end with a slash
            pages[i].parent = pages[i].parent + "/" // make it so
        }
    }
    return rootIndex;
}

linkChildren = function(pages){
    // First, link all the parents.
    var rootIndex = linkParents(pages);
    // loop through the pages to determine their children/siblings
    for (i=0; i < pages.length; i++) {
        // loop through the candidate children/siblings
        for (j=0; j < pages.length; j++) {
            if (pages[i].url == pages[j].parent){
                pages[j].parentInd = i;
                // if the j page is the child/sibling of the i page, 
                // record its index in the array of i's children/siblings
                switch (pages[j].pageRole) {
                    case "index":
                        pages[i].children.push(j);
                        break;
                    case "leaf":
                        pages[i].siblings.push(j);
                        break;
                    case "root":
                        break;
                    default:
                        console.debug("unexpected page role while creating child/sibling links");
                }
            }
        }
    }
    return rootIndex;
}

function getRelations(i, pages, depth = 0, maxdepth = pages.length){
    // From the flat array of pages with child/sibling relations, 
    // recursively generate a hierarcy of pages.

    // Initialize with the already-known information
    // console.log('depth is '+depth+' and max depth is '+maxdepth);
    var siteUrl = "{{site.url}}";
    var node = {
        ind:      i,
        title:    pages[i].title,
        href:     siteUrl + pages[i].url,
        depth:    depth,
        siblings: [],
        children: [],
        url:      pages[i].url, 
        dir:      pages[i].dir, 
        path:     pages[i].path, 
        name:     pages[i].name, 
        layout:   pages[i].layout, 
        author:   pages[i].author, 
        date:     pages[i].date, 
        pageRole: pages[i].pageRole, 
        parent:   pages[i].parent
    };
    if (depth > maxdepth){
        // We can't sensibly have more levels of recursion than there are pages.
        console.log('recursion limit of getRelations reached ('+depth+")");
        return node;
    }
    switch (pages[i].pageRole){
        case "root":
            // console.debug('root case');
        case "index":
            // console.debug('index case');
            // loop over the siblings for the current page
            for (j in pages[i].siblings){
                // add the hierarchy for this sibling to the sibling array
                node.siblings.push(getRelations(pages[i].siblings[j], pages, depth+1, maxdepth))
            }
            // loop over the children for the current page
            for (j in pages[i].children){
                // add the hierarchy for this child to the sibling array
                node.children.push(getRelations(pages[i].children[j], pages, depth+1, maxdepth))
            }
            break;
        case "leaf":
            // leaves do not contain any further hierarchy
            break;
        default:
            console.debug('unexpected role while creating relations object');
            console.debug('page number: ' + i);
            console.debug('page title: ' + pages[i].title);
    }
    return node;
}

function listFromTree(tree, listType = 'ul'){
    // recursively create an HTML list from a page tree hierarchy

    //list = "<"+listType+">\n";
    list = ""
    if (tree.title == ''){ // Untitled pages default to their source file name.
        title = pages[tree.ind].name
    } else {
        title = tree.title
    }
    // enter the current tree node as a hyperlinked item
    list += '<li><a href="'+tree.href+'">'+title+'</a>\n';

    // create a sublist for any further hierarchy
    list += '<'+listType+'>\n'
    for (i in tree.siblings){ // sublist of siblings
        list += listFromTree(tree.siblings[i], listType)
    }
    for (i in tree.children){ // sublist of children
        list += listFromTree(tree.children[i], listType)
    }

    // close the list item
    list += '</'+listType+'></li>\n'
    //list += "</"+listType+">"
    return list;
}

function preFromTree(tree, depthStr, pages_obj, isLast = true){
    // Create a text tree from a page tree hierarchy.
    // This assumes an equal-width typeface.
    // This is very similar to the `tree` command in Linux.
    // However, this groups leaves at the top, for readability.

    // tree is the hierarchy tree used to generate the text tree.
    // depthStr is a string that prepends all the lines at this hierarchy level.
    //          It visualizes "fly-over" parent structures.
    // pages_obj is the list of pages, but as an object to take advantage of pass-by-reference
    // isLast keeps track of whether this is the last page in sublist.

    var str = ""; // string for the current hierarchy level
    var depthChar = ""; // substring that visualizes the currenty hierarchy level
    var sublist = []; // concatenation of siblings and children
    var title = ""; // title of the current page
    var newDepthStr = ""; // the depthStr for the next lower hierarchy level
    var newIsLast = null; // whether the next line to write is is the last page in a directory
    var padChar = ""; // the substring used to pad after the depthStr

    if (isLast == true){
        padChar = "    ";
    } else { // we need to "fly-over" some grand-children
        padChar = "│   ";
    }

    if (tree.title == ''){ // Untitled pages default to their source file name.
        title = pages_obj.pages[tree.ind].name
    } else {
        title = tree.title
    }

    // determine the current depth char
    if (pages_obj.pages[tree.ind].pageRole == "root"){
        depthChar = "";
    } else if (isLast){
        depthChar = "└── "; // visually terminate this hierarchy level
    } else {
        depthChar = "├── ";
    }

    // write the string for this hierarchy level
    str += depthStr+depthChar+'<a href="'+tree.href+'">'+title+'</a>\n';

    // stuff for sub-hierarchies
    sublist = tree.siblings.concat(tree.children)
    newDepthStr = depthStr + padChar;
    if (sublist.length > 0) { // check that there are actually sub-hierarchies
        for (i in sublist) {
            // console.log('2 -- sublist length is: '+sublist.length);
            // console.log('3 -- i is: '+i);
            // console.log('3.1 -- tree.title is: '+tree.title);
            // console.log('5 -- sublist[i].title is: '+sublist[i].title);
            if (i == sublist.length-1) {
                newIsLast = true;
            } else {
                newIsLast = false;
            }
            // console.log('5.1 -- calling preForTree() on sublist[i].');
            // write the strings for the sub-hierarchies
            // console.log('0 -- tree.title is: '+tree.title);
            // console.log('siblings are: ');
            // console.log(tree.siblings);
            // console.log('children are: ');
            // console.log(tree.children);
            // console.log('sublist is: ');
            // console.log(sublist);
            // console.log('adding sublist item '+i+' to the preformatted text');
            str += preFromTree(sublist[i], newDepthStr, pages_obj, newIsLast);
        }
    }
    // console.log('6 -- tree.title is: '+tree.title);
    return str;
}

censorPages = function(pages, ignores = [ "{{ site.hide | join: '", "' }}" ], field = 'url'){
    console.log('pages to be ignored: '+ignores);
    censoredPages = [];
    for (i in pages) {
        page = pages[i];
        ignoreInds = ignores.indexOf(page[field]);
        if (ignoreInds == -1) {
            censoredPages.push(page);
        } else {
            console.log('censoring '+page.url);
        }
    }
    return censoredPages;
}
