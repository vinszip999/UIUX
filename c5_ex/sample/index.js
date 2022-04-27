let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.555946, lng: 126.972317 },
        zoom: 15,
    });
}

window.initMap = initMap;


// 서울역으로 위도, 경도 바꿔주기

// var ourCoords = {
// 	latitude : 37.555946,
// 	longitude : 126.972317
// }