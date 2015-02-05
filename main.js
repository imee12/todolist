var completed ={};
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

      }
    });



//Will add a smiley face to item

    $('section').on('click', '.completed', function(event) {
      event.preventDefault();
      $(this).closest('.item').prepend('<img src="smiley.png" style ="display": "inline-block">');

      console.log("pressed completed");
    //  things.completedThing();

    });


  //When click will show all to do things
  $('section').on('click', '.showtodo', function (event) {
        event.preventDefault();
        things.renderThings();
      });

//When click will show all active things

  $('section').on('click', '.showtodoactive', function (event){
    event.preventDefault();
    console.log("You pressed me!")
    things.renderThings(active);
  });



//When click will show completed things

$('section').on('click', '.showtodocompleted', function (event){
  event.preventDefault();
  console.log("You pressed me complete!")
  things.renderCompleteThings();
});








//When click will clear completed



//When click will delete

$('section').on('click', '.delete', function (event) {
      event.preventDefault();
       var thingId = $(this).closest('article').data('thingid');
       console.log(thingId);
       things.deleteThing(thingId);
    });




//When click will edit
$('section').on('submit', '.edit', function (event) {
      event.preventDefault();
      var thingId = $(this).closest('article').data('thingid');
      var editedThing = {
        title: $(this).find('input[name="editTitle"]').val(),

      };

      things.updateThing(thingkId, editedThing);


    });

},



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
      $('.list').html(markup);

},
  error: function (error) {
    console.log(error);
  }
});

},

//will show completed list of things
renderCompleteThings: function () {
  console.log("Hi there again!");
  $.ajax({
    url: things.config.url,

    type: 'GET',
    success: function (completed) {
    console.log(completed);
    var rendertemplate = _.template(template.thingTmpl);
    var markup = "";
    _.each(things, function(item, index, array){
      console.log(item);
      markup += rendertemplate(item);

    });
      console.log('markup is..', markup);
      $('.list').html(markup);

},
  error: function (error) {
    console.log(error);
  }
});

},
/// POST TO SERVER THAT IT IS COMPLETED

completeThing: function() {
  $.ajax({
    url: things.config.url + '/' + id,
    data: {'status': completed},
    type: 'POST',
    success: function (data) {
    console.log(data);
    //you need to append or add a value of completed to the completed thing

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
        things.renderThings();
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
        things.renderThings();
      },
      error: function (err) {
        console.log(err);
      }
    });


  },
};
