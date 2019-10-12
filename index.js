//this function moves user to section of page per link clicked
const aboutZee = function (obj) {
  console.log(aboutZee);
  $('#js-nav-link').on('click', function (event) {
    event.preventDefault();
  });
  aboutZee();
};

//this function will allow user to return to home/top of screen
const handleReturnHomeButton = function () {
  console.log(handleReturnHomeButton);
  $('.zee-home').on('click', function (event) {
    event.preventDefault();
  });
  handleReturnHomeButton();
};

const renderStartPage = function () {

}