if(self == top || window.opener == null){
    window.location.href = '/?page=' + window.location.pathname.split('/')[2].split('.')[0]
}
document.head.innerHTML = '<link rel="stylesheet" type="text/css" href="https://bananacake.top/css/index.css">'
