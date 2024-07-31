$("#inputPopup").dialog({
    title: "Task",
    autoOpen: false,
    buttons: [
        {   text: "Cancel",
            click : function() {
                $(this).dialog("close");
            }
        },
        {   text: "Ok",
            click : function() {
                // create new task with the given label
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


// warn the user if the label is already used
$("#taskExist").dialog({
    title: "Warning",
    autoOpen: false,
    buttons: [
        {   text: "Ok",
            click : function() {
                $(this).dialog("close");
            }
        }
    ],
});


// warn the user if the label is invalid(e.g empty)
$("#invalidLabel").dialog({
    title: "Warning",
    autoOpen: false,
    buttons: [
        {   text: "Ok",
            click : function() {
                $(this).dialog("close");
            }
        }
    ],
});


// setup dialog
$("#setup").dialog({
    title: "Setup",
    autoOpen: false,
    buttons: [
        {   text: "Cancel",
            click: function() {
                $(this).dialog("close");
            }
        },
        {   text: "Ok",
            click : function() {
                // get check box value
                let chBox = $(this).find("input");
                hideWhenComplete = chBox[0].checked;

                // toggle all task display
                if (hideWhenComplete) hideAllCompletTask();
                else showAllCompletTask();

                // and then close the dialog
                $(this).dialog("close");
            }
        }
    ],

    open: function() {
        // set checkbox value on popup open
        let chBox = $(this).find("input");
        chBox[0].checked = hideWhenComplete;    //  jqElem[0] == html element
    }
});