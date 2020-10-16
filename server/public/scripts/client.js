console.log('in js');

$(document).ready(function () {
    console.log('in jQuery');
    setupClickListeners();
    getTodo();


});

function setupClickListeners() {
    $("#add-task-button").on('click', function () {
        console.log('button clicked');
        // get user input and put in an object
    // let todoToSend = {
    //     task_name: $('#task-name-in').val(),
    //     task_type: $('#task-type-in').val(),
    //     task_due: $('#task-due-in').val(),
    //     task_status: $('#task-completed').val(),
    //   };
    //       // call saveTodo with the new object
    //       console.log('todoToSend', todoToSend)
    });
}

//GET TODO
function getTodo() {
    console.log('in getTodo');
    $('#view-todo').empty();
    $.ajax({
        type: 'GET',
        url: '/todo'
    }).then(function (response) {
            console.log('in getTodo GET', response);
        }).catch(function (error) {
            console.log('error in GET', error);
        });
    };