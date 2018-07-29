//Business logic
function userDetails(firstName,email){
  this.name=firstName;
  this.email=email;
}
userDetails.prototype.showName=function(){
  return this.name;
}
userDetails.prototype.showEmail=function(){
  return this.email;
}
//User interface
$(document).ready(function() {
setTimeout(popup, 500);
function popup() {
$("#logindiv").css("display", "block");
}
$('.thumbnail').hover(
    function(){
        $(this).find('.hoverOn').slideDown(250);
    },
    function(){
        $(this).find('.hoverOn').slideUp(250);
    }
  );
$(".list-inline-item").hover(
    function(){
      $(this).find(".upload").slideDown(250);
    },
    function(){
      $(this).find(".upload").slideUp(250);
    }
  );
  $(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
$("#loginbtn").click(function() {
var name = $("#username").val();
var email = $("#userEmail").val();
var newUserDetails=new userDetails(name,email);
if (name == "" || email == ""){
alert("Please fill all required fields!");
}else{
  $("#logindiv").css("display", "none");
  $("#toggleUname").append('<i class="fa fa-bell-o">'+'&nbsp;&nbsp;&nbsp;'+newUserDetails.name+"&nbsp;&nbsp;&nbsp;"+'<i class="fa fa-sort-down showEmail">'+'</i>');
  $("#toggleUname").click(function(){
    $("#userMail").text(newUserDetails.email);
  });
}
});
});
