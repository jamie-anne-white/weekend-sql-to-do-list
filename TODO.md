SET UP DATABASE
    [] name properly
    [] create a table 
        [] try some dummy data
        

MAKE BASE FILES
    [] server
        [] modules
            [] pool.js
        [] public
            [] scripts
                [] client.js
            [] vendors
                [] jquery
            [] index.html (NO FOLDER)
        [] routes
            [] todo_router
        [] styles
            [] style.css
        [] server.js
    [].gitignore
    [] database.sql
        [] MAKE SURE THINGS MATCH!


LINK/ROUTE BASE FILES
    [] test js and jquery
    [] npm install
    [] npm install express
    [] npm install body-parser
    [] npm install pg 
        [] LINK ALL FILES TO THE ABOVE


[] HTML
        [] input for tasks
            [] input fields with 
                [] task name
                [] task type 
                [] due date
        [] table to display data for 
                [] task name
                [] task type 
                [] due date
                [] complete column 
                [] delete 
        [] delete button for all data in the row


ROUTES !! DO ONE AT A TIME AND TEST
    [] GET
        [] client.js --> SEE CLIENT JS
        [] router.js
    [] POST
        [] client.js --> SEE CLIENT JS
        [] router.js
    [] DELETE
        [] client.js --> SEE CLIENT JS
        [] router.js
    [] PUT
        [] client.js --> SEE CLIENT JS
        [] router.js 

CLIENT JS
    [] click listeners
        [] GET
            [] append to the DOM/AJAX
        [] POST
        [] DELETE
            [] make another function for delete
                [] AJAX 
            [] remove from the DOM
            [] make sure it's not in the database 
         
