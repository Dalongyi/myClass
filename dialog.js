function Dialog(){

    this.section = document.querySelector("#s14");

    this.show = function(){
        console.log("show");
    };
    this.confirm = function(){
        var html =  '<div class="screen"> \
        <div class="dlg"> \
                <div class="view"> \
                    정말 삭제하시겠습니까? \
                </div> \
                <div class="action-panel"> \
                    <a href="" class="btn btn-strong">OK</a> \
                    <a href="" class="btn btn-cancel">CANCEL</a> \
                </div> \
            </div> \
        </div>';

        this.section.insertAdjacentHTML("beforeend",html);
        var cancelButton = this.section.querySelector(".btn-cancel");

        cancelButton.onclick = function(e){
            e.preventDefault();
            this.section.querySelector(".screen").remove();
        }
        console.log("confirm");
        return false;
    }
}