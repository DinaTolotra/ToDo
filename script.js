function copyTaskTemplate(label) {
    let copy = $(".template > .task").clone();
    let labelElem = copy.find(".taskLabel");
    copy.attr("label", label);
    labelElem.html(label);

    return copy;
}


function getTaskParent(elem) {
    return $(elem).parent(".task");
}


function getTaskLabel(elem) {
    return $(elem).attr("label");
}


$(document).ready(function () {
    $("#createTask").on("click", function () {
        $("#inputPopup").dialog("open");
    });
});