window.onload = function() {
/*    var interval = setInterval(handleRefresh, 3000);*/
    handleRefresh();
}

function handleRefresh() {
    console.log("here");

    var url = "http://openapi.seoul.go.kr:8088/4a504a656d76696e3434684a626469/json/CardSubwayStatsNew/1/100/20220625/";
    $.getJSON(url, updateTraffic);



}
/*function updateTraffic(responseText) {
    var subwayDiv = document.getElementById("subway");
    var subways = JSON.parse(responseText);
    for (var i = 0; i < subways.length; i++) {
        var subway = subways[i];
        var div = document.createElement("div");
        div.setAttribute("class", "subwayItem");
        div.innerHTML = subway.USE_MON + " : " + subway.LINE_NUM + " : " + subway.SUB_STA_NM + " : "
                        + subway.SEVENTEEN_RIDE_NUM + " : " + subway.SEVENTEEN_ALIGHT_NUM;
        if (subwayDiv.childElementCount == 0) {
                subwayDiv.appendChild(div);
            } else {
                subwayDiv.insertBefore(div, subwayDiv.firstChild);
            }
    }
}*/

function updateTraffic(subwaypeople) {
    var subwayDiv = document.getElementById("subwaypeople");
    var traffic = subwaypeople.CardSubwayStatsNew.row;
    for(var i=0; i<traffic.length; i++){
        var div = document.createElement("div");
        div.setAttribute("class", "subwayItem");
        div.innerHTML = 
            " " + traffic[i].USE_DT + "일에 " + traffic[i].LINE_NUM + "에 " + traffic[i].SUB_STA_NM + "역에서 " + traffic[i].RIDE_PASGR_NUM + "명이 승차하고 " + traffic[i].ALIGHT_PASGR_NUM + "명이 내렸습니다. ";    
    
            subwayDiv.appendChild(div);
    }
 }