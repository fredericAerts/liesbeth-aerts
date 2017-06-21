$(document).ready(function() {
  $("#outreach-form #audience").typeahead({
    source: [
      "Society",
      "Kids",
      "Patients",
      "Clinicians",
      "Scientists"
    ]
  });

  $("#outreach-form #medium").typeahead({
    source: [
      "Event",
      "newspaper",
      "radio"
    ]
  });

  $("#advocacy-form #topic").typeahead({
    source: [
      "proefdieren",
      "wetenschap & beleid",
      "communicatie"
    ]
  });
});
