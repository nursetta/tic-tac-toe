window.onload = start;
var boxes = document.getElementsByTagName("td");


function start(){
 showX(); 

}

function showX() {
var td = document.getElementById('sq1')
	for (i = 0; i < boxes.length; i++){
		boxes[i].addEventListener('click', makeX);
	}
}

function makeX() {
var td = document.getElementById('sq1');
	td.innerHTML = 'X';
}

/*	var td = document.getElementsByTagName('td');
		for (i = 0; i < td.length; i++)
		td[i].innerHTML = makeX;
} else if ('click' === false) {
	var td2 = document.getElementsByTagName('td');
		for (i = 0; i < td2.length; i++)
		td2[i].innerHTML = 'X';
}
}
/*function addXandOListener(){
  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].addEventListener("click", addXorO);
  }
}

