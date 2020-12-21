ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('mapStore', {
            center: [55.76, 37.64],
            behaviors: ['default', 'scrollZoom'],
            zoom: 5,
            controls: ['zoomControl',  'fullscreenControl', 'routeButtonControl'],
            type: "yandex#map"
            }, {
                yandexMapAutoSwitch: true
            }
        ),
        objectManager = new ymaps.ObjectManager({
            clusterize: true,
            gridSize: 32,
            clusterDisableClickZoom: true
        });

    objectManager.objects.options.set('preset', 'islands#blackDotIcon');
    objectManager.clusters.options.set('preset', 'islands#blackClusterIcons');
    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: "js/data.json"
    }).done(function(data) {
        objectManager.removeAll();
        objectManager.add(data);
    });

    $(".label#all").on("click", function(e){
        e.preventDefault();
        myMap.setCenter([55.76, 37.64], 5);
        $(".label.label--active").removeClass("label--active");
        $(this).addClass("label--active");
    });
    $(".label#msw").on("click", function(e){
        e.preventDefault();
        myMap.setCenter([55.691516,37.552732], 14);
        $(".label.label--active").removeClass("label--active");
        $(this).addClass("label--active");
    });
    $(".label#smr").on("click", function(e){
        e.preventDefault();
        myMap.setCenter( [53.220136,50.162366], 14 );
        $(".label.label--active").removeClass("label--active");
        $(this).addClass("label--active");
    });
}