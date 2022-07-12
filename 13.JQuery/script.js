$("#disable").click(function(){
    $("#para").hide()
  })
  $("#enable").click(function(){
    $("#para").show()
  })
  
  $("#ajax_call").click(function(){
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos/12",
      type: "GET",
      success: function(data){
        document.getElementById("heading").innerText=data.title
      }
    })
  })