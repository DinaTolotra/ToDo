let hideWhenComplete = false;

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


function deletAllTask() {
    for (const task of taskList) {
        task[1].delete();   //  task[0] is the key==label
    }
    taskList.clear();
}


function showAllCompletTask() {
    for (const task of taskList) {
        if (task[1].isComplet)
            task[1].show();
    }
}


function hideAllCompletTask() {
    for (const task of taskList) {
        if (task[1].isComplet)
            task[1].hide();
    }
}


$(document).ready(function () {
    $("#setupBtn").on("click", function() {
        $("#setup").dialog("open");
    });
    $("#createTask").on("click", function () {
        $("#inputPopup").dialog("open");
    });
    $("#resetTask").on("click", function () {
        deletAllTask();
    });
});