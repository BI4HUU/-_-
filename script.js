ws = new WebSocket("ws://localhost:8888/");
ws.onmessage = e => eval( e.data );

// console.log(e.data);

function s() {
	ws.send('OK1');
}
let blocks = '';
function none(Param) {
	var _b = document.querySelectorAll('.b');
	for (var i = 0; i < _b.length; ++i) {
		_b[i].style.display = 'none';
	}
	document.querySelector(`.${Param.id}`).style.display = 'flex';
	}

function createBlock(d) {
	d = JSON.parse(d)
	console.log(d.length);
	for (let i = 0; i < d.length; ++i) {
		blocks += `<div id='${d[i][1]}'>${d[i][0]}<div>`;
	}
	document.querySelector(`._1`).innerHTML = blocks;
	blocks = '';
}
