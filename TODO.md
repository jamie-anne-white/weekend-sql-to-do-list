SET UP DATABASE
    [x] name properly
    [x] create a table 
        [x] try some dummy data
        

MAKE BASE FILES
    [x] server
        [x] modules
            [x] pool.js
        [x] public
            [x] scripts
                [x] client.js
            [x] vendors
                [x] jquery
            [x] index.html (NO FOLDER)
        [x] routes
            [x] todo_router
        [x] styles
            [x] style.css
        [x] server.js
    [x].gitignore
    [x] database.sql
        [x] MAKE SURE THINGS MATCH!


LINK/ROUTE BASE FILES
    [] test js and jquery
    [x] npm install
    [x] npm install express
        [x]     "start": "node server/server.js"
    [x] npm install body-parser
    [x] npm install pg 
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
                [] completed column 
                [] delete button
                [] complete button  
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
         
