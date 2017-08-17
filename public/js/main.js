console.log('Main JS loaded...')

$('.remove').on('click', function(e) {
  console.log('remove')
  const idTask = $(this).siblings('.task-id').val()
  const url = `/task/${idTask}`
  const method = 'DELETE'

  $.ajax({ url, method })
    .then( msg => {
      $(this).parent().remove()
      console.log(msg)
    })

})

$('.done').on('click', function(e) {
  const idTask = $(this).siblings('.task-id').val()
  const url = `/task/${idTask}`
  const method = 'PUT'
  const data = { done: true }

  $.ajax({ url, method, data })
    .then( msg => {
      $(this).parent().remove()
      console.log(msg);
    })

})

$('.undone').on('click', function(e) {
  const idTask = $(this).siblings('.task-id').val()
  const url = `/task/${idTask}`
  const method = 'PUT'
  const data = { done: false }

  $.ajax({ url, method, data })
    .then( msg => {
      $(this).parent().removeClass('task-done')
      $(this).parent().remove()
      $(this).removeClass('undone').addClass('done')

      console.log(msg);
    })

})

$('.all-done').on('click', function(e) {
  console.log('all-done clicked')
  const url = `/tasks`
  const method = 'PUT'
  const data = { done: true }

  $.ajax({ url, method, data })
  .then( () => {
    $('.task-item').remove()
  })

})




$('.edit').on('click', function(e) {
  const idTask = $(this).siblings('.task-id').val()
  const url = `/task/${idTask}`
  const method = 'PUT'
  console.log('Editing task w/ id : ' + idTask)
  $(this).siblings('span').toggleClass('hidded')
  $(this).siblings('.task-edit').toggleClass('hidded')
  $(this).toggleClass('btn-warning pull-right btn-success')
  $(this).on('click', function(e) {
    const titleEdited = $(this).siblings('.task-edit').val()
    $(this).siblings('span').text(titleEdited)
    const data = {title: titleEdited}
    console.log(data.title + idTask)

    $.ajax({ url, method, data })

  })



})
