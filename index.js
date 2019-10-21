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
  $('.main').on('click', '.zee-home', function (event) {
    event.preventDefault();
  });
  renderStartPage();
};

const renderStartPage = function () {
  $('main').html (`
  <h1>Zee Celest</h1>
  <form class="launchStartPage">
  
  </form>
  <h2>WEB DEVELOPER</h2>`
    ),
}

function handleNewPageLoad () {
  renderStartPage();
}