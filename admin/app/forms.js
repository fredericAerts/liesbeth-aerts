$(document).ready(function() {
  var $outreachForm = $("#outreach-form");
  var $advocacyForm = $("#advocacy-form");

  $.validate({
    onSuccess : function($form) {
      jQuery.post('/api/outreach.php/outreach', JSON.stringify(getParams($form)));

      window.location.href("/admin");

      return false; // Will stop the submission of the form
    },
  });
});

function getParams($form) {
  var nameValMap = Array.prototype.slice.call($form.find("[name]")).reduce(function(acc, curr) {
    acc[$(curr).attr("name")] = $(curr).val();

    return acc;
  }, {});

  return nameValMap;
}
