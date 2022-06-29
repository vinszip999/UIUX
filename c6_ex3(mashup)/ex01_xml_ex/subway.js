window.onload = function () {
    handleRefresh();
}

function handleRefresh() {
    var url = "http://openapi.seoul.go.kr:8088/4a504a656d76696e3434684a626469/xml/CardSubwayStatsNew/1/100/20220625/";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            updateTraffic(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

function updateTraffic(xml) {
    var xmlDoc = xml.responseXML;
    var subwayDiv = document.getElementById("subwaypeople");
    traffic = xmlDoc.getElementsByTagName("row");
    for (var i = 0; i < traffic.length; i++) {
        var row = traffic[i];
        var div = document.createElement("div");
        div.setAttribute("class", "subwayItem");
        div.innerHTML = row.getElementsByTagName("USE_DT")[0].childNodes[0].nodeValue + "일에 "
            + row.getElementsByTagName("LINE_NUM")[0].childNodes[0].nodeValue + "에 "
            + row.getElementsByTagName("SUB_STA_NM")[0].childNodes[0].nodeValue + "역에서 "
            + row.getElementsByTagName("RIDE_PASGR_NUM")[0].childNodes[0].nodeValue + "명이 승차하고 "
            + row.getElementsByTagName("ALIGHT_PASGR_NUM")[0].childNodes[0].nodeValue + "명이 내렸습니다.";
        subwayDiv.appendChild(div);

    }
}