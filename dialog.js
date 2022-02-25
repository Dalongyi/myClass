function Dialog(){
    this.section = document.querySelector("#s14");
}

Dialog.prototype = {

    show : function(){
        console.log("show");
    },
    confirm : function(message, title){
        var html =  '<div class="screen"> \
        <div class="dlg"> \
                <div> \
                    ' + title +'\
                </div> \
                <div class="view"> \
                    ' + message + ' \
                </div> \
                <div class="action-panel"> \
                    <a href="" class="btn btn-strong">OK</a> \
                    <a href="" class="btn btn-cancel">CANCEL</a> \
                </div> \
            </div> \
        </div>';

        document.body.insertAdjacentElement("beforeend",html);
        //this.section.insertAdjacentHTML("beforeend",html);
        //var cancelButton = this.section.querySelector(".btn-cancel");

        ////var s = this.section;
        //cancelButton.onclick = function(e){
        //    e.preventDefault();
        //    this.section.querySelector(".screen").remove();
        //}.bind(this);

        var s = this.section;
        cancelButton.onclick = function(e){
            e.preventDefault();
            s.querySelector(".screen").remove();
        }
        console.log("confirm");
        return false;
    }
}