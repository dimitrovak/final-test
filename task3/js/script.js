(function () {
    "use strict";

    var kids;
    $.getJSON("js/kids.json", function (data) {
        kids = data;
    });

    function Kid() {

    }

    var kidsTemplate = "<div class=\"kid\">\n" +
        "    <div class=\"panel panel-info\">\n" +
        "      <div class=\"panel-heading\">\n" +
        "        <h3>Сюзан</h3>\n" +
        "      </div>\n" +
        "      <div class=\"panel-body\">\n" +
        "        <div class=\"col-sm-4\">\n" +
        "          <img class=\"img-responsive\" src=\"img/susan.jpg\">\n" +
        "        </div>\n" +
        "        <div class=\"col-sm-8\">\n" +
        "          <ul>\n" +
        "            <li><h5>Години: 4</h5></li>\n" +
        "            <li><h5>Любим цвят: син</h5></li>\n" +
        "            <li><h5>Любима игра: кукла Барби</h5></li>\n" +
        "            <li><h5>Любима храна: крем карамел</h5></li>\n" +
        "          </ul>\n" +
        "        </div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n";


})();
