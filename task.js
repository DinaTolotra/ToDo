let taskList = new Map();

class Task {
    constructor(label) {
        this.label = label;
        this.isComplet = false;
        
        if (taskList.has(this.label)) {
            $("#taskExist").dialog("open");
        } else if (!this.label) {
            $("#invalidLabel").dialog("open");
        } else {
            this.elem = copyTaskTemplate(this.label);
            taskList.set(this.label, this);
            this.setEvent();
        }
    }

    setEvent() {
        let deleteButton = $(this.elem).find(".deleteTask");
        let completeBox = $(this.elem).find("input");
        let task = this;
        
        $(deleteButton).on("click", function() {
            task.delete();
        });
        $(completeBox).on("click", function () {
            let state = task.isComplet? "false": "true";
            task.elem.attr("complete", state);
            task.isComplet = !task.isComplet;
        });
    }

    display() {
        $("#taskList").append(this.elem);
    }

    delete() {
        $(this.elem).remove();
        taskList.delete(this.label);
        console.log(taskList);
    }
}