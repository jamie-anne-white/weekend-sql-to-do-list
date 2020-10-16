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
    [x] test js and jquery
    [x] npm install
    [x] npm install express
        [x]     "start": "node server/server.js"
    [x] npm install body-parser
    [x] npm install pg 
        [x] LINK ALL FILES TO THE ABOVE


[] HTML
        [x] input for tasks
            [x] input fields with 
                [x] task name
                [x] task type 
                [x] due date
            [x] submit button
        [x] table to display data for 
                [x] task name
                [x] task type 
                [x] due date
                [x] completed column 
                [x] delete column
                    [] BUTTONS WILL BE FROM JQUERY
                        [] delete button for all data in the row
                        [] completed button for all data in the row 


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
         
