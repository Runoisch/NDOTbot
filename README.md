# NDOTbot
Main Goal: Setup "Scheduled" Room Tours 

This bot is ran using node.js and the following dependencies: ps-client@4.4.0 | dotenv@16.5.0

Features:
- @Next command = returns the time until the next tour starts
- Starts tours hourly, randomly takes from an array of POJOs consisting of name and value (the chat commands to start tours)  
	* resets array upon running out of objects in the pool

WIP:
- Discord Integration (I already have an framework for this so I kinda wanna just finish that up solo)
 	* slot some message commands during the setintverval to ping role for an impending tour (hour before + on tour start)
	* function to kill bot from discord (saves having to log on to where ever the server is/is going to be if it's a hassle)

TODO (ordered by priority):
1. Handling Server Resets (TOP PRIORITY)
	* PS client attempts to retry connection but fails (despite claiming to succeed in console logs). 
2. Complete integration to github (rn its just the script on there as I have it)
	- server hosting assumes you have your own method of running the script independently and its not entirely clear if its able to be done entirely through github
3. Improve security concerns (if there are any, i'm a noob when it comes to addressing security/server issues)
4. Painless Format Edits (w/o taking the bot down for maintainence)
	* thinking fetch() updated formats from a file during the tier array refresh
5. Push structural updates while minimizing downtime
	* Ergo like idk edit my code and push it out without having to disrupt any active processes (such as tours being killed)

For Runo specifically:
- Setup for easier server hosting (I don't wanna use a VM from google cloud there's gotta be a smoother way that isn't gonna be costly)
	* cloudflare worker?