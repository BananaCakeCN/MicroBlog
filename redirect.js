if(self == top){
    window.location.href = '/?page=' + window.location.pathname.split('/')[2].split('.')[0]
}
document.querySelector('head').innerHTML = '<link rel="stylesheet" type="text/css" href="https://bananacake.top/css/index.css">'
