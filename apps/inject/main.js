var t = 0,
    interval = setInterval(function() {
        search();
    }, 1000);

function search() {
    (t == 10) ? clearInterval(interval): t++;


    var re = "\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})";

    $('body').domSearch(re, function(N, d1, d2, d3) {
        var number = d1+d2+d3,
            node = this,
            pos = node.nodeValue.indexOf(N);

        console.log(node);

        if (pos >= 0) {
            var spannode = document.createElement('button'),
                middlebit = node.splitText(pos),
                endbit = middlebit.splitText(N.length),
                middleclone = middlebit.cloneNode(true);

            spannode.className = 'btn btn-primary btn-mini';
            spannode.domSearch = true;
            spannode.appendChild(middleclone);
            middlebit.parentNode.replaceChild(spannode, middlebit);
            $(spannode).on('click', function() {
                alert(middleclone.nodeValue);
            });
        }
    });
}

    // $div.on('click', function() {
    //     $.ajax({
    //         'url': "http://localhost:8000/v1/accounts/ID/devices/ID/quickcall/" +number+ "?cid-number=4156715576",
    //         'contentType': "application/json",
    //         'headers' : {
    //             'X-Auth-Token': "TOKEN"
    //         }
    //     });
    // })












