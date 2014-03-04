/**
 * @author Chidinma Irene Nwoye
 */

console.log("My Javascript is working"); //I'm testing my javascript file

function dataUp(uEMPDATA){            //uEMPDATA is the local name for the JSON file
	
	console.log(uEMPDATA);        //I'm outputting the JSON file to be sure the function dataUp works on my javascript
	
	var gDataTable = new google.visualization.DataTable();
	
	//When I add columns, the 1st parameter is the data type in that column
	// The 2nd parameter is the name of the column
	gDataTable.addColumn('string', uEMPDATA.columns[0]);
	gDataTable.addColumn('number', uEMPDATA.columns[1]);
	
	gDataTable.addRows(uEMPDATA.rows);
	
	
	var ChartChoices = {                           //create options object to actually customize the look of our chart
          title: "Unemployment Since 1980"       //This is a configuration option
        };
	//tells Google Visualization to create a line chart and give it to the
	var ThisChart = new google.visualization.LineChart(document.getElementById('newChartDiv')); //I've created type of chart e.g. BarChart to LineChart etc
	ThisChart.draw(gDataTable,ChartChoices);



}

function dataUp2(uEMPDATA){            //uEMPDATA is the local name for the JSON file
	
	console.log(uEMPDATA);        //I'm outputting the JSON file to be sure the function dataUp works on my javascript
	
	var gDataTable = new google.visualization.DataTable();
	
	//When I add columns, the 1st parameter is the data type in that column
	// The 2nd parameter is the name of the column
	gDataTable.addColumn('string', uEMPDATA.columns[0]);
	gDataTable.addColumn('number', uEMPDATA.columns[1]);
	
	gDataTable.addRows(uEMPDATA.rows);
	
	
	var ChartChoices = {                           //create options object to actually customize the look of our chart
          title: "Unemployment Since 1980"       //This is a configuration option
        };
	//tells Google Visualization to create a line chart and give it to the
	var ThisChart = new google.visualization.LineChart(document.getElementById('newChartDiv2')); //I've created type of chart e.g. BarChart to LineChart etc
	ThisChart.draw(gDataTable,ChartChoices);



}


function GoogleUp() {

	console.log("I've put up Google!");
	
	// Instead of loading data from a static json file
	//I'm going to load it from Google Fusion Table	
	
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1L1rmYMaUAgK7tXaB9vt28njZA3ZAj4k8zHizBP9N+WHERE+DATE>'1971-12-01'&key=AIzaSyCgfAUYUUuX8vurL0WtKGYRGho11LEnsPI", dataUp, "json"); //I'm retrieving my the json 
	
	//We're including a second visualization and so we duplicated the function that loads data and created a new div in my html file
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1L1rmYMaUAgK7tXaB9vt28njZA3ZAj4k8zHizBP9N+WHERE+DATE>'1971-12-01'&key=AIzaSyCgfAUYUUuX8vurL0WtKGYRGho11LEnsPI", dataUp2, "json");
	
	
	}


function docUp() {

	console.log("My page is up!");

	//I'm loading the google visualization library
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "GoogleUp"
	});

}


$(document).ready(docUp);  //I've used $(document).ready to call my function, docUp


