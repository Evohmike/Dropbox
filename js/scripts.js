//Business logic
function userDetails(userName,email){
  this.name=userName;
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
setTimeout(pop, );
function pop() {
$("#sign-in").css("display", "block");
}
$('.thumbnail').hover(
    function(){
        $(this).find('.hover-shadow ').slideDown();
    },
    function(){
        $(this).find('.hover-shadow').slideUp();
    }
  );
$("#signinbtn").click(function() {
var name = $("#username").val();
var email = $("#userEmail").val();
var newUserDetails=new userDetails(name,email);
if (name == "" || email == ""){
alert("kindly fill in your username and email address.");
}else{
  $("#sign-in").css("display", "none");
  $("#toggleUsername").click(function(){
    $("#userEmail").text(newUserDetails.email);
  });
}
});
});
