// 
var fetch = function () {
        var bookInput = $('#isbn').val();
        $.ajax({
                    method: "GET",
                    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + bookInput,
                    success: function (data) {
                       // console.log(data);
                        var title = data.items[0].volumeInfo.title;
                        var author = data.items[0].volumeInfo.authors[0];
                        var description = data.items[0].volumeInfo.description;
                        var img = data.items[0].volumeInfo.imageLinks.thumbnail

                        // select template and convert it to an HTML string
                        var source = $('#book-template').html();
                        //compiling the template of the htm and fill in with js
                        var template = Handlebars.compile(source);
                        //how the template will look like
                        var newHTML = template({
                                title: title,
                                author: author,
                                description: description,
                                img: img
                            });
                                // append the html to the page
                                $('.books').append(newHTML);

                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                console.log(textStatus);
                            }
                        })
                };

                // event listner
                $('.search-book').on('click', function () {
                    fetch();

                })

                var bookRender = function () {
                    // select template and convert it to an HTML string
                    var source = $('#book-template').html();
                    //compiling the template of the htm and fill in with js
                    var template = Handlebars.compile(source);
                    //how the template will look like
                    var newHTML = template({
                        title: title,
                        author: author,
                        description: description,
                        img: img
                    });

                }