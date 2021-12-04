var catNames = ['Pushok','Marsik','mafik,pufik'];

var arrayCats = [cat,cat,cat];

for (var i = 0; i<random (1, 12); i++) {var cat = {
	name: catNames[random(0, catNames.lenght - 1)],
	color: 'orange',
	len: 30,
};
arrayCats.push(cat);
for (var i = 0; i < arrayCats.length; i++)
 { console.log(arrayCats[i]);
	arrayCats[i]
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
