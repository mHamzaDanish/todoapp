var list=document.getElementById('todolist');
function additem(){
    var todo_itmes=document.getElementById('input');
    if(todo_itmes.value==""){
        alert("Enter Some thing")
    }
    else
        {
        var li_item=document.createElement('li');
        var li_text=document.createTextNode(todo_itmes.value);
        li_item.appendChild(li_text);
        list.appendChild(li_item);
        todo_itmes.value="";

        //delte Btn
        var deletebtn=document.createElement('button');
        var deltebtntext=document.createTextNode("Delete");
        deletebtn.setAttribute('class',"btn");
        deletebtn.setAttribute('onclick',"deleteitem(this)");
        deletebtn.appendChild(deltebtntext);
        li_item.appendChild(deletebtn);

        //editbtn
        var editbtn=document.createElement('button');
        var editbtntext=document.createTextNode('Edit');
        editbtn.appendChild(editbtntext);
        editbtn.setAttribute('class','btn');
        editbtn.setAttribute('onclick','edit_btn(this)');
        li_item.appendChild(editbtn);
    }

}

function clearallitem(){
    list.innerHTML="";
}
function deleteitem(e){
    e.parentNode.remove()    
}

function edit_btn(e){    
    var newval=prompt("Enter new Value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=newval;
}

