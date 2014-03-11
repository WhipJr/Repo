/*
 * 
 */

	var pName = prompt("What is your name?", "WhipJr");
	var pSkillSets = "Mage<br/>Archer";
	var pLevel = 1;
	var pAttack;
	var pDefense;
	var pSpeed;
	
	var eName = "Wolf";
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
		
		eAttack = (Math.floor(Math.random()*15)+7);
		eDefense = (Math.floor(Math.random()*10)+7);
		eSpeed = (Math.floor(Math.random()*20)+7);
		
		document.write(pName +
				'<br/>' + "Player Class: " + pSkillSets +
				'<br/>' + "Player Level: " + pLevel +
				'<br/>' + "Player Attack: " + pAttack +
				'<br/>' + "Player Defense: " + pDefense +
				'<br/>' + "Player Speed: " + pSpeed + '<br/><br/>');
		start();
	}
	
	
	function start()
	{	
	 
	var fight = prompt("Do you wish to fight? 'Yes' or 'No'", "Yes");
	
	
	if(fight.toLowerCase() == "yes")
	{
		FIGHT();
	}
	if(fight.toLowerCase() == "no")
	{
		end();
	}
	}
	

	function FIGHT()
	{
		var action= prompt("A Wolf is attacking you!\n" +
						   "Wolf Defense is: " + eDefense +
						   "\nWhat action do you wish to take? 'Fight' or 'Run'","Fight");
		if(action.toLowerCase()=="fight")
		{
			eDefense-= pAttack;
			if(eDefense>=1)
			{
				Fight();
			}
			if(eDefense<=0)
			{
				var win = prompt("YOU WIN! Do you wish to play again? 'Yes' or 'No'", "Yes");
				if(win.toLowerCase()== "yes")
				{
					pStats();
				}
				else
				{
					Document.write("<br/><br/>Thank You For Playing!");
				}
			}
		}
		if(action.toLowerCase() == "run")
		{
			if(eSpeed>>pSpeed)
			{
				Document.write("You tried to run but the wolf hurt you!")
				pDefense-=eAttack;
				if(pDefense>=1)
				{
					Fight();
				}
				if(pDefense<=0)
				{
					var win = prompt("You Lose!\nDo you wish to play again? 'Yes' or 'No'", "Yes");
					if(win.toLowerCase()== "yes")
					{
						pStats();
					}
					else
					{
						endGame();
					}
				}
			}
			else
			{
				Document.write("You out ran the wolf!")
				endGame();
			}
		}
		
	}
	
	function end()
	{
		var verify = prompt("Are you sure?", "No");
		if(verify.toLowerCase() == "no")
		{
			start();
		}
		else
		{
			documant.write("okay");
			
		}
	}
	function endGame()
	{
		Document.write("<br/><br/>Thank You For Playing!");
	}
