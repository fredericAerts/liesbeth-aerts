$(document).ready(function () {
  var $listOutreach = $(".js-list-group[data-items='outreach']");
  jQuery.get('/api/outreach.php/outreach', function (response) {
    JSON.parse(response).data.forEach(function(item) {
      var $item = $('<button type="button" class="list-group-item">' + item.title + '</button>');
      $item.click(function() {
        if (window.confirm("Do you really want to de item: " + item.title + "?")) {
          console.log('delete item:' + item.id);
        }
      });
      $listOutreach.append($item);
    });
  });
});
