let str ="aakash";

let new_str=""
for(i=str.length-1;i>=0;i--){
    new_str=new_str+str[i]
}
if(str==new_str){
console.log("Palindrome")
}else{
    console.log("not Palindrom")
}