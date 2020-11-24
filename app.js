

// Scoping jQuery
(function($) {

  $(document).ready(function() {

    // Adding a list item to the todo list
    $("#add-todo").click(function() {

      // Checks if the user has added valid input
      if($("#todo-input").val() === "") {
        alert("No valid input added, please try again");
        return;
      }

      $("#todo-list").append($('<li><i class="fas fa-check"></i>' + $("#todo-input").val() + '<i class="fas fa-times"></i></li>'));

      // Empty input field after submit
      $("#todo-input").val("");

    });
  });

  // Remove list item from the todo-list
  $(document).on("click", "i.fa-times", function() {
    $(this).parent().remove();
  });

})(jQuery);