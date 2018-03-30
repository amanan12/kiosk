var v;

function clear(){
    $("#barcode").val();
    $("#title").val();
    $("#subTitle").val();
    $("#teaser").val();
    $("#author").val();
    $("#summary").val();
    $("#publisher").val();
    $("#pageCount").val();
    $("#image").val();
    $("#sImage").val();
    $("#genre").val();
    $("#isbn").val();

    $("#barcode").val("");
    $("#title").val("");
    $("#subTitle").val("");
    $("#teaser").val("");
    $("#author").val("");
    $("#summary").val("");
    $("#publisher").val("");
    $("#pageCount").val("");
    $("#image").val("");
    $("#sImage").val("");
    $("#genre").val("");
    $("#isbn").val("");
}
/*
                9780374530716
                9780689839559
                9781416997887
                9781423171089
                9780545417303
                9781556226441
                9780547608327
                9780062187413
                9780545430272
                9780374351236
                9781111138011
 
            
            */

    var pressed = false;

    var chars = [];


$(window).change(function(e) {
//$("#barcode").change(function(e) {
    if (e.which >= 48 && e.which <= 57) {
        chars.push(String.fromCharCode(e.which));
    }
    
    /*
    if(chars.length > 12){
        $("#barcode").focusout();
    }
    */
  //console.log(chars.length);

  //console.log(e.which + ":" + chars.join("|"));
  var isbn = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + $("#barcode").val() + "&key=AIzaSyDOT2-jMtatkBgfVLqSNrJ-angfpNbP2c4";


  $.getJSON(isbn, function(data) {
    var a = data.items[0],
        info = a.volumeInfo,
        title = info.title,
        subTitle = info.subtitle,
        language = info.language,
        author = info.authors.join(", "),
        publisher = info.publisher,
        mature = info.maturityRating,
        printType = info.printType,
        description = info.description,
        pageCount = info.pageCount,
        rating = info.averageRating,
        genre = info.categories,
        image = info.imageLinks,
        thumbnail = image.thumbnail,
        sThumbnail = image.smallThumbnail,
        isbn = $("#barcode").val(),
        publishedDate = info.publishedDate,
        teaser = a.searchInfo.textSnippet;
v = a;
    $("#title").val(title);
    $("#author").val(author);
    $("#summary").val(description);
    $("#publisher").val(publisher);
    $("#image").val(thumbnail);
    $("#pageCount").val(pageCount);
    $("#sImage").val(sThumbnail);
    $("#genre").val(genre);
    $("#isbn").val(isbn);
    $("#subTitle").val(subTitle);
    $("#teaser").val(teaser);
    $("#language").val(language);
    $("#publishedDate").val(publishedDate);
    
    
    
    // HORRIBLE HACK BUT WORKS
    $.post('https://aoit-api.azurewebsites.net/book', formatData(), function(results){
        console.log(results);
        clear();
    });
    
  });

  //var osis = $(".osis").val(),
  //    cid = $(".cid").val();

  //$("#osis").val(osis);
  //$("#cid").val(cid);

  // if (pressed == false) {
  //
  //   setTimeout(function(){
  //
  //       if (chars.length >= 10) {
  //
  //         v = chars.join("");
  //
  //           var barcode = chars.join("");
  //
  //           console.log("Barcode Scanned: " + barcode);
  //
  //         console.log("??:" +v);
  //         $("#barcode").val(barcode);
  //       }
  //       $("#barcode").val("");
  //       chars = [];
  //       pressed = false;
  //   },400);
  // }

    pressed = true;
});

$("#barcode").keypress(function(e){
    if ( e.which === 13 ) {
        console.log("Prevent form submit.");
        e.preventDefault();
    }
});



function setFocus(){
  $("#barcode").focus();
  console.log("FOCUSED!");
}

/*
$(document).focus(function(){
  $("#barcode").focus();
});
*/



$('#add').click(function(){
  //
    $.post('https://aoit-api.azurewebsites.net/book', formatData(), function(results){
        console.log(results);
    });
});    


function formatData() {
    return {
        title:  $("#title").val(),
        subTitle: $("#subTitle").val(),
        author: $("#author").val(),
        teaser: $("#teaser").val(),
        language: $("#language").val(),
        summary: $("#summary").val(),
        publisher: $("#publisher").val(),
        pageCount: $("#pageCount").val(),
        img: $("#image").val(),
        sImg: $("#sImage").val(),
        genre: $("#genre").val(),
        publishedDate: $("#publishedDate").val(),
        isbn: $("#isbn").val()
    };
}