This class dynamically loads the javascript code from localstorage.

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