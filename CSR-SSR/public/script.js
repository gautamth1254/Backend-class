$.get('/todo',function (data){
    // console.log(data);
    for(let todo of data){
        $('#list').append(`<li>${todo}</li>`)
    }
})

// seeing data from server 