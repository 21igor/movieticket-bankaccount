function Ticket(movieVal, ageVal, timeVal){
  this.movieVal = movieVal;
  this.ageVal = ageVal;
  this.timeVal = timeVal;
}

Ticket.prototype.price = function(){
  return 3 + this.movieVal + this.ageVal + this.timeVal;
}
$(document).ready(function(){

    $(".ticketForm").submit(function(event){
      event.preventDefault();
      $(".ticketForm").each(function(){
        $(".ticketPrice").remove();
        var movieVal = parseInt($(".whichMovie").val());
        var ageVal =  parseInt($(".whichAge").val());
        var timeVal =  parseInt($(".whichTime").val());
        var newTicket = new Ticket(movieVal, ageVal, timeVal);
        $(".displayMovie").append("<p class='ticketPrice'>$"+newTicket.price()+"</p>")
      });
    });
});
