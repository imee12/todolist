var template = [];

template.thingTmpl = [
"<div class= 'item'>",
'<article data-thingid="<%= _id %>">',
  '<h4> <%= title %></h4>',
  "<button class='completed'>Completed?</button>",
  "<button class='edit'>Edit?</button>",
  "<button class='delete'>Delete?</button>",
  "<form class='editBook' action=''>",
        "<div class='form-group'>",
          "<input type='text' class='form-control' name='editTitle' value='<%= title %>'>",
        "</div>",
        "</div>",

  "</article>"

].join("");



///'<a  href=""<%= title %>></a>',
