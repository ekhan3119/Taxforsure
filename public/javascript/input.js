$(document).ready(function () {
    // Getting references to the name input and time container, as well as the table body
    var MonTInput = $("#MonT");
    var TueTInput = $("#TusT");
    var WedTInput = $("#WedT");
    var ThuTInput = $("#ThusT");
    var FriTInput = $("#FriT");
    var SatTInput = $("#SatT");
    var SunTInput = $("#SunT");

    var rateInput = $("#rateHourly");
    $(document).on("submit", "#savaTime", handleTimeFormSubmit);
    $(document).on("click", "rate", handlerateButtonPress);


    function handleTimeFormSubmit(event)
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!MonTInput.val().trim().trim()) {
        return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertTime({
        duration: MonTInput
            .val()
            .trim()
    });
}
  function upsertTime(TimeData) {
        $.post("/api/index", TimeData)
            .then(getTimeData);
    }


