const head = document.getElementsByTagName('head')[0];
const style = document.createElement('link');
style.href = 'css/cray-css-minimize.css';
style.type = 'text/css';
style.rel = 'stylesheet';
head.append(style);

let Cray_Fonts = undefined;
let Cray_Fonts_Loads = undefined;

require(['js/fonts/index_minimize'], function(dependency) {
    Cray_Fonts = dependency;
    Cray_Fonts_Loads = dependency();
});

setTimeout(() => {
    Cray_Fonts_Loads;
}, 1000);
