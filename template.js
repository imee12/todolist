var template = [];

template.thingTmpl = [
'<div class= item>',
'<article data-bookid="<%= _id %>">',
  '<h4> <%= title %></h4>',
  "<button class='completed'>Completed?</button>",
  "<button class='edit'>Edit?</button>",
  "</article>",
  '</div>'
].join("");



///'<a  href=""<%= title %>></a>',
