

// Scoping jQuery
(function($) {

  $(document).ready(function() {
    $("#add-todo").click(function() {
      // getting the todo-list
      $list = $("#todo-list");

      // getting the user input
      $input = $("#todo-input").val();

      // creating a list item
      $todo = $('<li><i class="fas fa-check"></i>' + $input + '<i class="fas fa-times"></i></li>');

      // append list item to the list
      $list.append($todo);
    });
  });
  
})(jQuery);