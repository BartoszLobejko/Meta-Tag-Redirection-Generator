# Meta Tag Redirection Generator
## Perfect for static hosting websites

Generator takes as input data.json file with all your Source and Destination redirection and create a folder structure based on source urls.
Index.html file is added to each folder with your desired template that contains redirection meta tag, javascript and link. 

The goal of this tool is to have easy and simple tool to fix old URLs indexed by google.

Tip: Create spreadsheet with two columns: src and dest and export as CSV file, then use below website to convert it to JSON file
[http://www.convertcsv.com/csv-to-json.htm](http://www.convertcsv.com/csv-to-json.htm)


## Setup

- Install grunt `npm i --save-dev`
- Add your records to data.json file
- Update source url base in Gruntfile.js to match your records 
(all your src URLs should have the same base)
- run  `grunt`

Author
- Bartosz Lobejko 
- bartosz@lobejko.com 
- @BartoszLobejko