const btn = document.querySelector('#btn');
const inp = document.querySelector('#inp');

function refreshList() {
    $('#list').empty()
    $.get('/todo',function (data){    
    // console.log(data);
    for(let todo of data){
        $('#list').append(`<li>${todo}</li>`)
    }
})
    
}
refreshList()

// seeing data from server 

btn.addEventListener('click',()=>{
    const todoText=inp.value
    $.post('/todo',{todo:todoText},function(){
        console.log('Send');
        refreshList()
    })
    inp.value =''
})