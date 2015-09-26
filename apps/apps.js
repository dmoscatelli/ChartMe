$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  $.getJSON('http://sec.kimonolabs.com/companies/' + searchTerm + '/forms/10-K/ANN/2014/Q4?apikey=s5IeLIMDBO1NkITAaZiIiZMq5FEX5K6c', function(data){
    console.log(data);


    if (data[0] == null) {
      $(".default").empty();
      $(".default").text("Nothing Found");
      console.log("test");
      //alert('None found');
    }




    $('#index').empty();
    $.each(data[0], function(index, value){
      if (value != null) {

          $.getJSON('http://sec.kimonolabs.com/companies?apikey=s5IeLIMDBO1NkITAaZiIiZMq5FEX5K6c', function(data){
            console.log(data);
            for (i = 0; i < data.length; i++) {
              if (data[i].symbol == searchTerm) {
                //console.log(data[i].display_name);
              }
            }

          }); 

        if (index == "company_symbol") {
          $(".compname").empty();
          $(".compname").text(value);
          console.log(data[0].year);
          $(".compname").append(' Year: ' + data[0].year); 
        }

         $('#index').append('<tr><td>' + index + '<hr/></td><td>' + value + '<hr/><td></tr>');
      }
    })
  });
}





/*function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>'; 
    console.log(value.Title);
  });
  $('#search-results').html(html);
}*/