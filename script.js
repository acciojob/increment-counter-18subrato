let btn = document.getElementById('incrementBtn');
let p = document.getElementById('counter');
btn.addEventListener('click',()=>{
	alert(p.innerText);
	let para = Number(p.innerText);
	para = para + 1;
	p.innerText = String(para);
	
})