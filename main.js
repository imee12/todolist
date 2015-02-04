var todoPage = {

init: function() {
  todoPage.initStyling();
  todoPage.initEvents();


},

initStyling: function(){
  todo.renderThings();

},

initEvents: function () {




},


config: {
  url: 'http://tiy-fee-rest.herokuapp.com/collections/imee',


},

render: function (data, tmpl,$el){
  var template = _.template(data, tmpl);
  $el.append(template);


},

renderThings: function () {
  $.ajax({
    url: todo.config.url,
    type: 'GET',
    success: function (things)
    console.log(things);
    var template = _.template('#thingTmpl').html());
    var markup = "";
    things.forEach(function(item,index, array){
      markup += template(item);

    });
      console.log('markup is..', markup);
      $('section').html(markup);

},
  error: function (error) {
    console.log(error);
  }
});




createThing: function (thing){

    $.ajax({
      url: todo.config.url,
      data: thing,
      type: 'POST',
      success: function (data) {
        console.log(data);
        todo.renderThings();
      },
      error: function (error) {
        console.log(error);
      }

    });


},

deleteThing: function (id) {

  $.ajax({
      url: todo.config.url + '/' + id,
      type: 'DELETE',
      success: function (data) {
        console.log(data);
        todo.renderBooks();
      },
      error: function (err) {
        console.log(err);
      }
    });
},

updateBook: function (id, thing) {

    $.ajax({
      url: todo.config.url + '/' + id,
      data: thing,
      type: 'PUT',
      success: function (data) {
        console.log(data);
        todo.renderBooks();
      },
      error: function (err) {
        console.log(err);
      }
    });


  },
},







$(document).ready(function () {
  todoPage.init();

});
