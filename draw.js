var id = "";

window.onload = init;

function init(){
	//alert("The page has been loaded!!");
	document.getElementsByTagName("table")[0].addEventListener("click", getTarget);
	var canvas = document.getElementById("drawingCanvas");	
	canvas.onclick = function(){draw(canvas, event)};
	canvas.ondrag = function(){dragging(canvas,event)};
	canvas.ondragstart = function(){dragStart(canvas,event)};
	canvas.ondragover = function(){allowDrop(canvas,event)};
	
}

function dragStart(canvas,event) {
	console.log("on drag start");
	event.dataTransfer.setData("Text", "");
	var element = document.getElementById(id);
	var color = getComputedStyle(element).backgroundColor;
	var rect = canvas.getBoundingClientRect();
	var x = event.clientX - rect.x;
	var y = event.clientY - rect.y;
	var context = canvas.getContext("2d");
	context.beginPath();
	context.arc(x, y, 3, 0, degreesToRadians(360), true);
	context.fillStyle = color;
	context.fill();
}

function degreesToRadians(degrees) {
	return (degrees * Math.PI)/180;
}

function dragging(canvas,event) {
	console.log("on drag");
	var element = document.getElementById(id);
	var color = getComputedStyle(element).backgroundColor;
	var rect = canvas.getBoundingClientRect();
	var x = event.clientX - rect.x;
	var y = event.clientY - rect.y;
	var context = canvas.getContext("2d");
	context.beginPath();
	context.arc(x, y, 3, 0, degreesToRadians(360), true);
	context.fillStyle = color;
	context.fill();
}

function allowDrop(canvas,event) {
	console.log("on drag over");
	var element = document.getElementById(id);
	var color = getComputedStyle(element).backgroundColor;
	var rect = canvas.getBoundingClientRect();
	var x = event.clientX - rect.x;
	var y = event.clientY - rect.y;
	var context = canvas.getContext("2d");
	context.beginPath();
	context.arc(x, y, 3, 0, degreesToRadians(360), true);
	context.fillStyle = color;
	context.fill();
}

function draw(canvas, event){
	console.log("click event occurred");
	if(id != ""){
		var element = document.getElementById(id);
		var color = getComputedStyle(element).backgroundColor;
		
		var rect = canvas.getBoundingClientRect();
		//alert(rect.left+","+rect.right+","+rect.top+","+rect.bottom);	
		//alert(rect.x+","+rect.y+","+rect.width+","+rect.height);
		//alert(event.clientX+","+event.clientY);
		var x = event.clientX - rect.x;
		var y = event.clientY - rect.y;	
		//alert(x+","+y);
		
		var context = canvas.getContext("2d");
		context.fillStyle = color;
		context.fillRect(x, y, 5, 5);
	}	
}

function drawLine(canvas, event){
	event.dataTransfer.setData("Text", "");
	console.log("drag event occurred");
	if(id!=""){
		var element = document.getElementById(id);
		var color = getComputedStyle(element).backgroundColor;
		var rect = canvas.getBoundingClientRect();
		var x = event.clientX - rect.x;
		var y = event.clientY - rect.y;	
	
		var context = canvas.getContext("2d");
		context.fillStyle = color;
		context.fillRect(x, y, 5, 5);
	}	
}

function getTarget(){	
	id = event.target.id;
}