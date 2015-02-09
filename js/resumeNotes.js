
//how to append 

//$("#main").append("Alisen");

//how to use replace()

//var awesomeThoughts = "I am Alisen and I am AWESOME";

//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

//console.log(funThoughts);

//$("#main").append(funThoughts);

//how to replace data placholder in JS

var formattedName = 
	HTMLheaderName.replace("%data%","Alisen Boada");

var formattedRole = 
	HTMLheaderRole.replace("%data%","Web Developer");

$("#header").prepend(formattedRole);	
$("#header").prepend(formattedName);

//how to create objects

var skills = ["knife fighting","bass","php"];

var bio = {
	"name" : "Alisen",
	"role" : "Web Developer",
	"contactInfo" : {
		"mobile" : 555-5555,
		"email" : "alisen@purgatory.com",
		"github" : "akboada",
		"twitter" : "akboada",
		"location" : "Oakland"
	},
	"pictureURL" : "images/me.jpg",
	"welcomeMessage" : "Hello, welcome to Hell",
	"skills" : skills
};


$("#main").append(bio.name);

//how to create objects using dot and bracket notation

/*
var work = {};
work.position = "Researcher";
work.employer = "MapLight";
work.years = 2.5;
work.city = "Berkeley, CA";

var education = {};
education["name"] = "UC Merced";
education["years"] = "2008-2011";
education["city"] = "Merced, CA";


$("#main").append(work["position"]);
$("#main").append(education.name);
*/

//JSON and nested objects

var education = {
	"school" : [
		{
		"name" : "University of California, Merced",
		"location" : "Merced, CA",
		"degree" : "BA",
		"majors" : ["Political Science", "Art"],
		"year" : 2011
		},
		{
		"name" : "Pasadena City College",
		"location" : "Pasadena, CA",
		"degree" : "none",
		"majors" : "N/A",
		"year" : "2005-2008"
		}
	],

	"onlineCouses" : [
		{
		"name" : "Udacity",
		"course" : "Front End Web Developer Nanodegree",
		"year" : 2015
		}
	]
}


//My attempt for checking object existence

if(bio.skills !== "undefined"){
	$("#header").append(HTMLskillsStart);

	var formattedSkills = 
		HTMLskills.replace("%data%", bio.skills[0]);

	$("#header").append(formattedSkills);
}

//

var formattedTitle = 
		HTMLworkEmployer.replace("%data%", work.title[jobs]);		
	
var formattedWork = formattedEmployer + " " + formattedTitle;

var formattedEmployer = 
		HTMLworkEmployer.replace("%data%", work.job[jobs].employer);

//accessing objects inside array inside JSON object


for(jobs in work.job){console.log(work.job[jobs].title);}

//location function array quiz

function locationizer(work) {
    
    var locList=[];
    
    for (job in work.jobs) {
        var newLocation = work.jobs[job].location;
        locList.push(newLocation);
    }
    
    return locList;    
}


// name capitalize manipulation quiz 

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var splitName = [];
    
    splitName = finalName.split(" ");
    
    splitName[0] = splitName[0].toLowerCase();
    splitName[1] = splitName[1].toUpperCase();
    // Don't delete this line!
    
    var capitalize = splitName[0].slice(0,1);
    
    splitName[0] = capitalize.toUpperCase() + splitName[0].slice(1);
    
    
    finalName = splitName[0] + " " + splitName[1];
  
    return finalName;
};

//Udacity answer

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

//check for image property in property.display() function

if (projects.projects[project].imageURL.length > 0){
			for (image in projects.projects[project].imageURL){
				var formattedImages = 
					HTMLprojectImage.replace("%data%", projects.projects[project].imageURL[image]);			


				$(".project-entry:last").append(formattedImages);
			}	
	}
