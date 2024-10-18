const tags=["html","base","head","link","meta","script","style","title","body","address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","hgroup","main","nav","section","search","blockquote","cite","dd","dt","dl","div","figure","figcaption","hr","li","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","code","data","time","dfn","em","i","kbd","mark","q","ruby","rp","rt","s","del","ins","samp","small","span","strong","sub","sup","u","var","wbr","area","map","audio","source","img","track","video","embed","iframe","object","picture","canvas","noscript","caption","col","colgroup","table","tbody","tr","td","tfoot","th","thead","button","datalist","option","fieldset","label","form","input","legend","meter","optgroup","select","output","progress","textarea","details","dialog","menu","summary","slot","template","svg","math"];let tagsList=[];const domTag=document.querySelector("#input"),domTags=document.querySelector("#list"),domRemaining=document.querySelector("#remain");function matchTag(e){e.preventDefault();let t=domTag.value.toLowerCase(),a=document.createElement("li");checkTags(t)&&(a.textContent=t,domTags.appendChild(a),domTag.value="",keepTags(t),keepScore()),domTag.focus()}function keepScore(){domRemaining.textContent=tags.length-tagsList.length}function keepTags(e){tagsList.push(e)}function checkTags(e){return tags.includes(e)&&!tagsList.includes(e)}document.querySelector("#remain").textContent=tags.length,document.querySelector("#form").addEventListener("submit",matchTag,!1);