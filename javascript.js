var form = document.querySelectorAll(".number");
var sign = document.querySelectorAll(".sign");
var input = document.querySelector("#total");
var clear = document.querySelector(".clear");
var equal = document.querySelector(".quant");
var del = document.querySelector(".remove");
for (var i = 0; i < form.length; i++)
{
  form[i].addEventListener("click", function()
  {
    input.value += this.value; 

     console.log(this.value)
 
  });
}
for (var x = 0; x < sign.length; x++){
  sign[x].addEventListener("click", function()
{
      input.value += this.value;
      console.log(this.value)
  
  });
}
equal.addEventListener("click", function(){
  input.value = eval(input.value);
});
clear.addEventListener("click", function(){
  input.value = "";
});
del.addEventListener("click", function(){
  input.value = input.value.substring(0,input.value.length-1);
});





 
console.log(form);


