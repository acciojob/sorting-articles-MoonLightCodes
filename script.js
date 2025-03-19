/* script.js */
const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Sorting the bands alphabetically, ignoring "a", "an", and "the"
bands.sort((a, b) => {
  const strip = band => band.replace(/^(a |an |the )/i, '').trim();
  return strip(a).localeCompare(strip(b));
});

// Populating the <ul> with sorted band names
const bandList = document.getElementById('band');
bands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  bandList.appendChild(li);
});
