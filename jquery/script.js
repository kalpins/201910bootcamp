// jQuery(document).ready(function () {
//     console.log("jQuery")
// })

$(document).ready(function () {
    console.log("The same jQuery but with $");

    $("ol li").text("This is new value");
    $("ol li.other").html("This <strong> is new </strong> value");
    $("ol li.text").text("This <strong>is new</strong> value");
    $("#test5").text("this text is changed");

    $("#html-output").text($("ol").html());
    $("#text-output").text($("ol").text());

    $("ol li:first").text("This is first");
    $("ol li").first().append("!!!");


    var count = 0;
    $("button").click(function () {
        count++;
        $("#output").append("<p>" + count + ". New row</p>")
        $("ol").show(2000, "linear", function () {
            $("ol").hide();
        });
    })






    // id. jauna rinda
});