require('dotenv').config();
const { Client } = require('ps-client');
const Bot = new Client({
	username: 'NDOT Tours', // assumes this account is already registered
	password: process.env.envPASS, // Should be a string just in case PW includes special chars
	debug: true, 
	avatar: 'shauntal',
	rooms: ['ndot']
	});

// imports metagames
async function metagames(){
	const response = await fetch('https://raw.githubusercontent.com/Runoisch/NDOTbot/main/src/formats.json', {headers: {'Cache-Control': 'no-cache' }});
	return await response.json();
}


(async () => {
// setup for the setInverval loop
let date;
let rttiers = await metagames();
let first = rttiers[Math.floor(Math.random() * rttiers.length)]; // takes random tier from array
//rttiers.splice(rttiers.indexOf(first), 1); this line seems redundant but I will keep it just it case
console.log(first.value);
let second;
const inter = 3600000 // 3600000 = An hour, edit as needed for quick testing (i personally do 30000/60000)

Bot.connect();

//main tour host functionality 
Bot.on('ready', () => {
  console.log('Bot is ready and connected!');
  date = Date.now();
  const room = Bot.rooms.get('ndothertiers');// <-------------- important to edit
  if (room) {
    setInterval(() => {
	room.send("/tour end");
	
	//starts the first tour and removes the item from the arraylist
	date = Date.now();
	room.send(first.value);
	rttiers.splice(rttiers.indexOf(first), 1);
	
	// resets arraylist after running out
	if (rttiers.length === 0) {
		rttiers = await metagames();
		console.log('Reset');
	};
	
	// sets and announces the second tier to be hosted in [inter] mils, also removing the item from the arraylist
	second = rttiers[Math.floor(Math.random() * rttiers.length)];
	rttiers.splice(rttiers.indexOf(second), 1);// also potentially redundant
	
	console.log(`Tour started: ${first.name}\nNext Tour: ${second.name}`);
	first = second; // first becomes the second tour
	room.send(`Next Tournament: ${first.name} in 1 Hour`);
}, inter); 
  } else {
    console.error("Room not found."); // prob will add an edit to specify what room wasn't found but w.e 
  }
});

// @Next Functionality
Bot.on('message', message => {
	if (message.isIntro) return;
	if (message.content === '@next') return message.reply(`A ${first.name} tournament will begin in ${Math.floor(((inter-(Date.now()-date))/60000)*10)/10} minutes`);
});

})();
