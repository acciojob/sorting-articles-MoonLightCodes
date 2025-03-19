//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort((a,b)=>{
	let aa = a.replace(/^(a |an |the )/i, '').trim();
	let bb = b.replace(/^(a |an |the )/i, '').trim();
	return aa.localeCompare(bb);
});
let a = document.getElementById('band');
bands.forEach((e)=>{
	let b = document.createElement('li');
	b.classList.add('item');
	b.innerText = e;
	a.append(b);
});