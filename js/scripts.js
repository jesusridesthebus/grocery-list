$(function() {
  $("#grocery-form").submit(function(event) {
    event.preventDefault();
    var groceries = ["item1", "item2", "item3", "item4", "item5"];
    var groceryList = [];

    groceries.forEach(function(grocery) {
      var groceryInput = $("input#" + grocery).val();
      groceryList.push(groceryInput);
    });

    groceryList = groceryList.sort();

    groceryList.forEach(function(grocery) {
      $(".groceries-display").append("<li>" + grocery.charAt(0).toUpperCase() + grocery.slice(1) + "</li>").val();
    });
  });
});