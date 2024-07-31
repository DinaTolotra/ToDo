//  key: taskLabel
//  elem: task
let taskList = new Map();

class Task {
    display() {
        $("#taskList").append(this.elem);
        this.isShown = true;
    }

    markAsComplet() {
        this.elem.attr("complete", "true");
        this.isComplet = true;
    }

    markAsIncomplet() {
        this.elem.attr("complete", "false");
        this.isComplet = false;
    }

    toggleCompletion() {
        if (!this.isComplet) this.markAsComplet();
        else this.markAsIncomplet();
    }

    hide() {
        if (this.isShown)
            $(this.elem).toggle("fast");
        this.isShown = false;
    }

    show() {
        if (!this.isShown)
            $(this.elem).toggle("fast");
        this.isShown = true;
    }

    delete() {
        let task = this;
        new Promise(() => {
            task.hide();
        }).then(res => {
                $(this.elem).remove();
                taskList.delete(this.label);
            }
        )
    }

    toggleDisplay() {
        if (this.isShown) this.hide();
        else this.show();
    }

    setEvent() {
        let deleteButton = $(this.elem).find(".deleteTask");
        let completeBox = $(this.elem).find("input");
        let task = this;
        
        $(deleteButton).on("click", function() {
            task.delete();
        });
        $(completeBox).on("click", function () {
            task.toggleCompletion();
            if (hideWhenComplete)
                task.toggleDisplay();
        });
    }

    constructor(label) {
        this.label = label;
        this.isComplet = false;
        this.isShown = true;
        
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
}