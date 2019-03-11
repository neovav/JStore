This class dynamically loads the javascript code from localstorage. 
My class allows to lower loading from the server, having reduced the overhead costs connected with network. It keeps track of relevance of javascript of the code in a browser cache more flexibly. Actually it is the operated browser cache, with more intellectual approach. Allowing to solve problems on the high-loaded websites connected both with a set of simultaneous connections, and with availability of the code on third-party servers.

Usage:
1. Loading of this class
<script type="application/javascript" src="JStore.class.js"></script>

2. Check and initialization of a class
if(typeof(window['jstore'])!='object' || window['jstore']===null)
     window['jstore'] = new JStore();
     
3. Loading of the specified code javascript
window['jstore'].load(name, md5, url);

name - name of the specified javascript code
md5 - md5 hash of the specified javascript code
url - URL of location of the javascript source code