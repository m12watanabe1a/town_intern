var toilets = new Array();
function mark(data){
    for(i=0;i<data.length;i++){
        if(data[i]["unisex"] == 0 && data[i]["universal"] == 0){ //normal toilet
            if (data[i]["female"] == 0){
                toilets[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(data[i]['latitude'], data[i]['longitude']),
                    map: map,
                    icon: {
                        fillColor: "#00afcc",                //塗り潰し色
                        fillOpacity: 0.3,                    //塗り潰し透過率
                        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW, //円を指定
                        scale: 8,                           //円のサイズ
                        strokeColor: "#FFFFFF",              //枠の色
                        strokeWeight: 3                   //枠の透過率
                    },
                });
            } else if (data[i]["male"] == 0){
                toilets[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(data[i]['latitude'], data[i]['longitude']),
                    map: map,
                    icon: {
                        fillColor: "#FF0000",                //塗り潰し色
                        fillOpacity: 0.3,                    //塗り潰し透過率
                        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW, //円を指定
                        scale: 8,                           //円のサイズ
                        strokeColor: "#eb6ea0",              //枠の色
                        strokeWeight: 3                    //枠の透過率
                    },
                });
            } else {
                toilets[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(data[i]['latitude'], data[i]['longitude']),
                    map: map,
                    icon: {
                        fillColor: "#75D701",                //塗り潰し色
                        fillOpacity: 0.3,                    //塗り潰し透過率
                        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW, //円を指定
                        scale: 8,                           //円のサイズ
                        strokeColor: "#FFFFFF",              //枠の色
                        strokeWeight: 3                  //枠の透過率
                    },
                });
            }
        } else {
            toilets[i] = new google.maps.Marker({
                position: new google.maps.LatLng(data[i]['latitude'], data[i]['longitude']),
                map: map,
                icon: {
                    fillColor: "#e97f02",                //塗り潰し色
                    fillOpacity: 0.7,                    //塗り潰し透過率
                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW, //円を指定
                    scale: 12,                           //円のサイズ
                    strokeColor: "#FFFFFF",              //枠の色
                    strokeWeight: 3                    //枠の透過率
                },
            });
        }
        var content= "<b>" + data[i]["facility_name"] + "</b>" + "<br>" + 
            "<table>" +
            "<tr>" +
            "<th scope=\"row\">男性用トイレ:</th>" +
            "<td>" + data[i]["male"] + "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope=\"row\">女性用トイレ:</th>" +
            "<td>" + data[i]["female"] + "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope=\"row\"><b>男女共用トイレ:</b></th>" +
            "<td>" + data[i]["unisex"] + "</td>" +
            "</tr>" +
            "<th scope=\"row\"><b>多目的トイレ:</b></th>" +
            "<td>" + data[i]["universal"] + "</td>" +
            "</tr>" +
            
            "</table>"
        dispInfo(toilets[i],content);
    }
}
