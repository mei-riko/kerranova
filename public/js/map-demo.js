// https://yandex.ru/dev/maps/jsbox/2.1/object_manager/

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('mapStore', {
            center: [55.76, 37.64],
            zoom: 3
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32,
            clusterDisableClickZoom: true
        });

    // Чтобы задать опции одиночным объектам и кластерам,
    // обратимся к дочерним коллекциям ObjectManager.
    objectManager.objects.options.set('preset', 'islands#blackDotIcon');
    objectManager.clusters.options.set('preset', 'islands#blackClusterIcons');
    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: "js/data.json"
    }).done(function(data) {
        objectManager.removeAll();
        objectManager.add(filtered(data));
    });

    function filtered(dataJson){
        filteredData=[];
        let index = 0;
        // return dataJson;
        for (var i = dataJson.features.length - 1; i >= 0; i--) {
            // console.log( dataJson.features.length );
            if ( dataJson.features[i]["options"] != undefined) {
                // console.log( "URL City: " + mapCity + "; Option City: " + dataJson.features[i]["options"]["city"] );
                // console.log( "URL Type: " + mapType + "; Option Type: " + dataJson.features[i]["options"]["type"] );

                if( mapType == undefined 
                    && mapCity != "" && dataJson.features[i]["options"]["city"] === mapCity 
                  ){
                    filteredData[index]=dataJson.features[i];
                    index=index+1;
                }
                if( mapCity == undefined && mapType != "" 
                    && dataJson.features[i]["options"]["type"] === mapType
                  ){
                    filteredData[index]=dataJson.features[i];
                    index=index+1;
                }
                if( mapCity != "" 
                    && mapType != "" 
                    && dataJson.features[i]["options"]["type"] === mapType
                    && dataJson.features[i]["options"]["city"] === mapCity
                  ){
                    filteredData[index]=dataJson.features[i];
                    index=index+1;
                }
            }
        };
        if( filteredData.length > 0 ){
            // Добавляем активный класс быстрой ссылке, если фильтр сработал
            $("#mapFilter a.label[data-city=" + mapCity + "]").addClass("label--active");
            // Показывать выбранные фильтры
            if( mapCity != ""){
                $(".input.input_select-product#city option[value=" + mapCity + "]").prop('selected', 'selected');
            }

            if( mapType.includes("rm") ){ $('.checkbox .checkbox__input[value=rm]').prop('checked', true); }
            if( mapType.includes("om") ){ $('.checkbox .checkbox__input[value=om]').prop('checked', true); }
            if( mapType.includes("d")) { $('.checkbox .checkbox__input[value=d]').prop('checked', true); }

            return filteredData;
        } else{
            return dataJson;
        }
    }
}

// Cоздаем переменные
var url = window.location.search;
var filter, mapCity, mapType;

if( url != "") {
    // Разбираем адрес на части
    filter = url.split('&');
    $.each(filter,function(index,value){
        // Город
        if( value.indexOf('mapCity') != "-1"){
            mapCity = value.split("=")[1].match(/([^&]+)/)[0];
            // console.log( mapCity );
        }
        // Тип магазина
        if( value.indexOf('mapType') != "-1"){
            mapType = value.split("=")[1].match(/([^&]+)/)[0];
            // console.log( mapType );
        }
    });
}

// Применить фильтры
$("#filterBtn").on("click", function(e){
    e.preventDefault();
    let type = '';
    let city;
    let url = '';

    city = $(".input.input_select-product#city").val();
    $('.checkbox .checkbox__input[name="filter"]:checked').each(function() { type = type + this.value; });

    if( city != null && type != ""){ url= "?mapCity=" + city + "&mapType=" + type; }
    if( city != null && type == ""){ url= "?mapCity=" + city; }
    if( city == null && type != ""){ url= "?mapType=" + type; }

    if( url != ""){
        window.location.href = location.origin + location.pathname + url;
    }else{
        alert( "Выберите параметры фильтрации" );
    }
});
