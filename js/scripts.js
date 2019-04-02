$(function() {
  $("#grocery-form").submit(function(event) {
    event.preventDefault();
    var groceries = ["item1", "item2", "item3", "item4", "item5"];
    var groceryList = [];

    groceries.forEach(function(grocery) {
      var item = $("input#" + grocery).val();
      groceryList.push(item);
      console.log("groceries", groceries);
    });

    console.log("groceryList", groceryList);

    groceryList.forEach(function(grocery) {
      var newGrocery = $(".groceries-display").append("<li>" + groceryList.charAt(0).toUpperCase() + groceryList.slice(1) + "</li>").val();
      newGrocery.sort();
    });
    console.log("newGrocery", newGrocery);

  });
});

// $(function() {
//   $("#grocery-form").submit(function(event) {
//     var groceries = ["item1", "item2", "item3", "item4", "item5"];
//     console.log("1", groceries);
//
//     groceries.forEach(function(grocery) {
//       var groceryInput = $("input#" + grocery).val();
//       $(".groceries-display").append("<li>" + groceryInput.charAt(0).toUpperCase() + groceryInput.slice(1) + "</li>").val();
//
//       console.log("2", groceryInput);
//     });
//     event.preventDefault();
//   });
// });
