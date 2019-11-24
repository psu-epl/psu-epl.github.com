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
