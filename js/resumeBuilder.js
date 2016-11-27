/*
Data Section
 */

var bio = {
	"name" : "My name",
	"role" : "My Job",
	"contacts" : {
		"mobile" : "00000000000",
		"email" : "email@email.com",
		"github" : "@mygit",
		"location" : "Naharyia"
	},
	"profile_pic" : "http://placehold.it/450x350",
	"Welcome_msg" : "Hey! looking for a job",
	"skills" : ["skill1", "skill2", "skill3"]
}

var work = [
	{
		"employer" : "employer1",
		"title" : "title1",
		"dates" : "In Progress",
		"description" : "Job description",
		"location" : "Haifa"
	},
	{
		"employer" : "employer2",
		"title" : "title1",
		"dates" : "2015",
		"description" : "Job description",
		"location" : "Tel Aviv"
	}
]

var education = [{
	"name" : "School1",
	"location" : "Jerusalem",
	"dates" : "2011",
	"degree" : "degree",
	"major" : ["major1", "major2"]
},
{
	"name" : "School2",
	"location" : "Ramat Gan",
	"dates" : "2010",
	"degree" : "degree",
	"major" : ["major1", "major2"]
}];

var projects = [{
	"title" : "My project.com1",
	"dates" : "October1",
	"description" : "project desc1",
	"image" : "http://placehold.it/250x250"
},
{
	"title" : "My project.com2",
	"dates" : "October2",
	"description" : "project desc2",
	"image" : "http://placehold.it/250x250"
},
{
	"title" : "My project.com3",
	"dates" : "October3",
	"description" : "project desc3",
	"image" : "http://placehold.it/250x250"
}];


/*
Functions Section
 */

function fromJsonToHtml(pageElement, JSONelement)	{
	var formattedElement = pageElement.replace("%data%", JSONelement);
	return formattedElement;
}

function displayWork(formattedElement)	{
	$(".work-entry:last").append(formattedElement);
}

function displayContactInfo(formattedElement)	{
	$("#topContacts").append(formattedElement);
}

function displayEducation(formattedElement)	{
	$(".education-entry:last").append(formattedElement);
}

function displayProject(formattedElement)	{
	$(".project-entry:last").append(formattedElement);
}

/*
Rest of code
 */

//converting to HTML and appending all the personal details and contacts

var formattedName = fromJsonToHtml(HTMLheaderName, bio.name);
var formattedRole = fromJsonToHtml(HTMLheaderRole, bio.role);

var formattedMobile = fromJsonToHtml(HTMLmobile, bio.contacts.mobile);
var formattedEmail = fromJsonToHtml(HTMLemail, bio.contacts.email);
var formattedGitHub = fromJsonToHtml(HTMLgithub, bio.contacts.github);
var formattedLocation = fromJsonToHtml(HTMLlocation, bio.contacts.location);

var formattedPictureUrl = fromJsonToHtml(HTMLbioPic, bio.profile_pic);
var formattedWelcomeMsg = fromJsonToHtml(HTMLwelcomeMsg, bio.Welcome_msg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

displayContactInfo(formattedMobile);
displayContactInfo(formattedEmail);
displayContactInfo(formattedGitHub);
displayContactInfo(formattedLocation);

$("#header").append(formattedPictureUrl);
$("#header").append(formattedWelcomeMsg);

//converting to HTML and appending all the skills

if (bio.skills.length > 0)	{
	$("#header").append(HTMLskillsStart);
	var formattedSkill, i;
	for (skill in bio.skills)	{
		formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#header").append(formattedSkill);
	}
}

//converting to HTML and appending all the jobs

for (var eachWork = 0; eachWork < work.length; eachWork++)	{
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = fromJsonToHtml(HTMLworkEmployer, work[eachWork].employer);
	var formattedTitle = fromJsonToHtml(HTMLworkTitle, work[eachWork].title);
	displayWork(formattedEmployer + formattedTitle);
	var formattedDates = fromJsonToHtml(HTMLworkDates, work[eachWork].dates);
	displayWork(formattedDates);
	var formattedLocation = fromJsonToHtml(HTMLworkLocation, work[eachWork].location);
	displayWork(formattedLocation);
	var formattedDescription = fromJsonToHtml(HTMLworkDescription, work[eachWork].description);
	displayWork(formattedDescription);
}


//converting to HTML and appending all the projects
for (var eachProject = 0; eachProject < projects.length; eachProject++)	{
	$("#projects").append(HTMLprojectStart);
	var formattedProjectTitle = fromJsonToHtml(HTMLprojectTitle, projects[eachProject].title);
	displayProject(formattedProjectTitle);
	var formattedProjectDates = fromJsonToHtml(HTMLprojectDates, projects[eachProject].dates);
	displayProject(formattedProjectDates);
	var formattedPorjectDescription = fromJsonToHtml(HTMLprojectDescription, projects[eachProject].description);
	displayProject(formattedPorjectDescription);
	var formattedProjectImage = fromJsonToHtml(HTMLprojectImage, projects[eachProject].image);
	displayProject(formattedProjectImage);
}


//converting to HTML and appending education section
for (var eachEducation = 0; eachEducation < education.length; eachEducation++)	{
	$("#education").append(HTMLschoolStart);
	var formattedSchoolName = fromJsonToHtml(HTMLschoolName, education[eachEducation].name);
	displayEducation(formattedSchoolName);
	var formattedSchoolDegree = fromJsonToHtml(HTMLschoolDegree, education[eachEducation].degree);
	displayEducation(formattedSchoolDegree);
	var formattedSchoolDates = fromJsonToHtml(HTMLschoolDates, education[eachEducation].dates);
	displayEducation(formattedSchoolDates);
	var formattedSchoolLoctation = fromJsonToHtml(HTMLschoolLocation, education[eachEducation].location);
	displayEducation(formattedSchoolLoctation);
	var formattedSchoolMajor = fromJsonToHtml(HTMLschoolMajor, education[eachEducation].major);
	displayEducation(formattedSchoolMajor);
}


$('#mapDiv').append(googleMap);