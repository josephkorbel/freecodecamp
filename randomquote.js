$(document).ready(function() {
    $("#getMessage").on("click", function(){
      $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?&key=",   function (json){
        
          $(".quote-text").html(JSON.stringify(json.quoteText));
          if(json.quoteAuthor != ""){
            $(".quote-author").html(JSON.stringify(json.quoteAuthor));
          }else{
            ("#.quote-author").html("");
          }
          

      });
    });
});
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));