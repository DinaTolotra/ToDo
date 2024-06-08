$("#inputPopup").dialog({
    title: "Task",
    autoOpen: false,
    buttons: [
        {
            text: "Cancel",
            click : function() {
                $(this).dialog("close");
            }
        },
        {
            text: "Ok",
            click : function() {
                let inputElem = $(this).find("input");
                let label = inputElem.val();
                let task = new Task(label);
                
                task.display();
                $(this).dialog("close");
            }
        }
    ],

    open: function() {
        $(this).find("input").val("");
    }
});


$("#taskExist").dialog({
    title: "Warning",
    autoOpen: false,
    buttons: [
        {
            text: "Ok",
            click : function() {
                $(this).dialog("close");
            }
        }
    ],
});


$("#invalidLabel").dialog({
    title: "Warning",
    autoOpen: false,
    buttons: [
        {
            text: "Ok",
            click : function() {
                $(this).dialog("close");
            }
        }
    ],
});