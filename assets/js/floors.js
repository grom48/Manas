$(document).ready(function(){
    $('img[usemap]').imageMapWrapper();
    $('img[usemap]').imageMapResize();
})
    function switchContent(obj) {
        obj = (!obj) ? 'sub1' : obj;
        var contentDivs = document.getElementsByTagName('div');
        for (i=0; i<contentDivs.length; i++) {
            if (contentDivs[i].id && contentDivs[i].id.indexOf('sub') !== -1) {
                contentDivs[i].className = 'hide';
            }
        }
        document.getElementById(obj).className = '';
    }
    function checkTab() {
        $('area').each(function() {
            $(this).click(function() {
                tab = $(this).attr('href').split('#');
                switchContent(tab[1]);
                $('.current').attr('class','');
                $(this).attr('class','current');
            });
        });
    }
    function checkLink() {
        $('a').each(function() {
            $(this).click(function() {
                tab = $(this).attr('href').split('#');
                switchContent(tab[1]);
                $('.current').attr('class','');
                $(this).attr('class','current');
            });
        });
    }
    window.onload = function() {
        checkTab();
        checkLink();
    };