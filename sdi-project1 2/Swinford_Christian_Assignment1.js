/*
 * 
 */

	var pName = prompt("What is your name?", "WhipJr");
	var pSkillSets = "Mage<br/>Archer";
	var pLevel = 1;
	var pAttack;
	var pDefense;
	var pSpeed;
	
	var eName;
	var eSkillSets = "Warrior";
	var eLevel = 1;
	var eAttack;
	var eDefense;
	var eSpeed;
	
	pStats();
	
	function pStats()
	{
		
		pAttack = (Math.floor(Math.random()*15)+7);
		pDefense = (Math.floor(Math.random()*10)+7);
		pSpeed = (Math.floor(Math.random()*20)+7);
		
		document.write("<p>" + pName +
				'<br/>' + "Player Class: " + pSkillSets +
				'<br/>' + "Player Level: " + pLevel +
				'<br/>' + "Player Attack: " + pAttack +
				'<br/>' + "Player Defense: " + pDefense +
				'<br/>' + "Player Speed: " + pSpeed + '<br/><br/>' + "</p>");
		eStatsGen();
	}
	
	function eStatsGen() //Generates enemy's stats.
	{
		//randomly generate which name to use
		random=(Math.floor(Math.random()*2));
		
		if(random <=1)
		{
			eName = "Wolf";
			}
		if (random >=2)
		{
			eName = "Ghoul";
			}
		//randomly generate enemy stats.
		eAttack = (Math.floor(Math.random()*15)+7);
		eDefense = (Math.floor(Math.random()*10)+7);
		eSpeed = (Math.floor(Math.random()*20)+7);
		
		start();
	}
	
	
	function start() //User Input decision.
	{	
	document.write("<p>Do you wish to fight? 'Yes' or 'No'</p>")
	var fight = prompt("Do you wish to fight? 'Yes' or 'No'", "Yes");
	

	if(fight.toLowerCase() == "yes")
	{
		FIGHT(eName, eDefense); //if player wants to fight, run FIGHT Function.
	}
	if(fight.toLowerCase() == "no")
	{
		RUN(); //If player does not want to fight, run 'RUN' Function.
	}
	}


	function FIGHT(creature, def) // gets the creature name and defense, 
	{
		var action= prompt("A " + creature +" is attacking you!\n" +
						   creature +"'s Defense is: " + def +
						   "\nWhat action do you wish to take? \n'Fight' or 'Run' or 'Scan'","Fight");
		if(action.toLowerCase()=="fight")
		{
			eDefense-= pAttack;
			if(eDefense>=1)
			{
				Fight();
			}
			if(eDefense<=0)
			{
				
				endGame(true);
			}
		}
		if(action.toLowerCase()=="scan")
		{
			eStats();
		}
		if(action.toLowerCase() == "run")
		{
			RUN();
		}
		
	}
	
	function eStats() //displays enemy's stats
	{
		
		document.write("<p>" + eName +
				'<br/>' + "Player Class: " + eSkillSets +
				'<br/>' + "Player Level: " + eLevel +
				'<br/>' + "Player Attack: " + eAttack +
				'<br/>' + "Player Defense: " + eDefense +
				'<br/>' + "Player Speed: " + eSpeed + '<br/><br/></p>');
		
		FIGHT(eName, eDefense);
		
		
	}
	
	function RUN()
	{
		//compare player speed to enemy speed, if enemy speed is greater,
		//player takes a hit and can choose from the options again.
		if(eSpeed>>pSpeed)
		{
			Document.write("<p>You tried to run but the wolf hurt you!</p>")
			pDefense-=eAttack;
			if(pDefense>=1)
			{
				Fight();
			}
			if(pDefense<=0)//if player defense is less than 0 the game is lost/over.
			{
				var win = prompt("You Lose!\nDo you wish to play again? 'Yes' or 'No'", "Yes");
				if(win.toLowerCase()== "yes")
				{
					pStats();
				}
				else
				{
					endGame(false);
				}
			}
		}
		else //If the player speed is greater than the wolf the player escapes.
		{
			document.write("<p>You out ran the wolf!</p>")
			endGame(true);
		}
		
	}
	
	function quit()
	{
		var verify = prompt("Are you sure?", "No");
		if(verify.toLowerCase() == "no")
		{
			start();
		}
		else
		{
			documant.write("<p><br/>Okay</p>");
			
		}
	}
	function endGame(win)
	{
		if(win)
		{
			var rePlay = prompt("YOU WIN! Do you wish to play again? 'Yes' or 'No'", "Yes");
			if(rePlay.toLowerCase()== "yes")
			{
				pStats();
			}
			else
			{
				Document.write("<p><br/><br/>Thank You For Playing!</p>");
			}
		}
		
		Document.write("<p><br/><br/>Thank You For Playing!</p>");
	}
