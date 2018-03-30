//https://pixabay.com/get/e833b00c21f11c22d2524518a33219c8b66ae3d110b0144997f8c77a/hanging-161395_1280.png
var current = {};

function formatImg(url, id){
  return "<img class='image' src='" + url + "' onclick='getBook(" + id + ")' />";
}

function formatDesc(obj){
  var str =
            "<div class='flame' onclick='getBook(" + obj.isbn + ")' ><h3>" + obj.title + "</h3>" +
            "<br /><p>Genre: " + obj.genre + "</p>" +
            "<br /><p>Author: " + obj.author + "</p>" +
            "<br /><p>Publisher: " + obj.pub + "</p>" +
            //"<br /><p>Description: " + obj.desc + "</p>" +
            "<br /><p>Page Count: " + obj.page + "</p>" +
            "</div>";
  
  if(window.localStorage.getItem === null){
    console.log("false");
  } else {
    $(".flame").css("background-color", "red");
  }
  
  return str;
}

var e = window.localStorage;
$("#btn1").click(function(){
  //var e = window.localStorage;
  
  e.setItem(current.isbn, JSON.stringify(current));

});

$("#btn2").click(function(){
  
  e.removeItem(current.isbn);
  
});

function el(id, context){
  $(id).html(context);
}

function getBook(id){
  
  var url = "https://aoit-api.azurewebsites.net/book?isbn=" + id;
  
  makeRequest(url, function(res){
    
    // SET VALUES OF MODAL
    // SHOW MODAL
    //alert(id);
    var root = res[0]; 
    current = res[0];
    
    el("#myModalLabel", root.title);
    // $("#myModalLabel").html(root.title);
    $("#image").attr("src", root.img);
    $("#genre").html("Genre: " + root.genre);
    $("#author").html("Author: " + root.author);
    $("#pub").html("Publisher: " + root.publisher);
    $("#pages").html("Page Count: " + root.pageCount);
    $("#modal-body").html("Description<br/>" + root.summary);    
    $("#myModal").modal("show");
    
    
    
  });
}

function col(content){
  return '<div class="col-md-4 col-lg-3"><div class="inner">' + content + "</div></div>";
}


// CODE FOR CHECKOUT
function checkCart(){
  var e = window.localStorage;
  
  for(var r in e){ 
    console.log( e.getItem(r) );   
  }
}

function makeRequest(url, callback){
  $.getJSON(url, callback);
}


$(document).ready(function(){
  
  var url = "https://aoit-api.azurewebsites.net/book";
  makeRequest(url, function(result){
    
    //console.log(result.length);
    
    var htmlString = "";
    
    result.forEach(function(item){
          
      var o = {
        title: item.title,
        genre: item.genre,
        author: item.author,
        pub: item.publisher,
        desc: item.summary,
        page: item.pageCount,
        img: item.sImg,
        isbn: item.isbn
      };
      
      var htmlImg = formatImg(o.img, o.isbn);
      
      var htmlDesc = formatDesc(o);
  
      htmlString += col(htmlImg + htmlDesc);
      //console.log(item);
    });
    
    $(".second").html(htmlString);
    
  });
  
  
});