// Some JavaScript specific stuff in this lesson
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// https://api.jquery.com/append/
// https://getbootstrap.com/docs/4.0/components/alerts/
$('#alert').append(
  `<div class="alert alert-primary" role="alert">
  This is an example combining JQuery and BootStrap
</div>`);

// https://api.jquery.com/css/
$('.alert').css('width', '100%');

// https://api.jquery.com/jQuery.ajax/
// https://randomuser.me/api/?results=25
$.ajax({
  url: 'https://randomuser.me/api/?results=25',
  dataType: 'json',
  success: function(data) {
    const { results } = data;
    console.log(data);
    results.forEach(result =>
      $('#profiles').append(`
        <div class="col">
          <div class="card">
            <img class="card-img-top" src="${result.picture.large}" alt="This gives an alternate title if the image wasn't able to load">
            <div class="card-body">
              <h5 class="card-title">${result.name.title} ${result.name.first} ${result.name.last}</h5>
              <p class="card-text">I live at ${result.location.street}, ${result.location.city}</p>
              <p class="card-text">My email is ${result.email}</p>
              <p class="card-text">My cell is ${result.cell}</p>
            </div>
          </div>
        </div>
      `)
    );
  }
});
