var bio = {
	"name" : "Alisen Boada",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "555-5555",
		"email" : "akboada@gmail.com",
		"github" : "akboada",
		"twitter" : "akboada",
		"location" : "Oakland, CA"
	},
	"welcomeMessage" : "Welcome to this page",	
	"skills" : ["qualitative research","data entry","Microsoft Excel", 
		"Adobe Illustrator"],
	"biopic" : "images/bio.jpg"
	
};

bio.display = function(){

	var formattedName = 
	HTMLheaderName.replace("%data%", bio.name);

	$("#header").prepend(formattedName);

	var formattedRole = 
	HTMLheaderRole.replace("%data%", bio.role);

	$("#name").after(formattedRole);

	var formattedMobile = 
		HTMLmobile.replace("%data%", bio.contacts.mobile);

	$("#topContacts").append(formattedMobile);

	var formattedEmail = 
		HTMLemail.replace("%data%", bio.contacts.email);

	$("#topContacts").append(formattedEmail);

	var formattedTwitter = 
		HTMLtwitter.replace("%data%", bio.contacts.twitter);

	$("#topContacts").append(formattedTwitter);

	var formattedGithub = 
		HTMLgithub.replace("%data%", bio.contacts.github);

	$("#topContacts").append(formattedGithub);

	var formattedLocation = 
		HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts").append(formattedLocation);

	var formattedPic =
		HTMLbioPic.replace("%data%", bio.biopic);

	$("#header").append(formattedPic);

	var formattedMessage =
		HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#topContacts").after(formattedMessage);


	if (bio.skills.length > 0){

		$("#header").append(HTMLskillsStart);	

		for (skill in bio.skills) {

		var formattedSkills = 
			HTMLskills.replace("%data%", bio.skills[skill]);			

			$("#skills:last").append(formattedSkills);

		}	
	}	
}	



bio.display();



var work = {
	"job" : [
		{
		"employer":"MapLight",	
		"title":"Research Associate",
		"location":"Berkeley, CA",
		"dates":"June 2012 - present",
		"description": "Tracked and reviewed primary source legislative data for federal and state level bills. Provided extensive research on organizational relationships of major campaign contributors. Assisted in QA of campaign finance data for the Voter’s Edge site, utilizing spreadsheets,pivot tables, and querying databases."
		},
		{
		"employer":"Oakland Local",
		"title": ["Writer", "Illustrator", "Production Editor"],
		"location":"Oakland, CA",
		"dates":"Jan 2013 - June 2013",
		"description":"Pitched and contributed articles, illustrations, and infographics on local events. Copy edited and formatted content for online publication. Extensive research and document gathering on Oakland Police Department personnel and policy"
		},
		{
		"employer":"Capitol Weekly",
		"title": "Reporter",
		"location":"Sacramento, CA",
		"dates":"June 2011 - Dec 2012",
		"description": "Provided coverage of state level politics, conducting frequent interviews with government officials and community leaders. Familiar with resources available through the CA Secretary of State, Legislative Analysts Office, and Fair Political Practices Commission"
		}
	]
}

work.display = function(){
	
	for (jobs in work.job){

	$("#workExperience").append(HTMLworkStart);


	var formattedEmployer = 
	HTMLworkEmployer.replace("%data%", work.job[jobs].employer);

	var formattedTitle = 
	HTMLworkTitle.replace("%data%", work.job[jobs].title);				

	$(".work-entry:last").append(formattedEmployer + formattedTitle);

	var formattedDates = 
		HTMLworkDates.replace("%data%", work.job[jobs].dates);

	$(".work-entry:last").append(formattedDates);


	var formattedLocation = 
	HTMLworkLocation.replace("%data%", work.job[jobs].location);	

	$(".work-entry:last").append(formattedLocation);

	var formattedDescription = 
	HTMLworkDescription.replace("%data%", work.job[jobs].description);	

	$(".work-entry:last").append(formattedDescription);

	}
}

work.display();

var projects = {
	"projects" : [
		{
		"title" : "Logos",
		"dates" : "June 2013 - present",	
		"description" : "Designed logos for local bands and organizations",
		"images" : ["images/beeberry.png", "images/ORCA.png"]
		},
		{
		"title" : "Infographics",
		"dates" : "June 2014 - Nov 2014",	
		"description" : 'Designed inforgraphics for online non-partisan voter guide',
		"images" : ["images/GMOgraphic.jpg"]
		},	
	]

}

projects.display = function(){
	for (project in projects.projects){

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = 
			HTMLprojectTitle.replace("%data%", projects.projects[project].title);

		$(".project-entry:last").append(formattedTitle);

		var formattedDates = 
			HTMLprojectDates.replace("%data%", projects.projects[project].dates);			

		$(".project-entry:last").append(formattedDates);

		var formattedDescription = 
			HTMLprojectDescription.replace("%data%", projects.projects[project].description);			

		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0){	

			for (image in projects.projects[project].images){

				var formattedImages = 
					HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);			

			 	$(".project-entry:last").append(formattedImages);

			}	
	    }
			
	}
  }

projects.display();



var education = {
	"school" : [
		{
		"name" : "University of California, Merced",
		"location" : "Merced, CA",
		"degree" : "Bachelor of Arts",
		"majors" : ["Political Science"],
		"dates" : 2011
		},
		{
		"name" : "Pasadena City College",
		"location" : "Pasadena, CA",
		"degree" : "General Education",
		"majors" :[],
		"dates" : 2008
		}
	],

	"onlineCourses" : [
		{
		"title" : "Udacity",
		"course" : "Front End Web Developer Nanodegree",
		"date" : 2015,
		"url": "https://udacity.com/"
		},

		{
		"title" : "Knight Center for Journalism in the Americas",
		"course" : "Data-Driven Journalism: The Basics",
		"date" : "2014",
		"url" :"https://knightcenter.utexas.edu/"
		}
	]
}


education.display = function (){

	for(schools in education.school){

		$("#education").append(HTMLschoolStart);

		var formattedSchool =
			HTMLschoolName.replace("%data%", 
				education.school[schools].name);
		
		var formattedDegree =
			HTMLschoolDegree.replace("%data%", 
				education.school[schools].degree);	

		$(".education-entry:last").prepend(formattedSchool + formattedDegree);

		var formattedDate =
			HTMLschoolDates.replace("%data%", 
				education.school[schools].dates);

		$(".education-entry:last").append(formattedDate);

		var formattedLocation =
			HTMLschoolLocation.replace("%data%", 
				education.school[schools].location);

		$(".education-entry:last").append(formattedLocation);

		if (education.school[schools].majors.length > 0) {

			for (major in education.school[schools].majors){

				var formattedMajor =
					HTMLschoolMajor.replace("%data%", 
						education.school[schools].majors[major]);

				$(".education-entry:last").append(formattedMajor);

			}

		}
	}


	
	if (education.onlineCourses.length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);

		for (online in education.onlineCourses){
		

			var formattedOnlineTitle =
				HTMLonlineTitle.replace("%data%", 
					education.onlineCourses[online].course);

			var formattedOnlineSchool =
				HTMLonlineSchool.replace("%data%", 
					education.onlineCourses[online].title);

			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

			var formattedOnlineDates =
				HTMLonlineDates.replace("%data%", 
					education.onlineCourses[online].date);

			$(".education-entry:last").append(formattedOnlineDates);

			var formattedOnlineURL =
				HTMLonlineURL.replace("%data%", 
					education.onlineCourses[online].url);

			$(".education-entry:last").append(formattedOnlineURL);			


		}
	}				
}

education.display();


$("#topContacts").before(internationalizeButton);

$("#mapDiv").append(googleMap);

