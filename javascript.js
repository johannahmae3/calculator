function insert(number){
 document.form.total.value = document.form.total.value+number;
}
function equal1(){
    document.form.total.value = eval(document.form.total.value);
}
function clear1(){
    document.form.total.value = "";
}
function del(){
     var exp = document.form.total.value;
     document.form.total.value = exp(0,exp.length-1)
 }