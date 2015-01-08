/*
* List of ontologies used in my examples
*/
ontologies_reference = {
	"personal_ont": "<http://example.org/smartobject#>",
	"foi": "<http://www.foi.org/featuresForSmartThings#>",
	"st": "<http://www.mystates.org/states#>",
	"log": "<http://www.w3.org/2000/10/swap/log#>",
	"rdfs": "<http://www.w3.org/2000/01/rdf-schema#>",
	"dbpedia": "<http://dbpedia.org/resource/>",
	"dogont": "<http://elite.polito.it/ontologies/dogont.owl#>",
	"thermo": "<http://sweet.jpl.nasa.gov/2.2/quanTemperature.owl#>",
	"unit": "<http://data.nasa.gov/qudt/owl/unit#>",
	"sweet": "<http://sweet.jpl.nasa.gov/>",
	"owl_time": "<http://www.w3.org/TR/owl-time>",
	"bonsai": "<http://lpis.csd.auth.gr/ontologies/bonsai/BOnSAI.owl#>"
}


/*
goal = {
	trigger : {...},
	action : {...}
}
*/
function generate_goal(){
	goal_trigger_n3 = generate_goal_for_trigger();
	console.log("\n***\n" + goal_trigger_n3 + "\n***\n");
}


/*
*	This function have to create the file goal.n3 containing the trigger expressed in RestDesc.
* TODO: Currently [OPERATION] is always :observes
*
@PREFIX <default>.
@PREFIX <depend from trigger>.
{
	?room a [WHERE];
			:hasSmartObject ?obj.

	?obj a [WHOSE].

	?state a st:State;
				log:includes { {?obj [OPERATION] ?phisicalMeasure.} a st:StateComponent. }.

	?phisicalMeasure a [WHAT];
				:hasValue ?val;
				:hasUnit [UNIT].
}
=>
{
	?obj a rdfs:Resource.
}.
*/
function generate_goal_for_trigger(){

	list_prefix_already_insert = ["personal_ont", "st", "log", "rdfs", "foi"];
	prefix = "";
	str = "\n{\n";

	if(typeof trigger.where !== 'undefined'){
		lib = trigger.where.split(':')[0];
		if((list_prefix_already_insert.indexOf(lib) <= 0) && (lib != ""))
			list_prefix_already_insert.push(lib)

		str += "?room a " + trigger.where + ";\n";
		str += ":hasSmartObject ?obj.\n";
	}

	if(typeof trigger.whose !== 'undefined'){
		lib = trigger.whose.split(':')[0];
		if((list_prefix_already_insert.indexOf(lib) <= 0) && (lib != ""))
			list_prefix_already_insert.push(lib)

		str += "?obj a " + trigger.whose + ".\n";
	}

	//TODO: trigger.operation deve esserci per forza! E' obbligatorio!
	str += "?state a st:State; \n log:includes { {?obj " + trigger.operation + "  ?phisicalMeasure.} a st:StateComponent. }.\n";

	//TODO: trigger.what deve esserci per forza! E' obbligatorio!
	str += "?phisicalMeasure a " + trigger.what + "; ";

	if(typeof trigger.unit !== 'undefined'){
		lib = trigger.unit.split(':')[0];
		if((list_prefix_already_insert.indexOf(lib) <= 0) && (lib != ""))
			list_prefix_already_insert.push(lib)

		str += ":hasUnit " + trigger.unit + "; ";
	}

	str += ":hasValue ?val. "

	str +="} => { ?obj a rdfs:Resource. }.";

	//ADD PREFIX of "WHAT"
	lib = trigger.what.split(':')[0];
	if((list_prefix_already_insert.indexOf(lib) <= 0) && (lib != ""))
		list_prefix_already_insert.push(lib)

	//ADD PREFIX of "OPERATION"
	lib = trigger.operation.split(':')[0];
	if((list_prefix_already_insert.indexOf(lib) <= 0) && (lib != ""))
		list_prefix_already_insert.push(lib)

	for(key in list_prefix_already_insert){
		if(list_prefix_already_insert[key] == "personal_ont")
			prefix += "@prefix : " + ontologies_reference[list_prefix_already_insert[key]] + ".\n";
		else
			prefix += "@prefix " + list_prefix_already_insert[key] + ": " + ontologies_reference[list_prefix_already_insert[key]] + ".\n";
	}

	return (prefix + str);
}