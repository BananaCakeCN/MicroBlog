if(self == top){
    window.location.href = '/?page=' + window.location.pathname.split('/')[2].split('.')[0]
}
document.head.innerHTML = `<link rel="stylesheet" type="text/css" href="https://bananacake.top/css/index.css">
<script type="text/javascript">
    (function(){
        emailjs.init("xj8nyEySYwVrb0Kxc");
    })();
</script>`
fetch('https://api.uomg.com/api/visitor.info?skey=114514')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        emailjs.send("service_1xi18hh", "template_qxwn03w", {page: window.location.search, message: data, time: new Date().toString()});
    })
