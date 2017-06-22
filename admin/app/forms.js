$(document).ready(function() {
  initForm("outreach");
  initForm("advocacy");

  initItemList("outreach");
  initItemList("advocacy");
});

function initForm(itemType) {
  $.validate({
    form : '#' + itemType + '-form',
    onSuccess : function($form) {
      var itemId = $form.find('#id').val();
      var params = JSON.stringify(getParams($form));
      var baseUrl = '/api/' + itemType + '.php/' + itemType;

      if (!itemId) {
        // POST NEW ITEM
        jQuery.post(baseUrl, params, function() {
          clearForm($form);
          initItemList(itemType);
          alert("item added!");
        });
      } else {
        // EDIT ITEM
        $.ajax({
          url: baseUrl + '/' + itemId,
          type: 'PUT',
          data: params,
          success: function(result) {
            clearForm($form);
            alert("item updated!");
            initItemList(itemType);
          }
        });
      }

      return false; // Will stop the submission of the form
    },
  });
}

function getParams($form) {
  var nameValMap = Array.prototype.slice.call($form.find("[name]")).reduce(function(acc, curr) {
    acc[$(curr).attr("name")] = $(curr).val();

    return acc;
  }, {});

  return nameValMap;
}

function initItemList(itemType) {
  var $itemList = $(".js-list-group[data-items='"+ itemType +"']");
  $itemList.html('');
  jQuery.get('/api/' + itemType + '.php/' + itemType, function (response) {
    var items = JSON.parse(response).data;
    items.forEach(function(item) {
      var $item = $('<button type="button" class="list-group-item">' + item.title + '<i class="glyphicon glyphicon-remove pull-right" style="line-height:20px;"></i></button>');
      $item.on('click', '.glyphicon-remove', function(e) {
        if (window.confirm("Do you really want to delete item: " + item.title + "?")) {
          deleteItem(item.id, itemType)
        }
        e.stopPropagation();
        e.preventDefault();
      });
      $item.on('click', function() {
        editItem(item.id, itemType)
      });
      $itemList.append($item);
    });
    $itemList.parent().find('.js-item-count').html(items.length);
  });
}

function deleteItem(itemId, itemType) {
  $.ajax({
    url: '/api/' + itemType + '.php/' + itemType + '/' + itemId,
    type: 'DELETE',
    success: function(result) {
      initItemList(itemType);
      clearForm($("#" + itemType + "-form"));
    }
  });
}

function editItem(itemId, itemType) {
  jQuery.get('/api/' + itemType + '.php/' + itemType + '/' + itemId, function (response) {
    var itemData = JSON.parse(response).data[0];
    populateForm(itemData, itemId, itemType);
  });
}

function clearForm($form) {
  $form.find('#id').val('');
  $form.find("[name]").val('');
}

function populateForm(itemData, itemId, itemType) {
  itemData.date = itemData.date.replace(/-/g, '/');
  $("#" + itemType + "-form").find('#id').val(itemId);
  Array.prototype.slice.call($("#" + itemType + "-form").find("[name]")).forEach(function(el) {
    $(el).val(itemData[$(el).attr('name')]);
  });
}
