var post= document.getElementById("post");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
    var users= document.getElementById("User").value;
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue+". Written by "+users+" ["+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+"]");
    
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
})


