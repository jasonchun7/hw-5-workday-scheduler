// current day displayed using moment.js
$('#currentDay').text(moment().format('dddd MMMM Do'));

// variable for save button for click function
var saveBtn = $('.saveBtn');

// color coded for timeblocks to be in the past, present, or future
function timeBlockColor() {
    var hour = moment().hours();

    $('.time-block').each(function() {
        var currHour = parseInt($(this).attr('id'));

        if (currHour > hour) {
            $(this).addClass('future');
        } else if (currHour === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })
};

// save button function to save to local storage
saveBtn.on('click', function() {
    var time = $(this).siblings('.hour').text();
    var description = $(this).siblings('.description').val();

    localStorage.setItem(time, description);
});


// function to keep saved events in local storage even after refresh
function events() {
    $('.hour').each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        if(currPlan !== null) {
            $(this).siblings('.description').val(currPlan);

        }
    })
};

timeBlockColor();
events();