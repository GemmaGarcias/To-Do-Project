$('.myButtonDelete').on('click', function(e){
   const idTask = $(this).data('id')
   console.log(idTask)

   const url = `/task/${idTask}`
   console.log(url)
   const method = 'DELETE'

   $.ajax({ url, method })
     .then( response => {
       //alert(response)
       window.location.href = '/'
     })
})

$('.myButtonDone').on('click', function(e){
   const idTask = $(this).data('id')
   console.log(idTask)

   const url = `/task/${idTask}`
   console.log(url)
   const method = 'PUT'

   $.ajax({ url, method })
     .then( response => {
       //alert(response)
       window.location.href = '/'
     })
})

$('.allDone').on('click', function(e){
   const url= '/tasks-done'
   const method= 'PUT'   

   $.ajax({url, method})
      .then(response=>{
        window.location.href='/'
      })
})

$('.deleteAll').on('click', function(e){
   const url= '/tasks-delete'
   const method= 'DELETE'   

   $.ajax({url, method})
      .then(response=>{
        window.location.href='/'
      })
})