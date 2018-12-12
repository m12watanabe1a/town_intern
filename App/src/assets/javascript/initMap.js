var map;
var paket = [35.606166, 139.766084];
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 35.681382, lng: 139.735861}, //大井町を中心に設定
        mapTypeControl: false, //マップタイプ コントロール
        fullscreenControl: false, //全画面表示コントロール
        streetViewControl: false, //ストリートビュー コントロール
        zoomControl: false, //ズーム コントロール
    });

    setup_searchBox();
    setup();
  }