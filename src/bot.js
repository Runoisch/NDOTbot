require('dotenv').config();
const { Client } = require('ps-client');
const Bot = new Client({
	username: 'NDOT Tours', // assumes this account is already registered
	password: envPASS, // Should be a string just in case PW includes special chars
	debug: true, 
	avatar: 'shauntal',
	rooms: ['ndot']
	});

// channel is useless for now, discord thing
const metagames = [
  { channel: "" , name:  "National Dex Ubers", value: "/tour create gen9nationaldexubers,elimination\n/tour autostart 5 \n/tour autodq 3 \n!tier [Gen 9] National Dex Ubers \n!rfaq NatDex Ubers" },
  { channel: "" , name:  "National Dex Doubles OU", value: "/tour create gen9nationaldexdoubles,elimination\n/tour autostart 5\n/tour autodq 2\n/tour !tier National Dex Doubles\n!rfaq dou" },
  { channel: "" , name:  "National Dex RU", value: "/tour create gen9nationaldexru,elimination\n/tour autostart 7\n/tour autodq 5\n!tier [Gen 9] National Dex RU" },
  //{ channel: "" , name:  "DUbers", value: "/tour create gen9nationaldexdoubles,elimination,,,[Gen 9] National Dex Doubles Ubers \n/tour rules +Annihilape,+Arceus,+Calyrex-Ice,+Calyrex-Shadow,+Dialga,+Dialga-Origin,+Eternatus,+Genesect,+Gengar-Mega,+Giratina,+Giratina-Origin,+Groudon,+Ho-Oh,+Koraidon,+Kyogre,+Kyurem-White,+Lugia,+Lunala,+Magearna,+Melmetal,+Metagross-Mega,+Mewtwo,+Miraidon,+Necrozma-Dawn-Wings,+Necrozma-Dusk-Mane,+Necrozma-Ultra,+Palkia,+Palkia-Origin,+Rayquaza,+Reshiram,+Shedinja,+Solgaleo,+Terapagos,+Urshifu-Base,+Urshifu-Rapid-Strike,+Xerneas,+Yveltal,+Zacian,+Zacian Crowned,+Zamazenta,+Zamazenta-Crowned,+Zekrom,+Zygarde,+Zygarde-Complete,+Commander,+Power Construct,+Coaching,+Dark Void,+Swagger,!Gravity Sleep Clause \n/tour autostart 10 \ntour autodq 5 \n!rfaq dubers" },
  //{ channel: "" , name:  "Gen 8 DOU", value: "/tour new gen8doublescustomgame, elimination,,,[Gen 8] National Dex Doubles OU\n/tour rules +Annihilape,+Arceus,+Calyrex-Ice,+Calyrex-Shadow,+Dialga,+Dialga-Origin,+Eternatus,+Genesect,+Gengar-Mega,+Giratina,+Giratina-Origin,+Groudon,+Ho-Oh,+Koraidon,+Kyogre,+Kyurem-White,+Lugia,+Lunala,+Magearna,+Melmetal,+Metagross-Mega,+Mewtwo,+Miraidon,+Necrozma-Dawn-Wings,+Necrozma-Dusk-Mane,+Necrozma-Ultra,+Palkia,+Palkia-Origin,+Rayquaza,+Reshiram,+Shedinja,+Solgaleo,+Terapagos,+Urshifu-Base,+Urshifu-Rapid-Strike,+Xerneas,+Yveltal,+Zacian,+Zacian Crowned,+Zamazenta,+Zamazenta-Crowned,+Zekrom,+Zygarde-Base,+Zygarde-Complete,+Commander,+Power Construct,+Coaching,+Dark Void,+Swagger,!Gravity Sleep Clause#10;\n/tour autostart 10 \n/tour autodq 5" },
  //{ channel: "" , name:  "Partners In Crime", value: "/tour create gen9partnersincrime, elim, National Dex Partners In Crime \n/tour rules !Standard Doubles, Standard NatDex, OHKO Clause, Evasion Moves Clause, Evasion Abilities Clause, Species Clause, Gravity Sleep Clause, Moody Clause, -ND Uber, +Alakazam-Mega, +Baxcalibur, +Blaziken-Mega, +Chien-Pao, +Chi-Yu, +Darmanitan-Galar, +Deoxys-Speed, +Deoxys-Attack, +Deoxys-Defense, +Deoxys, +Dragapult, +Espathra, +Flutter Mane, +Gholdengo, +Iron Bundle, +Kangaskhan-Mega, +Kingambit, +Kyurem-Black, +Landorus, +Lucario-Mega, +Marshadow, +Metagross-Mega, +Naganadel, +Ogerpon-Hearthflame, +Palafin, +Pheromosa, +Regieleki, +Roaring Moon, +Salamence-Mega, +Shaymin-Sky, +Spectrier, +Ursaluna-Bloodmoon, +Urshifu, +Walking Wake, +Zygarde, -Annihilape, -Commander, -Swagger, -Assist, -Dark Void, -Power Construct, -Ally Switch, -Revival Blessing, -Last Respects, -Shadow Tag, -Serene Grace, -Huge Power, -Dancer\n/tour autostart 10\n/tour autodq 5 \n!rfaq ndpic" },
  //{ channel: "" , name:  "2v2", value: "/tour create gen9nationaldexdoubles,elimination,,,[Gen 9] National Dex 2v2 \n/tour autostart 7 \n/tour autodq 5 \n/tour rules Z-Move Clause,Terastal Clause,Picked Team Size = 2,Max Team Size = 4, +Genesect, -Tornadus, +Shedinja, -Marshadow, -Whimsicott, -Cottonee, +Annihilape, +Gengarite, -Ally Switch, -Focus Sash, -Perish Song, -Final Gambit" },
  { channel: "" , name:  "National Dex AAA", value: "/tour create gen9nationaldexaaa,elimination,,,[Gen 9] National Dex AAA\n/tour autostart 7\n/tour autodq 5 \n!rfaq aaa" },
  { channel: "" , name:  "National Dex BH", value: "/tour create gen9nationaldexbh,elimination \n/tour autostart 5\n/tour autodq 3 \n!rfaq bh" },
  { channel: "" , name:  "National Dex Ubers UU", value: "/tour new gen9nationaldexubersuu,elim,,,[Gen 9] National Dex Ubers UU\n/tour autostart 7\n/tour autodq 5\n!tier nationaldexubersuu" },
  { channel: "" , name:  "National Dex GG", value: "/tour create gen9nationaldexgodlygift,elimination,,,[Gen 9] National Dex Godly Gift \n/tour autostart 7 \n/tour autodq 5\n!rfaq gg" },
  { channel: "" , name:  "National Dex NFE", value: "/tour create gen9nationaldexag,elimination,,,[Gen 9] National Dex NFE \n/tour autostart 7\n/tour autodq 5\n/tour rules gen9nationaldex, Not Fully Evolved, Terastal Clause, -Basculin-white-striped, -Bisharp,-Chansey,-Doublade,-Duraludon, -Gligar, -Kadabra, -Haunter,-Magneton,-Mr. Mime Galar, -Porygon2,-Primeape,-Qwilfish-hisui,-Ursaring, -Scyther, -Sneasel, -Type: Null, +Moody\n!rfaq nfe \n!tier NFE" },
  { channel: "" , name:  "National Dex STAB", value: "/tour create gen9nationaldexstabmons,elimination,,,[Gen 9] National Dex STABmons \n/tour autostart 7\n/tour autodq 5 \n!rfaq stab" },
  { channel: "" , name:  "National Dex LC", value: "/tour create gen9nationaldexlc,elimination,,,[Gen 9] National Dex LC\n/tour autostart 7\n/tour autodq 5\n!rfaq NatDex LC" },
  { channel: "" , name:  "National Dex 1v1", value: "/tour create gen9nationaldexag,elimination,,,[Gen 9] National Dex 1v1 \n/tour autostart 7 \n/tour autodq 5 \n/tour rules Picked Team Size = 1, Max Team Size = 3, -Arceus, -Archaludon, -Calyrex-Ice, -Calyrex-Shadow, -Chi-Yu, -Deoxys, -Deoxys-Attack, -Deoxys-Defense, -Dialga, -Dialga-Origin, -Eternatus, -Flutter Mane, -Giratina, -Giratina-Origin, -Gouging Fire, -Groudon, -Ho-Oh, -Jirachi, -Kangaskhan-Mega, -Koraidon, -Kyogre, -Kyurem-Black, -Kyurem-White, -Lugia, -Lunala, -Marshadow, -Mew, -Mewtwo, -Mimikyu, -Miraidon, -Necrozma-Dawn Wings, -Necrozma-Dusk Mane, -Ogerpon-Cornerstone, -Palkia, -Palkia-Origin, -Rayquaza, -Reshiram, -Salamence-Mega, -Shaymin-Sky, -Snorlax, -Solgaleo, -Terapagos, -Xerneas, -Yveltal, -Zacian, -Zacian-Crowned, -Zamazenta, -Zamazenta-Crowned, -Zekrom, -Fightinium Z + Detect, -Acupressure, -Moody, -Focus Sash, -Focus Band, -Perish Song, Accuracy Moves Clause, Evasion Moves Clause, OHKO Clause, Species Clause, Sleep Moves Clause, Dynamax Clause, Terastal Clause" },
  { channel: "" , name:  "National Dex 35 Pokes", value: "/tour create gen9nationaldex35pokes,elimination,,,[Gen 9] 35 Pokes\n/tour autostart 7 \n/tour autodq 5 " },
  //{ channel: "" , name:  "AG", value: "/tour create gen9nationaldexag,elimination \n/tour autostart 5 \n/tour autodq 3 \n!tier [Gen 9] National Dex AG" },
  //{ channel: "" , name:  "MnM {*}", value: "/tour create gen9mixandmega,elimination,,,[Gen 9] National Dex Mix and Mega \n/tour autostart 10 \n/tour autodq 5 \n/tour rules Standard NatDex, !Min Source Gen, Mega Rayquaza Clause, +Dragapult, +Eternatus, +Gholdengo, +Kilowattrel, +Kyogre, +Sandy Shocks, +Zapdos, -Calyrex-Shadow, -Pidgeotite, -Electrify, *Arceus, *Calyrex-Ice, *Deoxys-Attack, *Deoxys-Base, *Deoxys-Speed, *Dialga, *Eternatus, *Giratina, *Groudon, *Ho-Oh, *Kyogre, *Kyurem-Black, *Kyurem-White, *Lugia, *Lunala, *Marshadow, *Melmetal, *Mewtwo, *Naganadel, *Necrozma-Dawn-Wings, *Necrozma-Dusk-Mane, *Palkia, *Pheromosa, *Rayquaza, *Regigigas, *Reshiram,*Urshifu, *Xerneas, *Yveltal, *Zekrom, *Power Construct, +Beedrillite,*Beedrillite, +Blazikenite,*Blazikenite, +Kangaskhanite,*Kangaskhanite, +Mawilite,*Mawilite, +Medichamite,*Medichamite, +Rusted Sword,*Rusted Sword \n!rfaq mnm" },
  //{ channel: "" , name:  "Convergence {*}", value: "/tour create gen9nationaldex,elimination,,,[Gen 9] National Dex Convergence\ntour autostart 10 \n/tour autodq 5 \n/tour rules Convergence Legality,!Obtainable Abilities,Sleep Moves Clause,-Articuno-Galar,-Cosmog,-Golisopod,-Regigigas,-Slaking,-Smeargle,-Tapu Lele,-Walking Wake,-Zamazenta,-Comatose,-Contrary,-Huge Power,-Imposter,-Pure Power,-Simple,-Speed Boost,-Unburden,-Belly Drum,-Electrify,-Extreme Speed,-Quiver Dance,-Revival Blessing,-Shell Smash,-Shift Gear,-Stored Power,-Tail Glow,-Transform,-Damp Rock,-Medichamite,-Mawilite,+Espathra,-Boomburst,-Virizion, +Ursaluna, +Ursaluna-Bloodmoon \n!tier Convergence Legality" },
  //{ channel: "" , name:  "CAP", value: "/tour create gen9nationaldex,elimination,,,[Gen 9] National Dex CAP /tour autostart 7 /tour autodq 5 /tour rules +cap, +vile vial, +crucibellite \n!rfaq capsamples" }
];

// setup for the setInverval loop
let date;
let rttiers = JSON.parse(JSON.stringify(metagames)); // setup the array 
let first = rttiers[Math.floor(Math.random() * rttiers.length)]; // takes random tier from array
//rttiers.splice(rttiers.indexOf(first), 1); this line seems redundant but I will keep it just it case
let second;
const inter = 3600000 // An hour, edit as needed for quick testing

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
		rttiers = JSON.parse(JSON.stringify(metagames));
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