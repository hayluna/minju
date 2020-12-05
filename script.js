var getQueryParams = function (location) {
  var queryString = location.search.substring(1);
  var qs = queryString.split('&').map(function (q) {
    return q.split('=')[1];
  });
  var chapter = qs[0];
  var article = qs[1];
  return { chapter, article };
};

var toggleSlideMenu = function () {
  if ($('#side-menu').hasClass('open')) {
    $('#side-menu').removeClass('open');
    $('#side-menu').css('color', 'transparent');
    // $('#side-menu').css('width', '0px');
  } else {
    $('#side-menu').addClass('open');
    // $('#side-menu').css('width', '600px');
    // $('#side-menu').css('width', '0px');
  }
};
