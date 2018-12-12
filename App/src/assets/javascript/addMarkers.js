var toilets = new Array();
function mark(data){
    for(i=0;i<data.length;i++){
        toilets[i] = new google.maps.Marker({
            position: new google.maps.LatLng(data[i]['latitude'], data[i]['longitude']),
            map: map
        });
        var content= "<b>" + data[i]["facility_name"] + "</b>" + "<br>" + 
            "<table>" +
            "<tr>" +
            "<th scope=\"row\">男性用トイレ:</th>" +
            "<td>" + data[i]["mens"] + "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope=\"row\">女性用トイレ:</th>" +
            "<td>" + data[i]["womens"] + "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope=\"row\"><b>男女共用トイレ:</b></th>" +
            "<td>" + data[i]["unisex"] + "</td>" +
            "</tr>" +
            "<th scope=\"row\"><b>多目的トイレ:</b></th>" +
            "<td>" + data[i]["disabled"] + "</td>" +
            "</tr>" +
            
            "</table>"
        dispInfo(toilets[i],content);
    }
}
