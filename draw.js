var id = "";

window.onload = init;

function init(){
	//alert("The page has been loaded!!");
	document.getElementsByTagName("table")[0].addEventListener("click", getTarget);
	var canvas = document.getElementById("drawingCanvas");	
	canvas.onclick = function(){draw(canvas, event)};
	canvas.ondrag = function(){drawLine(canvas, event)};
}

function draw(canvas, event){
	//alert("canvas has been clicked");	
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
	var element = document.getElementById(id);
	var color = getComputedStyle(element).backgroundColor;
	var rect = canvas.getBoundingClientRect();
	var x = event.clientX - rect.x;
	var y = event.clientY - rect.y;	
	
	var context = canvas.getContext("2d");
	context.fillStyle = color;
	context.fillRect(x, y, 5, 5);
}

function getTarget(){	
	id = event.target.id;
}