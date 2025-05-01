# NDOTbot
Main Goal: Setup "Scheduled" Room Tours 

Features:
- @Next command = returns the time until the next tour starts
- Starts tours hourly, randomly takes from an array of POJOs consisting of name and value (the chat commands to start tours)  
	* resets array upon running out of objects in the pool

WIP:
- Discord Integration (I already have an framework for this so I kinda wanna just finish that up solo)
 	* slot some message commands during the setintverval to ping role for an impending tour (hour before + on tour start)
	* function to kill bot from discord (saves having to log on to where ever the server is/is going to be if it's a hassle)

TODO:
- Handling Server Resets (TOP PRIORITY)
- Painless Format Edits (w/o taking the bot down for maintainence)
	* thinking fetch() updated formats from a file during the tier array refresh
- Setup for easier server support (I don't wanna use a VM from google cloud there's gotta be a smoother way)