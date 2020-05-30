$(function () {
	//init
	$(document).ready(function() {
		DisplayAttributes("Head","Human");
		DisplayAttributes("Torso","Human");
		DisplayAttributes("Arms","Human");
		DisplayAttributes("Legs","Human");
		$('#HeartCosts').text(perc_stats["Human"]["HeartPower"]);
		DisplayEnemyStat("Bauer");
		Calc_Monster_Stats();
	});
	
	
	//Prozentuale verteilung der stats auf die körperteile
	var parts = new Array("Head", "Torso", "Arms", "Legs", "Heart");
	var perc_parts = [];
	perc_parts = {};
	perc_parts["Human"] = {};
	perc_parts["Human"]["Head"] = 0.1;
	perc_parts["Human"]["Torso"] = 0.4;
	perc_parts["Human"]["Arms"] = 0.25;
	perc_parts["Human"]["Legs"] = 0.25;
	
	perc_parts["Unicorn"] = {};
	perc_parts["Unicorn"]["Head"] = 0.2;
	perc_parts["Unicorn"]["Torso"] = 0.2;
	perc_parts["Unicorn"]["Arms"] = 0.2;
	perc_parts["Unicorn"]["Legs"] = 0.4;
	
	perc_parts["Spuckhai"] = {};
	perc_parts["Spuckhai"]["Head"] = 0.05;
	perc_parts["Spuckhai"]["Torso"] = 0.3;
	perc_parts["Spuckhai"]["Arms"] = 0.35;
	perc_parts["Spuckhai"]["Legs"] = 0.3;
	
	perc_parts["Clawfinger"] = {};
	perc_parts["Clawfinger"]["Head"] = 0.2;
	perc_parts["Clawfinger"]["Torso"] = 0.3;
	perc_parts["Clawfinger"]["Arms"] = 0.4;
	perc_parts["Clawfinger"]["Legs"] = 0.1;
	
	perc_parts["IronWoolSheep"] = {};
	perc_parts["IronWoolSheep"]["Head"] = 0.2;
	perc_parts["IronWoolSheep"]["Torso"] = 0.4;
	perc_parts["IronWoolSheep"]["Arms"] = 0.2;
	perc_parts["IronWoolSheep"]["Legs"] = 0.2;
	
	perc_parts["Dragon"] = {};
	perc_parts["Dragon"]["Head"] = 0.25;
	perc_parts["Dragon"]["Torso"] = 0.45;
	perc_parts["Dragon"]["Arms"] = 0.1;
	perc_parts["Dragon"]["Legs"] = 0.2;
	
	//Prozentuale verteilung der stats
	var stats = new Array("HP", "Speed", "Att", "Aggro", "DefMelee", "DefRanged", "DefMagic", "Costs");
	var perc_stats = [];
	perc_stats = {};
	perc_stats["Human"] = {};
	perc_stats["Human"]["HP"] = 0.2;
	perc_stats["Human"]["Speed"] = 0.1;
	perc_stats["Human"]["Att"] = 0.2;
	perc_stats["Human"]["Aggro"] = 0.1;
	perc_stats["Human"]["DefMelee"] = 0.2;
	perc_stats["Human"]["DefRanged"] = 0.15;
	perc_stats["Human"]["DefMagic"] = 0.05;
	perc_stats["Human"]["HeartPower"] = 1000;
	
	perc_stats["Unicorn"] = {};
	perc_stats["Unicorn"]["HP"] = 0.1;
	perc_stats["Unicorn"]["Speed"] = 0.3;
	perc_stats["Unicorn"]["Att"] = 0.2;
	perc_stats["Unicorn"]["Aggro"] = 0.05;
	perc_stats["Unicorn"]["DefMelee"] = 0.1;
	perc_stats["Unicorn"]["DefRanged"] = 0.1;
	perc_stats["Unicorn"]["DefMagic"] = 0.15;
	perc_stats["Unicorn"]["HeartPower"] = 1200;
	
	perc_stats["Spuckhai"] = {};
	perc_stats["Spuckhai"]["HP"] = 0.15;
	perc_stats["Spuckhai"]["Speed"] = 0.15;
	perc_stats["Spuckhai"]["Att"] = 0.25;
	perc_stats["Spuckhai"]["Aggro"] = 0.05;
	perc_stats["Spuckhai"]["DefMelee"] = 0.05;
	perc_stats["Spuckhai"]["DefRanged"] = 0.3;
	perc_stats["Spuckhai"]["DefMagic"] = 0.05;
	perc_stats["Spuckhai"]["HeartPower"] = 1400;
	
	perc_stats["Clawfinger"] = {};
	perc_stats["Clawfinger"]["HP"] = 0.1;
	perc_stats["Clawfinger"]["Speed"] = 0.2;
	perc_stats["Clawfinger"]["Att"] = 0.35;
	perc_stats["Clawfinger"]["Aggro"] = 0.15;
	perc_stats["Clawfinger"]["DefMelee"] = 0.05;
	perc_stats["Clawfinger"]["DefRanged"] = 0.05;
	perc_stats["Clawfinger"]["DefMagic"] = 0.1;
	perc_stats["Clawfinger"]["HeartPower"] = 1600;
	
	perc_stats["IronWoolSheep"] = {};
	perc_stats["IronWoolSheep"]["HP"] = 0.25;
	perc_stats["IronWoolSheep"]["Speed"] = 0.05;
	perc_stats["IronWoolSheep"]["Att"] = 0.15;
	perc_stats["IronWoolSheep"]["Aggro"] = 0.15;
	perc_stats["IronWoolSheep"]["DefMelee"] = 0.25;
	perc_stats["IronWoolSheep"]["DefRanged"] = 0.05;
	perc_stats["IronWoolSheep"]["DefMagic"] = 0.1;
	perc_stats["IronWoolSheep"]["HeartPower"] = 1800;
	
	perc_stats["Dragon"] = {};
	perc_stats["Dragon"]["HP"] = 0.2;
	perc_stats["Dragon"]["Speed"] = 0.015;
	perc_stats["Dragon"]["Att"] = 0.15;
	perc_stats["Dragon"]["Aggro"] = 0.2;
	perc_stats["Dragon"]["DefMelee"] = 0.1;
	perc_stats["Dragon"]["DefRanged"] = 0.2;
	perc_stats["Dragon"]["DefMagic"] = 0.135;
	perc_stats["Dragon"]["HeartPower"] = 2000;
	
	//gegner
	var list_enemy_stats = new Array("HP","AttType","Att","Range");
	var enemy_stats = [];
	enemy_stats = {};
	enemy_stats["Bauer"] = {};
	enemy_stats["Bauer"]["HP"] = 250;
	enemy_stats["Bauer"]["AttType"] = "Melee";
	enemy_stats["Bauer"]["Att"] = 170;
	enemy_stats["Bauer"]["Range"] = 0.5;
	
	enemy_stats["Kuh"] = {};
	enemy_stats["Kuh"]["HP"] = 325;
	enemy_stats["Kuh"]["AttType"] = "Melee";
	enemy_stats["Kuh"]["Att"] = 270;
	enemy_stats["Kuh"]["Range"] = 0.5;
	
	enemy_stats["Junge"] = {};
	enemy_stats["Junge"]["HP"] = 220;
	enemy_stats["Junge"]["AttType"] = "Ranged";
	enemy_stats["Junge"]["Att"] = 190;
	enemy_stats["Junge"]["Range"] = 1.5;
	
	enemy_stats["Novize"] = {};
	enemy_stats["Novize"]["HP"] = 110;
	enemy_stats["Novize"]["AttType"] = "Magic";
	enemy_stats["Novize"]["Att"] = 170;
	enemy_stats["Novize"]["Range"] = 3;
	
	enemy_stats["Ritter"] = {};
	enemy_stats["Ritter"]["HP"] = 500;
	enemy_stats["Ritter"]["AttType"] = "Melee";
	enemy_stats["Ritter"]["Att"] = 350;
	enemy_stats["Ritter"]["Range"] = 0.5;
	
	enemy_stats["Bogenschütze"] = {};
	enemy_stats["Bogenschütze"]["HP"] = 300;
	enemy_stats["Bogenschütze"]["AttType"] = "Ranged";
	enemy_stats["Bogenschütze"]["Att"] = 275;
	enemy_stats["Bogenschütze"]["Range"] = 1.5;
	
	enemy_stats["Zauberelf"] = {};
	enemy_stats["Zauberelf"]["HP"] = 100;
	enemy_stats["Zauberelf"]["AttType"] = "Magic";
	enemy_stats["Zauberelf"]["Att"] = 450;
	enemy_stats["Zauberelf"]["Range"] = 0.5;
	
	
	//tabelle mit körperteilen füllen
	$('.SelectPart').change(function() {
		var RaceSelection = $(this).val();
		var PartSelection = $(this).attr('name');
		
		var blubb = $('#SelectHead option:selected').text();
		if (PartSelection == "Heart")
		{
			if (RaceSelection == "None")
			{
				$('#HeartCosts').text(0);
			}
			else
			{
				$('#HeartCosts').text(perc_stats[RaceSelection]["HeartPower"]);
			}
		}
		else
		{
			switch (RaceSelection)
			{
				case "Human":
					DisplayAttributes(PartSelection,"Human");
				break;
				case "Unicorn":
					DisplayAttributes(PartSelection,"Unicorn");
				break;
				case "Spuckhai":
					DisplayAttributes(PartSelection,"Spuckhai");
				break;
				case "Clawfinger":
					DisplayAttributes(PartSelection,"Clawfinger");
				break;
				case "IronWoolSheep":
					DisplayAttributes(PartSelection,"IronWoolSheep");
				break;
				case "Dragon":
					DisplayAttributes(PartSelection,"Dragon");
				break;
				default:
					ResetAttributes(PartSelection);
				break;
			}
		}
	});	
	
	//gegner auswählen
	$('.SelectEnemy').change(function() {
		var EnemySelection = $(this).val();
		DisplayEnemyStat(EnemySelection);
	});	
	
	//kampf starten
	$('#BattleStart').click(function() {
		var Costs = parseInt($('#SumCosts').text());
		var HeartPower = parseInt($('#HeartCosts').text());
				
		if (Costs > HeartPower)
		{
			alert("Zu schwaches Herz? Jetzt Steroide im Premium Shop kaufen!");
		}
		else
		{		
			BattleLoop();
		}
		
	});
	
	//enemy display
	function DisplayEnemyStat(Enemy)
	{
		for (var i = 0; i < list_enemy_stats.length; i++)
		{
			var content = enemy_stats[Enemy][list_enemy_stats[i]];
			$('#Enemy'+list_enemy_stats[i]).text(content);
		}
	}
	
	//summe der stats für den battle berechnen
	function Calc_Monster_Stats()
	{
		for (var i = 0; i < stats.length; i++) {
			var summe = 0;
			for (var j = 0; j < parts.length - 1; j++) {
				var cell_content = parseFloat($('#'+parts[j]+stats[i]).text());
				//alert(cell_content);
				summe += cell_content;
			}
			$('#Sum'+stats[i]).text(summe);
		}
	}
	
	//tabellenwerte zurücksetzen
	function ResetAttributes(Part)
	{	
		for (var i = 0; i < stats.length; i++) {
			$('#'+Part+stats[i]).text(0);
		}
		
		Calc_Monster_Stats();
	}
	
	//wert in tabelle anzeigen
	function DisplayAttributes(Part,Race)
	{
		
		var costs = 0;
		for (var i = 0; i < stats.length - 1; i++) {
			var content = Math.round((perc_parts[Race][Part] * perc_stats[Race][stats[i]] * perc_stats[Race]["HeartPower"]) * 100) / 100;
			$('#'+Part+stats[i]).text(content);
			costs += content;
		}	
		$('#'+Part+"Costs").text(costs);
		
		Calc_Monster_Stats();
	}
	
	//exactly
	function BattleLoop()
	{
		$('#BattleResultTable tbody').empty();
		//init creature stats
		var CreatureHP = $('#SumHP').text();
		var CreatureSpeed = $('#SumSpeed').text();
		var CreatureAtt = $('#SumAtt').text();
		var CreatureAggro = $('#SumAggro').text(); //not available here
		var CreatureDefMelee = $('#SumDefMelee').text();
		var CreatureDefRanged = $('#SumDefRanged').text();
		var CreatureDefMagic = $('#SumDefMagic').text();
		
		//init enemy stats
		var EnemyHP = $('#EnemyHP').text();
		var EnemyAttType = $('#EnemyAttType').text();
		var EnemyAtt = $('#EnemyAtt').text();
		var EnemyRange = $('#EnemyRange').text();
		
		//battle related stuff
		var Distance = 3.0; //max battle start distance
		var CurrentCreatureHP = CreatureHP;
		var CurrentEnemyHP = EnemyHP;
		var CurrentTick = 0;
		var CreatureDef = 100;
		
		//get the right resi against atttype
		switch (EnemyAttType)
		{
			case "Melee":
				CreatureDef = CreatureDefMelee;
			break;
			case "Ranged":
				CreatureDef = CreatureDefRanged;
			break;
			case "Magic":
				CreatureDef = CreatureDefMagic;
			break;
			default:
			break;
		}
		
		//annäherung
		var InRange = false;
		$('#BattleResultTable').append('<tbody>');
		while (CurrentCreatureHP > 0 && CurrentEnemyHP > 0)
		{	
			//wenn die creature in reichweite ist
			if (Distance < EnemyRange || Distance == "Dran")
			{
				var perc_damage = 1.0;
				if (CreatureDef > EnemyAtt)
				{
					perc_damage = 0.1;
				}
				else
				{
					perc_damage = 1 - CreatureDef / EnemyAtt;
				}
				
				var Damage = EnemyAtt - CreatureDef;
				if (Damage < 0)
				{
					Damage = 0;
				}
				CurrentCreatureHP -= Damage * 0.1;
			}
			
			//nur wenn die creature am feind dran ist
			if (InRange == true)
			{
				CurrentEnemyHP -= CreatureAtt * 0.1;
			}
			
			//display results for this tick
			$('#BattleResultTable').append('<tr><td>'+CurrentTick+'</td><td>'+CurrentCreatureHP+'</td><td>'+CurrentEnemyHP+'</td><td>'+Distance+'</td></tr>');
			
			//creature nähert sich
			if (Distance > 0.5)
			{
				Distance -= CreatureSpeed * 0.001;
			}
			else
			{
				InRange = true;
				Distance = "Dran";
			}
			
			//nächster tick
			CurrentTick++;
			if (CurrentTick>200){
				break;
			}
			
		}
		$('#BattleResultTable').append('</tbody>');
		var Result = "";
		if (CurrentCreatureHP > 0)
		{
			Result = "Thou hath defeated the enemy.";
		}
		else
		{
			Result = "Thou hath lost. Noob!";
		}	
		alert(Result);

		
	}
});
	