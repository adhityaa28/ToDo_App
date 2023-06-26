
var check = document.querySelectorAll('.checkbox');
var delet=document.querySelector('#delete')
delet.href="/delete_list/?";

delet.addEventListener('click',function(){
    for(let i of check){
        if(i.checked==true){
            delet.href +="id="+i.value+'&';
            
        }
    }
})

