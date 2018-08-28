
function handleFiles(files) {
  // Check for the various File API support.
  if (window.FileReader) {
      // FileReader are supported.
      alert('supported');
  } else {
      alert('FileReader are not supported in this browser.');
  }
}

// get date info
var d = new Date();
var date = d.getDate();
var month = d.getMonth() + 1;
var year = d.getYear() + 1900;

writeDate();


var filename = getFileName();
var fs = require('fs');
var file = fs.readFileSync(filename, 'utf8');
showHolidays(file);

// get file name
function getFileName() {
    var dd = "" + date;
    if(date < 10)
        dd = "0" + date;
    var mm = "" + month;
    if(month < 10)
        mm = "0" + month;
    today = "" + year + "-" + mm + "-" + dd;
    // var filename = today + ".json";
    return "csv/" + year + "-" + mm + "-" + dd + ".csv";
}

// <?php
//     echo "<html><body><table>\n\n";
// $f = fopen("so-csv.csv", "r");
// while (($line = fgetcsv($f)) !== false) {
//     echo "<tr>";
//     foreach ($line as $cell) {
//         echo "<td>" . htmlspecialchars($cell) . "</td>";
//     }
//     echo "</tr>\n";
// }
// fclose($f);
// echo "\n</table></body></html>";
// ?>

function showHolidays2() {

    for(var current = 0; current < 5; current++) {
        // holidays will print in <section> in html file
        var myArticle = document.querySelector('section');
        var item = document.createElement('h1');
        item.textContent = "asdf";
        myArticle.appendChild(item);
    }
}

// displays the holidays to page
function showHolidays(data) {

    // array of all the holidays and img
    var holiday_data = data.split(/\r?\n|\r/);

    // loop thru holidays and print each holiday along w/ its date
    // and then append it to myArticle, which will be appended to
    // <section>
    var len = holiday_data.length;
    for (var row = 0; row < len; row++) {
        // separates holiday_data into [img, holiday] arrays
        var row_data = holiday_data[row].split(",");

        for(var current = 0; current < row_data.length; current++) {
            // holidays will print in <section> in html file
            var myArticle = document.querySelector('section');
            var item = document.createElement('h1');
            // print holiday at index i to webpage
            item.textContent = row_data[i];
            myArticle.appendChild(item);
            // console.log(row_data[current]);
        }
    }
}

// write today's date at the top
function writeDate() {
    // write date
    var jumbo = document.querySelector('div.jumbotron');
    var myPara = document.createElement('p');
    myPara.textContent = "Today's date: " + month + ' - ' + date + ' - ' + year;
    jumbo.appendChild(myPara);

}


// var fs = require('fs');
// var file = fs.readFileSync(filename, 'utf8');
//
// // array of all json {obj's} in file
// obj = JSON.parse(file);
//
// // grab references to the <section> element and store it in variable
// var section = document.querySelector('section');
//
// // show holidays
// for(var i = 0; i < obj.length; i++) {
//     // console.log(obj[i].img + "asdfk;las " + obj[i].holiday);
//
//     // holidays will print in <section> in html file
//     var myArticle = document.createElement('section');
//     var myPara1 = document.createElement('h1');
//     // print holiday at index i to webpage
//     myPara1.textContent = jsonObj[i].holiday;
//     myArticle.appendChild(myPara1);
//     section.appendChild(myArticle);
// }



// // create a request
// var request = new XMLHttpRequest();

// // open a new request 
// request.open('GET', filename);

// //setting the responseType to text, so that XHR knows that the server will be returning text
// request.responseType = 'json';
// request.send();

// // waiting for the response to return from the server, then dealing with it
// request.onload = function() {
//     var holidays = request.response;
//     jsonObj = JSON.parse(filename);
//     showHolidays(jsonObj);
// }


// function showHolidays(jsonObj) {

//     // loop thru holidays and print each holiday along w/ its date
//     // and then append it to myArticle, which will be appended to
//     // <section>
//     for (var i = 0; i < jsonObj.length; i++) {

//         // holidays will print in <section> in html file
//         var myArticle = document.createElement('section');
//         var myPara1 = document.createElement('h1');
//         // print holiday at index i to webpage
//         myPara1.textContent = jsonObj[i].holiday;
//         myArticle.appendChild(myPara1);
//         section.appendChild(myArticle);

//       }
      
//     }
// }



// $(document).ready(function(){
// 	$('#load_data').click(function(){
// 		$.ajax({	// define ajax request
// 			url : 'csv/2018-01-01.csv',
// 			dataType : "text",	// get data in text format
// 			success : function(data) {	// function is called when request is completed successfully
// 				var holiday_data = data.split(/\r?\n|\r/);	// split data into rows
// 				// bootstrap class
// 				var table_data = '<table class = "table table-bordered table-striped>';
				
// 				// loop thru rows
// 				for(var row = 0; row < holiday_data.length; row++) {
// 					// loop thru current row
// 					var cell_data = holiday_data[row].split(",");	// img , holiday
// 					table_data += '<tr>';	// store table row tag to table_data
// 					for(var current = 0; current < cell_data; current++){
// 						if(row === 0)	{// write header in first row
// 							table_data += '<th>' + cell_data[current] + '</th>';
// 						} else {
// 							table_data += '<td>' + cell_data[current] + '</td>';
// 						}

// 					}
// 				}
// 				table_data += '</tr>';	// close table row

// 			}
// 			table_data += '</table>';	// close table
// 			$('#holiday').html(table_data);
// 		});
// 	});
// });