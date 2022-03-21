/* playlist.js */

window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;

	loadPlaylist();
}

//추가1
function handleButtonClick(e) {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	//alert("Adding " + songName);
	if (songName == "") {
		alert("곡을 입력하세요.");
	}
	else {
		//alert("Adding " + songName);
		var li = document.createElement("li");
		//노래제목에 들어갈 새 <li>요소를 만듭니다.
		li.innerHTML = songName;
		var ul = document.getElementById("playlist");
		//id가 playlist인 ul이 새로 만든 <li>의 부모 요소입니다. ul.appendChild(li);
		// for Ready Bake
		save(songName);
	}
}


