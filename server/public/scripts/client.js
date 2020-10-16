console.log('in js');

$(document).ready(function () {
    console.log('in jQuery');
    setupClickListeners();


});

function setupClickListeners() {
    $("#add-task-button").on('click', function () {
        console.log('button clicked');
    });
}