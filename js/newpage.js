function aboutme() {
    var aboutme = document.getElementById('aboutme');
    aboutme.innerHTML = '';
    let zag = document.getElementById('zag');
    zag.innerHTML = '<h1 id="zag">Давай познакомимся поближе, меня зовут Алексей</h1>'
}

function main() {
    var aboutme = document.getElementById('aboutme');
    let zag = document.getElementById('zag');
    let cc = document.getElementById('cc');

    zag.innerHTML = '<h1 id="zag">Сайт-портфолио начинающего frontend разработчика</h1>'
    aboutme.innerHTML = '';
    aboutme.innerHTML = '<div class="about">' +
        '<p> Привет. Я начинающий программист и меня зовут <b>Алексей Лёвин</b>.На данный момент я еще плохо разбираюсь в веб программировании, однако нисмотря ни на чтодвигаюсь по пути Junior Forntend разработчика.Что - ж, присаживайтесь поудобнее и наслаждайтесь путишествием по сайту. </p>' +
        '</br>' +
        '<hr>' +
        '</br>' +
        '<p><span>></span> В разделе <b>"Обо мне" </b>вы найдете всю необходимую информацию о том, какую школу, какойуниверситет какие курсы и т.д я прошел, а также узнаете мою биографию. </p>' +
        ' <p><span>></span> В разделе <b>"Контакты" </b>вы найдете всю необходимую информацию о том,как можно связаться со мной. </p>' +
        '</div>' +
        '<div id="console">' +
        `<span class="console"><b>Console for Jscript</b></span><br> <hr><span><b>Test Version</b></span>` +
        `<div id="code"></div></div>`
}