console.log('in js');

$(document).ready(function () {
    console.log('in jQuery');
    setupClickListeners();
    getTodo();
    $('#view-todo').on('click', '.delete-btn', deleteTodo);


});

function setupClickListeners() {
    $("#add-task-button").on('click', function () {
        console.log('button clicked');
        // get user input and put in an object
        let todoToSend = {
            task_name: $('#task-name-in').val(),
            task_type: $('#task-type-in').val(),
            task_due: $('#task-due-in').val(),
            task_status: $('#task-completed').val(),
          };
              // call saveTodo with the new object
              console.log('todoToSend', todoToSend)
    });
}

//GET TODO
function postTodo(newTodo) {
    $.ajax({
        method: 'POST',
        url: '/todo',
        data: newTodo
    }).then((response) => {
        console.log('POST new todo');
        getTodo();
    }).catch(function (error) {
        console.log(error);
    })
}

//GET TODO
function getTodo() {
    console.log('in getTodo');
    $('#view-todo').empty();
    $.ajax({
        type: 'GET',
        url: '/todo'
    }).then(function (response) {
            console.log('aaah', response);
            appendTodo(response);
           /*  //append to dom 
            for (let i = 0; i < response.length; i++) {
                $('#view-todo').append(`
            <tr data-todo-id="${response[i].id}">
                <td>${response[i].name}</td>
                <td>${response[i].type}</td>
                <td>${response[i].date}</td>
                <td><button class ="delete-btn">DELETE</button></td>
            `);

            } */
        }).catch(function (error) {
            console.log('error in GET', error);
        });
    };

function saveTodo(newTodo) {
    console.log('in newTodo', newTodo);
    // ajax call to server to get koalas
    $.ajax({
        method: 'POST',
        url: '/todo',
        data: newTodo
    }).then(function (response) {
        console.log('response', response);
        getTodo();

    }).catch(function (error) {
        console.log('error in post', error);

    });
}

    //APPEND TO DOM
    function appendTodo(response) {
        $('#view-todo').empty();
        for (let i = 0; i < response.length; i++) {
            let todo = response[i];
            let $tr = $('<tr></tr>');
            $tr.data('todo', todo.id);
            $tr.append(`<td>${todo.task_name}</td>`);
            $tr.append(`<td>${todo.task_type}</td>`);
            $tr.append(`<td>${todo.task_due}</td>`);
            $tr.append(`<td><button class ="completeBtn">COMPLETE</button></td>`);
            $tr.append(`<td><button class ="deleteBtn">DELETE</button></td>`);
        
            $('#view-todo').append($tr);
        };

        function deleteTodo (){
            let todoDelete = $(this).closest('tr').data('todo');
            console.log(todoDelete);
            $.ajax({
               method: 'DELETE',
               url: `/todo/${todoDelete}` //change the URL based on what you want to delete
               //data: {id: idToDelete} will not work in DELETE
           }).then(function (response) {
               console.log(response);
               getTodo;
       
           }).catch(function (error) {
       
           });
   
   
        };