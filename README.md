# ToDoey    

---    

## A small todo application for:  
Adding items to a list.   
Completing a todo.  
And removing todos from the list.  

    <ul>
      <li>TODO</li>
    </ul>

Using javascript for DOM manipulation.  

    $(document).ready(function() {
      $("li").click(function() {
        console.log($(this).text());
      })
    });