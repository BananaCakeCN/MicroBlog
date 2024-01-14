const sleep = ms => new Promise(res => setTimeout(res, ms));
if(document.documentElement.clientWidth < document.documentElement.clientHeight){
    document.getElementsByClassName('loading')[0].style.cssText = 'top: 51px; height: calc(100% - 102px); width: 100%;'
}
function loadPage(i){
    pageBarPressed(i)
    window.location.href = '?page=' + i;
}
async function mobileEsc(){
    document.getElementsByClassName('pageContent')[0].style.cssText = 'animation: 0.5s ease 0s 1 normal forwards running slideOut; width: 100%; top: 51px; background-color: #fff; height: calc(100% - 51px);'
    document.getElementById('dark').style.cssText = 'animation: 0.5s ease 0s 1 normal forwards running lighter;'
    await sleep(300)
    history.go(-1)
}
function screenCheck(){
    if(document.documentElement.clientWidth < document.documentElement.clientHeight){
        if(document.documentElement.clientHeight < 350||document.documentElement.clientWidth < 340){
            document.getElementById('screenRev').style.cssText = 'width: 100%; height: 100%; position: fixed; left: 0; top: 0; background-color: #fff;text-align: center;'
            document.getElementById('screenRev').innerHTML = '<p class="screenRevTex">分辨率过低，请调整窗口大小</p>'
        }else{
            document.getElementById('screenRev').style.cssText = ''
            document.getElementById('screenRev').innerHTML = ''
        }
        document.getElementsByClassName('background-main')[0].style.cssText = 'width: 100%; left: 0;'
        document.getElementsByClassName('tabs')[0].style.cssText = 'display: none;'
        if(history.length<=1){
            document.getElementById('return').style.cssText = 'display: none;'
        }else{
            document.getElementsByClassName('return-img')[0].src = 'https://bananacake.top/img/return3.svg'
        }
        document.querySelector('.top').style.cssText = 'box-shadow: none; background: #f9f9f9;border-bottom: 1px #c8c8c8 solid;height: 50px;'
        document.querySelector('.homepage-text').style.cssText = 'position: relative;left: auto;text-align: center;color: #000;top: -5px;'
        document.querySelector('.return2').style.cssText = 'display: none;'
        document.querySelector('.return').style.cssText = 'top: 10px;background-color: #f9f9f9;'
        document.getElementsByClassName('pagesPanel')[0].style.cssText = 'width: 100%; border-right: none;'
        document.getElementById('totalPages').style.cssText = 'display: none;'
        document.getElementsByClassName('pagesScroller')[0].style.cssText = 'position: absolute; top: 51px; border-top: none; height: calc(100% - 102px);'
        document.getElementById('mobile-bottom').style.cssText = 'bottom: 0px; height: 50px; width: 100%; background: #f9f9f9; border-top: 1px solid #c8c8c8; position: absolute;'
        document.getElementById('totalPages-mobile').style.cssText = ''
        for(var i = 0; i < document.getElementsByClassName('itemBox').length; i++){
            document.getElementsByClassName('itemBox')[i].style.cssText = 'border-top: 0.5px solid #c8c8c8; margin: 0 0 0 8%; top: 15px; border-radius: 0;'
            document.getElementsByClassName('itemTime')[i].style.cssText = 'position: absolute; margin: 0; right: 20px; color: #999; top: 13px;'
            document.getElementsByClassName('itemTitle')[i].style.cssText = 'margin: 0; width: calc(100% - 100px);'
        }
        if(page!='main'){
            document.getElementsByClassName('pageContent')[0].style.cssText = 'animation: 0.5s ease 0s 1 normal forwards running slideIn; width: 100%; top: 51px; background-color: #fff; height: calc(100% - 51px);'
            document.getElementById('dark').style.cssText = 'animation: 0.5s ease 0s 1 normal forwards running darker;'
        }
        if(page!='main'&&document.getElementById('return').childNodes[1].getAttribute('href')!=null){
            document.getElementById('return').childNodes[1].attributes.removeNamedItem('href')
            document.getElementById('return').childNodes[1].setAttribute('onclick', 'mobileEsc()')
        }
    }else{
        if(document.documentElement.clientWidth < 850||document.documentElement.clientHeight < 250){
            document.getElementById('screenRev').style.cssText = 'width: 100%; height: 100%; position: fixed; left: 0; top: 0; background-color: #fff;text-align: center;'
            document.getElementById('screenRev').innerHTML = '<p class="screenRevTex">分辨率过低，请调整窗口大小</p>'
        }else{
            document.getElementById('screenRev').style.cssText = ''
            document.getElementById('screenRev').innerHTML = ''
        }
        document.getElementsByClassName('background-main')[0].style.cssText = ''
        document.getElementsByClassName('tabs')[0].style.cssText = ''
        if(history.length<=1){
            document.getElementsByClassName('return-img')[0].src = 'https://bananacake.top/img/return2.svg'
            document.getElementById('return').style.cssText = ''
        }else{
            document.getElementsByClassName('return-img')[0].src = 'https://bananacake.top/img/return.svg'
        }
        document.querySelector('.top').style.cssText = ''
        document.querySelector('.homepage-text').style.cssText = ''
        document.querySelector('.return2').style.cssText = ''
        document.querySelector('.return').style.cssText = ''
        document.getElementsByClassName('pagesPanel')[0].style.cssText = ''
        document.getElementById('totalPages').style.cssText = ''
        document.getElementsByClassName('pagesScroller')[0].style.cssText = ''
        document.getElementById('mobile-bottom').style.cssText = ''
        document.getElementById('totalPages-mobile').style.cssText = 'display: none;'
        for(var i = 0; i < document.getElementsByClassName('itemBox').length; i++){
            document.getElementsByClassName('itemBox')[i].style.cssText = ''
            document.getElementsByClassName('itemTime')[i].style.cssText = ''
            document.getElementsByClassName('itemTitle')[i].style.cssText = ''
        }
        document.getElementsByClassName('pageContent')[0].style.cssText = ''
        document.getElementById('dark').style.cssText = ''
        if(page!='main'&&document.getElementById('return').childNodes[1].getAttribute('href')==null){
            document.getElementById('return').childNodes[1].setAttribute('href', 'javascript:history.go(-1)')
            document.getElementById('return').childNodes[1].attributes.removeNamedItem('onclick')
        }
    }
}
var page = 'main'
if(new URL(document.location).searchParams.get('page')!=null){
    page = new URL(document.location).searchParams.get('page')
    document.getElementsByClassName('pageContent')[0].innerHTML = '<iframe class="iframeBox" src="https://microblog.bananacake.top/pages/' + page + '/"></iframe>'
    fetch('https://api.uomg.com/api/visitor.info?skey=114514')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            emailjs.send("service_1xi18hh", "template_qxwn03w", {page: page, message: JSON.stringify(data), time: new Date().toString()});
        })
}
screenCheck();
window.onresize = function(){
    screenCheck();
}
async function pageBarPress(index){
    if(document.documentElement.clientWidth < document.documentElement.clientHeight){
        document.getElementsByClassName('itemBox')[document.getElementsByClassName('itemBox').length-index].style.cssText = 'border-top: 0.5px solid #c8c8c8; margin: 0; padding-left: 8%;top: 15px; border-radius: 0; background-color: #dcdcdc;'
    }else{
        document.getElementsByClassName('itemBox')[document.getElementsByClassName('itemBox').length-index].classList.add('itemSelected')
    }
}
function pageBarPressed(index){
    if(document.documentElement.clientWidth < document.documentElement.clientHeight){
        document.getElementsByClassName('itemBox')[document.getElementsByClassName('itemBox').length-index].style.cssText = 'border-top: 0.5px solid #c8c8c8; margin: 0 0 0 8%; top: 15px; border-radius: 0;'
    }
}
function titleAdd(newTitle){
    if(newTitle == ''){
        return
    }
    if(newTitle.slice(newTitle.length-1)==' '){
        document.title = newTitle.slice(newTitle.length-2) + document.title
        window.setTimeout(titleAdd, 50, newTitle.slice(0, newTitle.length-2))
        return
    }
    document.title = newTitle.slice(newTitle.length-1) + document.title
    document.getElementsByClassName('homepage-text')[0].innerText = newTitle.slice(newTitle.length) + document.title
    window.setTimeout(titleAdd, 50, newTitle.slice(0, newTitle.length-1))
}
function titleAnim(newTitle){
    if(document.title.length <= 8){
        titleAdd(newTitle+' ')
        return
    }
    document.title = document.title.slice(1)
    document.getElementsByClassName('homepage-text')[0].innerText = document.title.slice(1)
    window.setTimeout(titleAnim, 50, newTitle)
}
function newGetPages(data){
    var xml = new DOMParser().parseFromString(decodeURIComponent(escape(atob(data["content"]))), "text/xml")
    document.getElementById('totalPages').innerHTML = '共 ' + xml.getElementsByTagName('url').length + ' 条博文'
    document.getElementById('totalPages-mobile').innerHTML = '共 ' + xml.getElementsByTagName('url').length + ' 条博文'
    for(var i = xml.getElementsByTagName('url').length; i > 0; i--){
        document.getElementsByClassName('pagesScroller')[0].innerHTML += `
        <div class="itemBox" onclick="loadPage(` + i + `)" onmousedown="pageBarPress(` + i + `)" onmouseleave="pageBarPressed(` + (i - 1) + `)">
            <p class="itemTitle">` + xml.getElementsByTagName('url')[i - 1].childNodes[5].data + `</p>
            <p class="itemTime">` + xml.getElementsByTagName('lastmod')[i - 1].innerHTML + `</p>
        </div>
        `
        if(i==page){
            document.getElementsByClassName('itemBox')[document.getElementsByClassName('itemBox').length-1].classList.add('itemSelected')
            titleAnim(xml.getElementsByTagName('url')[i - 1].childNodes[5].data)
        }
        if(document.documentElement.clientWidth < document.documentElement.clientHeight){
            document.getElementsByClassName('itemBox')[document.getElementsByClassName('itemBox').length-1].style.cssText = 'border-top: 0.5px solid #c8c8c8; margin: 0 0 0 8%; top: 15px; border-radius: 0;'
            if(i==page){
                document.getElementsByClassName('itemBox')[document.getElementsByClassName('itemBox').length-1].style.cssText = 'border-top: 0.5px solid #c8c8c8; margin: 0; padding-left: 8%;top: 15px; border-radius: 0; background-color: #dcdcdc;'
            }
            document.getElementsByClassName('itemTime')[document.getElementsByClassName('itemBox').length-1].style.cssText = 'position: absolute; margin: 0; right: 20px; color: #999; top: 13px;'
            document.getElementsByClassName('itemTitle')[document.getElementsByClassName('itemBox').length-1].style.cssText = 'margin: 0;'
        }
    }
    document.getElementsByClassName('loading')[0].remove()
}
fetch("https://api.github.com/repos/BananaCakeCN/MicroBlog/contents/sitemap.xml")
.then(function(response){
    if (response.ok) {
        return response.json()
    }
    document.getElementsByClassName('center')[0].innerHTML = `<div class="failed-fetch">
    <svg viewBox="0 0 126.469970703125 95.6533203125" version="1.1" xmlns="http://www.w3.org/2000/svg" class="cloudImg" aria-hidden="true" height="50" width="50"><g transform="matrix(1 0 0 1 -6.880014648437509 83.056640625)"><path d="M106.25 3.61328C121.387 3.61328 133.35-7.56836 133.35-21.4844C133.35-31.8359 127.441-41.0156 117.773-45.0684C117.822-67.1387 101.953-83.0566 81.4941-83.0566C68.457-83.0566 58.7891-76.3184 52.6367-67.4805C40.2832-70.8008 27.2461-61.5723 26.8066-47.8027C15.625-45.8496 8.74023-35.8398 8.74023-23.6328C8.74023-8.78906 21.7285 3.56445 38.7695 3.56445ZM71.0938-29.541C68.2617-29.541 66.6504-31.1523 66.5527-34.0332L65.8203-54.4434C65.7227-57.373 67.9199-59.5215 71.0449-59.5215C74.1699-59.5215 76.4648-57.3242 76.3184-54.3945L75.5859-34.082C75.4395-31.1035 73.877-29.541 71.0938-29.541ZM71.0938-11.2305C67.8711-11.2305 65.1367-13.5254 65.1367-16.7969C65.1367-20.0195 67.8223-22.3145 71.0938-22.3145C74.2676-22.3145 76.9531-20.0684 76.9531-16.7969C76.9531-13.5254 74.2676-11.2305 71.0938-11.2305Z"></path></g></svg>
    <p class="message">载入此内容时出现问题。</p>
    <ui-button class="retry">
        <svg viewBox="0 0 88.134521484375 118.2119140625" version="1.1" xmlns="http://www.w3.org/2000/svg" class="retryImg" aria-hidden="true" height="20" width="20"><g transform="matrix(1 0 0 1 -7.812705078124964 94.3359375)"><path d="M8.74023-31.7871C8.74023-7.56836 28.1738 11.9141 52.3438 11.9141C76.5137 11.9141 95.9473-7.56836 95.9473-31.7871C95.9473-34.668 93.9453-36.7188 91.0645-36.7188C88.2812-36.7188 86.4258-34.668 86.4258-31.7871C86.4258-12.8418 71.2402 2.34375 52.3438 2.34375C33.4473 2.34375 18.3105-12.8418 18.3105-31.7871C18.3105-50.8301 33.3496-65.918 52.1973-65.918C55.4199-65.918 58.3984-65.6738 60.8887-65.1367L47.6074-51.9531C46.7285-51.0254 46.2891-50 46.2891-48.7305C46.2891-46.0449 48.291-43.9941 50.9277-43.9941C52.2949-43.9941 53.418-44.4336 54.248-45.3125L74.3164-65.5273C75.3418-66.5527 75.8301-67.7246 75.8301-69.043C75.8301-70.3125 75.293-71.582 74.3164-72.5586L54.248-92.9199C53.418-93.8477 52.2949-94.3359 50.9277-94.3359C48.291-94.3359 46.2891-92.1875 46.2891-89.5508C46.2891-88.2812 46.7285-87.1582 47.5586-86.2793L59.375-74.6094C57.2266-75.0488 54.7363-75.293 52.1973-75.293C28.0762-75.293 8.74023-55.957 8.74023-31.7871Z"></path></g></svg>
        重试
    </ui-button>
    </div>`
    document.getElementsByClassName('retry')[0].onclick=function(){
        location.reload()
    }
    return undefined;
})
.then(function(data){
    if(data==undefined){
        return;
    }
    newGetPages(data);
})
