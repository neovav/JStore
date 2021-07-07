/**
 * Class for save data to localstorage
 */
let JStore = function() {
    const list = {}
    const parent = this

    function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}

    function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}

    function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}

    function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}

    function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}

    function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}

    function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}

    function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}

    function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}

    function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}

    function bit_rol(d,_){return d<<_|d>>>32-_}

     /**
      * Get md5 from javascript code
      *
      * @param {string} d       javascript code
      */
    this.md5 = function(d) {
        result = M(V(Y(X(d),8*d.length)))
        return result.toLowerCase()
    }

     /**
      * Encode javasript to Base64
      *
      * @param {string} str      javascript code
      *
      * @return {string}
      */
     this.enc = function(str) {
         return window.btoa(unescape(encodeURIComponent(str)))
     }

     /**
      * Decode javasript from Base64
      *
      * @param {string} str       javascript code
      */
     this.dec = function(str) {
         return decodeURIComponent(escape(window.atob(str)))
     }

     /**
      * Check is exist in the LocalStorage
      *
      * @return boolean
      */
     this.isStorage = function() {
         let ret = false
         try {
             ret = 'localStorage' in window && window['localStorage'] !== null
         } catch(e) {
             console.log(e)
         }
         return ret
     }

     /**
      *  Run javascript code
      *
      *  @param {string} txt
      */
     let runJS = function (txt) {
         let dom = document.createElement("script")
          dom.text = txt
          dom.type="text/javascript"
          document.getElementsByTagName("head")[0].appendChild(dom)
      }

     /**
      *  Add style
      *
      *  @param css
      */
     let addCSS = function (css) {
         let dom = document.createElement("style")
         dom.type = "text/css"
         if (dom.styleSheet) {
             dom.styleSheet.cssText = css
         } else {
             dom.appendChild(document.createTextNode(css))
         }
         document.getElementsByTagName("head")[0].appendChild(dom)
     }

     /**
      *  Add html
      *
      *  @param html
      *  @param css
      */
     let addHtml = function (html, css = 'body') {
          let tag = document.querySelector(css)
          if (typeof tag === 'object' && tag !== null) {
              tag.innerHTML = html
          }
     }

     /**
      * Ajax query to remote server
      *
      * @param {string} url         URL - address for web data
      * @param {object} options     Options for XMLHttpRequest
      */
     this.ajax = function (url, options = {}) {
         if (typeof options !== "object" || options === null) {
             options = {}
         }

         const method = (options.hasOwnProperty('method')) ? options.method : 'GET'
         const asinc = (options.hasOwnProperty('asinc')) ? options.asinc : true
         const user = (options.hasOwnProperty('user') && typeof options.password === 'string') ? options.user : null
         const password = (options.hasOwnProperty('password') && typeof options.password === 'string') ? options.password : null
         const headers = (options.hasOwnProperty('headers')) ? options.headers : {}
         const body = (options.hasOwnProperty('body')) ? options.body : null
         const success = (options.hasOwnProperty('success')) ? options.success : null
         const error = (options.hasOwnProperty('error')) ? options.error : null

         let vajax = false

         try {
             vajax = new XMLHttpRequest()
         } catch (e) {
             try {
                 vajax = new ActiveXObject("Msxml2.XMLHTTP")
             } catch (e) {
                 vajax = new ActiveXObject("Microsoft.XMLHTTP")
             }
         }

         if (typeof vajax !== 'object' || vajax === null) {
             throw 'Our browser is not support XMLHttpRequest'
         }

         vajax.onreadystatechange  = function () {
             if (vajax.readyState !== 4) {
                 return null
             }
             if (vajax.status < 200 || vajax.status >= 300) {
                 if (typeof error === 'function') {
                     error(vajax)
                 } else {
                     throw vajax.responseText
                 }
             } else if (typeof success === 'function') {
                 success(vajax.responseText)
             }
         }

         vajax.open(method, url, asinc, user, password)

         const keysHeader = Object.keys(headers)
         const lenKeysHeaders = keysHeader.length
         for (let i = 0; i < lenKeysHeaders; i += 1) {
             const key = keysHeader[i]
             const value = headers[key]
             vajax.setRequestHeader(key, value)
         }
         if ( typeof body === 'object' && body !== null) {
             vajax.send(body)
         } else {
             vajax.send()
         }

         return true;
     }

     /**
      *  Get function for inject data in site page
      *
      *  @param {string} type
      */
     let getFunc = function (type) {
         let ret = false
         switch (type) {
             case 'js':
                 ret = function (txt) {
                     list[type][name] = true
                     return runJS(txt)
                 }
                 break

               case 'css':
                   ret = function (txt) {
                       list[type][name] = true
                       return addCSS(txt)
                   }
                   break

               case 'html':
                   ret = function (txt, css) {
                       list[type][name] = true
                       return addHtml(txt, css)
                   }
                   break

               default:
                   throw 'Error type source'
         }
         return ret
     }

     /**
      *  Get function for inject data in site page
      *
      *  @param name            name variable
      *  @param type            type the data
      *  @param md5             md5 hash the data
      *  @param url             href of source data
      *  @param is_store
      *  @param post            post data in ajax request
      *  @param asinc           type request
      *  @param tag
      *
      *  (name, type, md5, url, is_store, asinc, tag)
      */
     let getData = function(name, type, md5, url, is_store, post, asinc, tag) {
          let succ = function (str) {
               let code_md5 = parent.md5(str)
console.log(url+': '+code_md5)
               if (code_md5 !== md5) {
                   throw new Error('Error load code')
               }

               let func = getFunc(type, tag)
               func(str, tag)
               if (is_store) {
                   let code = parent.enc(str);
                   if (typeof(code) === 'string' && code !== '') {
                       localStorage.setItem(name, code)
                   }
               }
          }
          
          return parent.ajax(url, {success: succ, body: post, asinc: asinc, headers: {'Content-type': 'text/plain'}})
     }


     /**
      * Load data from localstorage or remote server
      *
      * @param obj          Object with params for inject data
      *
      * @throws
      */
     this.load = function (obj) {
         if (typeof(obj) !== 'object' || obj === null) {
             throw 'Param isnt object'
         }

         let ret = false
         let is_store = this.isStorage()

         for (let i in obj) {
             let data = obj[i]
             let res = false
             if (typeof(data) === 'object' && data !== null &&
                 typeof(data['name']) !== 'undefined' && typeof(data['type']) !== 'undefined' &&
                 typeof(data['md5']) !== 'undefined' && typeof(data['url']) !== 'undefined') {

                 let type = data['type']
                 if(type !== 'js' && type !== 'css' && type !== 'html') {
                     throw 'Error type source'
                 }

                 let name = data['name']
                 let md5 = data['md5']
                 let url = data['url']
                 let post = null
                 let tag = null
                 if (typeof(data['tag']) !== 'undefined') {
                     tag = data['tag']
                 }
                 if (typeof(data['post']) !== 'undefined') {
                     post = data['post']
                 }
                 let asinc = false
                 if (typeof(data['asinc']) !== 'undefined') {
                     asinc = data['asinc']
                 }

                 if (!list.hasOwnProperty(type)) {
                     list[type] = {}
                 }
                 if (!list[type].hasOwnProperty(name) || type === 'html') {
                     if (is_store) {
                         try {
                             let str = localStorage.getItem(name);
                             if (str!==null && str!=='') {
                                 let code = parent.dec(str)
                                 if (typeof(code) === 'string' && code!==''
                                     && parent.md5(code) === md5) {
                                     let func = getFunc(type)
                                     res = true
                                     func(code, tag)
                                }
                             }
                         } catch (e) {
                             console.log(e)
                         }
                     }

                     if (typeof(url) === 'string' && url !== '' && !res) {
                         res = getData(name, type, md5, url, is_store, post, asinc, tag)
                     }
                 } else {
                     res = true
                 }
             }
             if (!ret && res) {
                 ret = res
             }
         }
         return ret
     }
}