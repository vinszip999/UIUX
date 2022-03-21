/* playlist_store.js
 * 
 * 재생목록의 항목을 저장하고 가져오는 사전준비 코드
 */

function save(item) {
	var playlistArray = getStoreArray("playlist");
	playlistArray.push(item);
	localStorage.setItem("playlist", JSON.stringify(playlistArray));
}

function loadPlaylist() {
	var playlistArray = getSavedSongs();
	var ul = document.getElementById("playlist");
	if (playlistArray != null) {
		for (var i = 0; i < playlistArray.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = playlistArray[i];
			ul.appendChild(li);
		}
	}
}

function getSavedSongs() {
	return getStoreArray("playlist");
}

function getStoreArray(key) {
	var playlistArray = localStorage.getItem(key);
	if (playlistArray == null || playlistArray == "") {
		playlistArray = new Array();
	}
	else {
		playlistArray = JSON.parse(playlistArray); /*저장할 때는 문자열, 가져올 때는 객채*/
	}
	return playlistArray;
}

function handleButtonClick(e){
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;

	if(songName == ""){
		alert("곡을 입력하세요");
	}else{
		var li = document.createElement("li");
		li.innerHTML = songName;
		var ul = document.getElementById("playlist");
		ul.appendChild(li);
		save(songName);
	}
}