var completed =[];
var active = [];


$(document).ready(function () {
  things.init();


});


var things = {

  init: function() {
    things.initStyling();
    things.initEvents();
  },

  initStyling: function(){

  },

  initEvents: function () {
  //When press enter it will add to active & data list
    console.log("you inited events")
    $("input").keypress(function(event){
      if(event.which ==13){
        event.preventDefault();
        var thingId = $(this).data('thingid');
        var newThing = {
          title: $('input[name=title]').val(),
        };

      things.createThing(newThing);
      active.push(newThing);
      }
    });

//Will add to completed list and have a smiley face next to it

    $('#popup').click(function(event) {
      closest('article').prepend('<img  src="smiley.png">');
      completed.push(thing);

    });


  //When click will show all to do things
  $('section').on('click', '.showtodo', function (event) {
        event.preventDefault();
        things.renderThings();
      });

//When click will show all active things using active array

  $('section').on('click', '.showtodoactive', function (event){
    event.preventDefault();
    console.log("You pressed me!")
    things.renderThings(active);
  });

},

//When click will show completed things







//When click will clear completed



//When click will put smiley face and cross out





config: {
  url: 'http://tiy-fee-rest.herokuapp.com/collections/imee',


},


renderThings: function () {
  console.log("Hi there!");
  $.ajax({
    url: things.config.url,

    type: 'GET',
    success: function (things) {
    console.log(things);
    var rendertemplate = _.template(template.thingTmpl);
    var markup = "";
    _.each(things, function(item, index, array){
      console.log(item);
      markup += rendertemplate(item);

    });
      console.log('markup is..', markup);
      $('section').html(markup);

},
  error: function (error) {
    console.log(error);
  }
});

},


createThing: function (newThing){

    $.ajax({
      url: things.config.url,
      data: newThing,
      type: 'POST',
      success: function (data) {
        console.log(data);
        things.renderThings();
      },
      error: function (error) {
        console.log(error);
      }

    });


},

deleteThing: function (id) {

  $.ajax({
      url: things.config.url + '/' + id,
      type: 'DELETE',
      success: function (data) {
        console.log(data);
        // things.renderBooks();
      },
      error: function (err) {
        console.log(err);
      }
    });
},

updateThing: function (id, thing) {

    $.ajax({
      url: things.config.url + '/' + id,
      data: thing,
      type: 'PUT',
      success: function (data) {
        console.log(data);
        things.renderBooks();
      },
      error: function (err) {
        console.log(err);
      }
    });


  },
};
