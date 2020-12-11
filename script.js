var getQueryParams = function (location) {
  var queryString = location.search.substring(1);
  var qs = queryString.split("&").map(function (q) {
    return q.split("=")[1];
  });
  var chapter = qs[0];
  var article = qs[1];
  return { chapter:chapter, article:article };
};

var toggleSlideMenu = function () {
  $("#menu").toggleClass("open");
};
