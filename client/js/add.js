var v;


var pressed = false;

var chars = [];


    $("#barcode").change(function(e) {
    //$("#barcode").keyup(function(e) {
        
        if (e.which >= 48 && e.which <= 57) {
            chars.push(String.fromCharCode(e.which));
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
          
          v = data;
          
            var a = data.items[0],
            info = a.volumeInfo,
            title = info.title,
            subTitle = info.subTitle,
            language = info.language,
            category = info.category,
            mature = info.maturityRating,
            printType = info.printType,
            publishedDate = info.publishedDate,
            onlineRating = info.averageRating,
            teaser = items[0].searchInfo.textSnippet,
            author = info.authors.join(", "),
            publisher = info.publisher,
            description = info.description,
            pageCount = info.pageCount,
            rating = info.averageRating,
            genre = info.categories,
            image = info.imageLinks,
            thumbnail = image.thumbnail,
            sThumbnail = image.smallThumbnail,
            isbn = $("#barcode").val();


        $("#title").val(title);
        $("#subTitle").val(subTitle);
        $("#author").val(author);
        $("#teaser").val(teaser);
        $("#summary").val(description);
        $("#publisher").val(publisher);
        $("#image").val(thumbnail);
        $("#pageCount").val(pageCount);
        $("#sImage").val(sThumbnail);
        $("#genre").val(genre);
        $("#isbn").val(isbn);

      });

      var osis = $(".osis").val(),
          cid = $(".cid").val();

      $("#osis").val(osis);
      $("#cid").val(cid);

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

$(document).focus(function(){
  $("#barcode").focus();
});



$('#add').click(function(){
  //
    $.post('https://aoit-api.azurewebsites.net/book', formatData(), function(results){
        console.log(results);
        clear();
    });
});    

function formatData() {
    return {
        title: $("#title").val(),
        subTitle: $("#subTitle").val(),
        teaser: $("#teaser").val(),
        author: $("#author").val(),
        summary: $("#summary").val(),
        publisher: $("#publisher").val(),
        pageCount: $("#pageCount").val(),
        img: $("#image").val(),
        sImg: $("#sImage").val(),
        genre: $("#genre").val(),
        isbn: $("#isbn").val()
    };
}

function clear(){
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
    
    $("#title").html("");
    $("#subTitle").html("");
    $("#teaser").html("");
    $("#author").html("");
    $("#summary").html("");
    $("#publisher").html("");
    $("#pageCount").html("");
    $("#image").html("");
    $("#sImage").html("");
    $("#genre").html("");
    $("#isbn").html("");
}