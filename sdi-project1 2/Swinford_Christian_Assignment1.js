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
	
	var encounter = false;
	var distance = 20;
	
	pStats();
	
	function pStats()
	{
		
		pAttack = (Math.floor(Math.random()*15)+7);
		pDefense = (Math.floor(Math.random()*10)+7);
		pSpeed = (Math.floor(Math.random()*20)+7);
		
		var distance = 20;
		
		document.write("<p>" + pName +
				'<br/>' + "Player Class: " + pSkillSets +
				'<br/>' + "Player Level: " + pLevel +
				'<br/>' + "Player Attack: " + pAttack +
				'<br/>' + "Player Defense: " + pDefense +
				'<br/>' + "Player Speed: " + pSpeed + '<br/><br/>' + "</p>");
		
		start();
	}
	
	
	
	
	function start() //User Input decision.
	{	
	document.write("<p>Do you wish to fight? 'Yes' or 'No'</p>");
	
	
	//randomly generate enemy name to use.
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
	
	encounter = false;
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
		
		
		
		//ask player if they want to attack, or run.
		var action= prompt("A " + creature +" is attacking you!\n" +
						   creature +"'s Defense is: " + def +
						   "\nWhat action do you wish to take? \n'Fight' or 'Run' or 'Scan'","Fight");
		if(action.toLowerCase()=="fight")
		{
			eDefense-= pAttack;
			if(eDefense>=1)
			{
				FIGHT(eName, eDefense);
			}
			if(eDefense<=0)
			{
				goHome(distance);
				//endGame(true);
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
	
	function goHome(eta)
	{
		
		document.write("Quickly, " + pName + " runs home while being chased by the wolves:")
		
		while(eta>= 0)
		{
			
			var ran = (Math.floor(Math.random()*100)+1)
			
			document.write("<br/>Distance from home is " + eta);
			if(ran >>25 && ran << 30)
			{
				encounter = true;
				if (encounter)
					break;
			}
			if(ran >> 75 && ran << 80)
			{
				encounter = true;
				if (encounter)
					break;
			}
			
				eta--;
			distance--;
		}
		if (encounter){
			start();
			}
			
	if(eta<=0)
		endGame(true);
	
	}
	
	function eStats() //displays enemy's stats
	{
		
		document.write("<p>" + eName +
				'<br/>' + "Enemy Class: " + eSkillSets +
				'<br/>' + "Enemy Level: " + eLevel +
				'<br/>' + "Enemy Attack: " + eAttack +
				'<br/>' + "Enemy Defense: " + eDefense +
				'<br/>' + "Enemy Speed: " + eSpeed + '<br/><br/></p>');
		
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
					goHome();
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
			var rePlay = prompt("YOU WIN! You made it home! \n" +
					"Do you wish to play again? 'Yes' or 'No'", "Yes");
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
