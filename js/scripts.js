var transactionArray = [];

function Ticket(movieVal, ageVal, timeVal){
  this.movieVal = movieVal;
  this.ageVal = ageVal;
  this.timeVal = timeVal;
}

Ticket.prototype.price = function(){
  return 3 + this.movieVal + this.ageVal + this.timeVal;
}

function Transaction(name, initialDeposit) {
  this.transName = name;
  this.transAmount = initialDeposit;
  transactionArray.push(this);
}

balance = function () {
  var balance = 0;
  for(i=0; i<transactionArray.length; i++){
    balance += transactionArray[i].transAmount;
  }
  return balance;
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


    $(".initialDepositForm").submit(function(event) {
      event.preventDefault();
      $(".removeAfter").remove();
      var name = $("#initialDepositNameIn").val();
      var initialDeposit = parseInt($("#initialDepositAmountIn").val());
      var transaction = new Transaction(name, initialDeposit);
      $(".balance").append("<span class='removeAfter'> $"+balance()+"</span>");
      $(".hide-button").fadeOut();
    });

    $(".depositForm").submit(function(event) {
      event.preventDefault();
      $(".removeAfter").remove();
      var depositAmount = parseInt($("#depositAmountIn").val());
      var withdrawalAmount = parseInt($("#withdrawalAmountIn").val());
      var amount = depositAmount - withdrawalAmount;
      var name = transactionArray[0].transName;
      var newTransaction = new Transaction(name, amount);
      $(".balance").append("<span class='removeAfter'> $"+balance()+"</span>");
    });
});
