

// Scoping jQuery
(function($) {

  $(document).ready(function() {

    // Adding a list item to the todo list
    $("#add-todo").click(function() {

      $("#todo-list").append($('<li><i class="fas fa-check"></i>' + $("#todo-input").val() + '<i class="fas fa-times"></i></li>'));

      // Empty input field after submit
      $("#todo-input").val("");

    });
  });

})(jQuery);