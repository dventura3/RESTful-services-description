/*
function readText (form) {
    TestVar = form.inputbox.value;
    alert ("You typed: " + TestVar);
}
function writeText (form) {
    form.inputbox.value = "Have a nice day!"
}
*/

trigger = {};
action = {};

function print(part_goal, type){
	str = "";
	str += type + " ";
	if(part_goal["what"] != "")
		str += part_goal["what"] + " ";
	if(part_goal["whose"] != "")
		str += "of " + part_goal["whose"] + " ";
	if(part_goal["where"] != "")
		str += "in " + part_goal["where"] + " ";
	if(part_goal["operation"] != "")
		str += part_goal["operation"] + " ";
	if(part_goal["value"] != "")
		str += part_goal["value"] + " ";
	if(part_goal["unit"] != "")
		str += part_goal["unit"] + " ";
	if(part_goal["when"] != "")
		str += part_goal["when"] + " ";

	console.log(str);
}

function UI_trigger_function(){
	user_trigger = [];
  user_trigger["what"] = $('#IF_what').val();  //TODO tutto minuscolo
  user_trigger["whose"] = $('#IF_whose').val();
  user_trigger["where"] = $('#IF_where').val();
  user_trigger["operation"] = $('#IF_operation').val();
  user_trigger["value"] = $('#IF_value').val();
  user_trigger["unit"] = $('#IF_unit').val();
  user_trigger["when"] = $('#IF_when').val();

  print(user_trigger, "IF");

  convert_trigger_into_semantic(user_trigger);
}

function convert_trigger_into_semantic(part_goal){

	trigger = {}; //empty!

	if(part_goal["what"] != "")
		trigger["what"] = get_semantic_what(part_goal["what"]);
	if(part_goal["whose"] != "")
		trigger["whose"] = get_semantic_whose(part_goal["whose"]);
	if(part_goal["where"] != "")
		trigger["where"] = get_semantic_where(part_goal["where"]);
	if(part_goal["operation"] != "")
		trigger["operation"] = ":observes";  //NB: TODO IMPROVE with all that I wrote out
	if(part_goal["value"] != "")
		trigger["value"] = part_goal["value"];
	if(part_goal["unit"] != "")
		trigger["unit"] = get_semantic_unit(part_goal["unit"]);
	if(part_goal["when"] != "")
		trigger["when"] = part_goal["when"];

	console.log(JSON.stringify(trigger));
}

/*
*	what => it's a object's feature of interest... and it's also what a sensor can observe
* We can suppose to have a grammatic to associate observation to
* the "what" required by the user.
*/
function get_semantic_what(what){
	semantic_what = "";

	if(what == "temperature")
		semantic_what = "thermo:Temperature";
	else if(what == "light")
		semantic_what = "flux:Brightness";
	else if(what == "color light")
		semantic_what = "dbpedia:Color";
	else if(what == "alarm")
		semantic_what = "foi:Alarm";

	return semantic_what;
}

function get_semantic_whose(whose){
	semantic_whose = "";

	if(whose == "air conditioner")
		semantic_whose = "dbpedia:Air_Conditioner";
	else if(whose == "rgb lamp")
		semantic_whose = "dbpedia:Light-emitting_diode";
	else if(whose == "air conditioner")
		semantic_whose = "sensor";
	else if(whose == "ssn:Sensor")
		semantic_whose = "dbpedia:Air_Conditioner";
	else if(whose == "dvd recorder")
		semantic_whose = "dbpedia:DVD_recorder";
	else if(whose == "smart tv")
		semantic_whose = "dbpedia:Smart_TV";
	else if(whose == "alarm clock")
		semantic_whose = "dbpedia:Alarm_clock";
	else if(whose == "radio")
		semantic_whose = "dbpedia:Radio";

	return semantic_whose;
}

function get_semantic_where(where){
	semantic_where = "";

	if(where == "kitchen")
		semantic_where = "dogont:Kitchen";
	else if(where == "bathroom")
		semantic_where = "dogont:Bathroom";
	else if(where == "bedroom")
		semantic_where = "dogont:Bedroom";

	return semantic_where;
}

function get_semantic_value(value){
	//TODO per bbc e titanic.avi
	//se c'è un numero oppure ON/OFF, non gli associo semantica
}

function get_semantic_unit(unit){
	semantic_unit = "";

	if(unit == "celsius")
		semantic_unit = "unit:DegreeCelsius";

	return semantic_unit;
}