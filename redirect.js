if(self == top){
    window.location.href = '/?page=' + window.location.pathname.split('/')[2].split('.')[0]
}
document.head.innerHTML = '<link rel="stylesheet" type="text/css" href="https://bananacake.top/css/index.css">'
document.querySelectorAll('img').forEach(function(ele){ele.style.cssText="width: 100%;"})
console.log(document.querySelectorAll('img'))
