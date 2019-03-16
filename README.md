This class dynamically load: javascript, css, html from localstorage. 
My class allows to lower loading from the server, having reduced the overhead costs connected with network. It keeps track of relevance javascript/css/html in a browser cache more flexibly. Actually it is the operated browser cache, with more intellectual approach. Allowing to solve problems on the high-loaded websites connected both with a set of simultaneous connections, and with availability of the code on third-party servers.

Usage:
1. Loading of this class

<script type="application/javascript" src="JStore.class.js"></script>


2. Check and initialization of a class

if(typeof(window['jstore'])!='object' || window['jstore']===null)
     window['jstore'] = new JStore();

     
3. Loading of the web data from remote resource

var obj = [
            {'name':'css:Style', 'type':'css', 'md5':'e1919eb2a7400f96b825a7c3f7cb1782', 'url':'style.css'},
            {'name':'css:jQuery', 'type':'css', 'md5':'bf051f24690699bc2665ef6e4d7487a7', 'url':'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css'},
            {'name':'js:jQuery', 'type':'js', 'md5':'4f252523d4af0b478c810c2547a63e19', 'url':'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'},
            {'name':'js:jQueryUI', 'type':'js', 'md5':'0a497d4661df7b82feee14332ce0bdaf', 'url':'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js'}
          ];
window['jstore'].load(obj);


name - name of the specified data
type - type data: js, css or html
md5 - md5 hash of the specified data
url - URL of location of the specified data

post - post data send to the remote server
tag - css property of the tag into which to insert html