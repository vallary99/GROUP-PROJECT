$(document).ready(function(){
    $("#checkout").click();
    $("#checkout").show("#checkout1");
    $("#checkout").show("#checkout2");
    $("#cheeckout").show("#checkout3");

    var book=function(genre,title,bookIndex){
        this.genre=genre;
        this.title=title;
        this.bookIndex=bookIndex;
    }
            book.prototype.totalPrice=function()
        {
            return this.bookId
        }
    

    var total=0;
    $("#add").click(function(event){
    event.preventDefault();
        var bookGenre=parseInt($("#genre option:selected").val()); 
        var bookTitle =parseInt($("#title option:selected").val()); 
        var bookId= parseInt($("#id option:selected").val());

        let newBook = new book(bookGenre,bookTitle,bookId);

        let price= (newBook.totalPrice());

     total+=price;

    var bGenre= $("#genre").append(pizzaSize);
    var bTitle= $("#add-order").append();
    var bId= $("#topping option:selected").append.text();

    $("tbody").append("<tr>"+"<td>"+bGenre+"</td>"+"<td>"+bTitle+"</td>"+"<td>" +bId+ "</td>" +"<td>" +price +"</td>"+"</tr>")
    
  });

  
      $("#order").click(function(event){
          $("#order").text(total);
          $("confirm").show();
          
  });

});