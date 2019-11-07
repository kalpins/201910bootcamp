$(document).ready(function () {
    // console.log($("#task-input"))
    // $("#text-output").text($("ol").text());
    $("#sortable").sortable({
        stop: function (event, ui) {
            saveList();
        }
    });


    $("button").click(function () {
        $("ol").append("<li>" + $("#task-input").val() + "<button class='remove'>---</button></li>")
        // $("ol")
        saveList()
    });

    // $("li").click(function () {
    //     console.log("This works???")
    // })

    $("ol").on("click", 'li', function (e) {
        console.log(e)
        // $(this).hide();
        console.log($(this))

        if (e.target.className === "remove" && e.target.tagName === "BUTTON") {
            console.log("button")
            $(this).remove()
        } else {

            if ($(this)[0].style.textDecoration === "line-through") {
                $(this).css("text-decoration", "none")
            } else {
                $(this).css("text-decoration", "line-through")
            }
        }
        saveList()
    });

    $("ol").html(localStorage.getItem("tasks"))

    function saveList() {
        console.log("alert")
        localStorage.setItem("tasks", $("ol").html());
    }
})