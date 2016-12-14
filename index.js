/**
 * Created by admin on 2016/12/14.
 */
function setRem() {
    document.documentElement.style.fontSize = (document.documentElement.clientWidth > 750 ? 100 : document.documentElement.clientWidth * 100 / 750) + 'px';
}
function resetRem() {
    setRem();
    document.addEventListener('DOMContentLoaded', function() {
        setRem();
    });
    window.addEventListener('load', function() {
        setTimeout(setRem, 300);
    });
    window.addEventListener('resize', function() {
        setTimeout(setRem, 300);
    });
}
resetRem();