$( function() {
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
  
    // проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
    var popupSudo = getCookie("popupsudo");
    var $popupLink = $('[data-sumome-listbuilder-id="a9e230b6-c73e-47a2-89be-f20b86179b26"]');
    if ( popupSudo != "no" && $popupLink.length > 0) {
        setTimeout(function() {
            // записываем cookie
            document.cookie = "popupsudo=no; path=/; expires=1";
            // открываем модальное окно
            $popupLink[0].click();
        }, 20 * 1000);
    }
});