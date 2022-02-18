
//window.addEventListener("load", function(){
//    var section = document.querySelector("#s12");
//    var input = section.querySelector(".form  input[name=uname]");
//    var list = section.querySelector(".list");
//    var regbtn = section.querySelector(".form input[name=regbtn]")
//
//    regbtn.onclick = function(e){
//        e.preventDefault();
//
//        var li = document.createElement('li');
//        li.append(input.value);
//        li.classList.add("item");
//        list.append(li);
//    }
//
//});
window.addEventListener("load", function(){
    var section = document.querySelector("#s12");
    var input = section.querySelector(".form input[type=text]");

    var register= section.querySelector(".form input[type=submit]");
    var del= section.querySelector(".form input[type=submit] + input");

    var list = section.querySelector(".member-list .list");
    var items = section.querySelectorAll(".item");
    var delFirstBtn = section.querySelector(".btn-del-first");
    var delAllBtn = section.querySelector(".btn-del-all");
    var index = 0;


    delAllBtn.onclick = function(e){
        e.preventDefault();

         var lis = list.children;
         var size = lis.length;

         for(var i = 0; i < size; i++){
             var checkbox = lis[size - 1 - i].querySelector("input[type=checkbox]");

             if(lis[size - 1 - i].querySelector(":checked"))
                 lis[size - 1 - i].remove();
         }

        // var lis = list.children;

        // for(var i = 0; i < lis.length; i++){
        //     var checkbox = lis[i].querySelector("input[type=checkbox]");

        //     if(checkbox.checked)
        //         lis[i].remove();
        // }

    }
    //2.이벤트 처리와 대상이 목록일때
    list.onclick= function(e){
        if(!e.target.classList.contains("btn-close"))
            return;
        e.preventDefault();

        console.log(e.target.parentElement);
        if(confirm("정말 삭제하시겠습니까?"))
            e.target.parentElement.remove();

        if(list.children.length == 0)
            list.classList.add("empty");

    }
    //1.이벤트 처리와 대상이 하나 일때
    delFirstBtn.onclick = function(e){
        e.preventDefault();

        // var li = list.firstElementChild;
        // list.removeChild(li);
        list.firstChild.remove();
    }

    //추가
    register.onclick = function(e){
        if(!input.checkValidity()){
            //alert("이름 입력 오류: " + input.validationMessage);
            return;
        }
        e.preventDefault();

        if(list.children.length == 0)
            list.classList.remove("empty");
        // if(items.length > index){
        //     items[index++].innerText = input.value;
        //     return;
        // }

        //list.innerHTML += '<li class="item">' +input.value + '</li>';
        //var li = document.createElement("li");
        ////var text = document.createTextNode(input.value);
        //li.append(input.value);
        //li.classList.add("item");
        //// li.innerText = input.value;
        //// li.textContent = input.value;
        //list.prepend(li);
        //list.insertAdjacentElement("afterbegin", li);
        // if(list.children.length == 0)
        //     list.append(li);
        // else
        //     //list.insertBefore(li, list.firstElementChild);
        //     list.firstElementChild.before(li);

        var html = '<li class="item"><input class="mr-2" type="checkbox">' + input.value+'<a class="btn-close icon icon-close ml-auto" href="">삭제</a>' + '</li>';
        list.insertAdjacentHTML("afterbegin", html);
    }

    //삭제
    del.onclick = function(e){
        e.preventDefault();
        items = section.querySelectorAll(".item");

        for(var i = 0; i < items.length; i++){
           if(items[i].innerText == input.value){
                items[i].remove(); 
           }
        }
    }
});
window.addEventListener("load", function(){
    var section = document.querySelector("#s11"); 
    var box = section.querySelector(".box"); 
    var errorMessage = box.querySelector(".error-message");
    var uploadBox = section.querySelector(".upload-box");
    box.ondragenter = function(e){
        console.log("enter");
        box.classList.add("over");
    };
    box.ondragleave = function(e){
        console.log("leave");
        box.classList.remove("over");
        box.classList.remove("error");
        errorMessage.classList.add("d-none");
    };
    box.ondragover = function(e){
        e.preventDefault();
        console.log("over");        

        var valid = e.dataTransfer
                && e.dataTransfer.types
                && (e.dataTransfer.types.indexOf("Files") >= 0);

        console.log(e.dataTransfer.types);

    if(!valid){
        box.classList.add("error");
        errorMessage.classList.remove("d-none");
    }

    };
    box.ondrop = function(e){
        e.preventDefault();
        console.log("drop");
        var files = e.dataTransfer.files;

        //if(files.length > 1){
        //    alert("파일은 하나씩 전송할 수 있습니다");
        //    box.classList.remove("over");
        //    box.classList.remove("error");
        //    errorMessage.classList.add("d-none");
        //    return;
        //}

        var file = files[0];

        //console.log(file.types);
        //if(file.types.indexOf("images/") != 0){
        //    alert("이미지 형식이 아닙니다");
        //    box.classList.remove("over");
        //    box.classList.remove("error");
        //    errorMessage.classList.add("d-none");
        //    return;
        //}

        //var size = file.size;
        //if(size > 10*1024*1024){
        //    alert("10메가 넘어감");
        //    box.classList.remove("over");
        //    box.classList.remove("error");
        //    errorMessage.classList.add("d-none");
        //    return;
        //}

        var reader = new FileReader();
        reader.onload = function(e){
            var img = document.createElement("img");
            img.src = e.target.result;
            img.style.height="100px";

            uploadBox.appendChild(img);
        }

        reader.readAsDataURL(file);
    };
});
// window.addEventListener("load", function(){
//     var section = document.querySelector("#s10");    
//     var box = section.querySelector(".box");
//     var item = box.querySelector(".item");
//     var mouseDown = false;

//     box.onmousemove = function(e){
//         if(!mouseDown)
//             return;
//         item.style.left = e.x + "px";
//         item.style.top= e.y + "px";
//     }

//     box.onmousedown= function (){
//         mouseDown = true;
//     }

//     box.onmouseup= function(){
//         mouseDown = false;
//     }
// });
window.addEventListener("load", function(){
    var section = document.querySelector("#s10");
    var box = section.querySelector(".box");
    var item = box.querySelector(".item");
    var offset = {x:0, y:0};
    var isclick = false;
    box.onclick = function(e){
    }

    box.onmousemove = function(e){
        if(!isclick)
            return;
        item.style.left = e.pageX - box.offsetLeft - offset.x + "px";
        item.style.top = e.pageY - box.offsetTop - offset.y + "px";
    }

    box.onmousedown = function(e){
        if(!e.target.classList.contains("item"))
            return;
        offset.x = e.offsetX;
        offset.y = e.offsetY;
        isclick = true;

        item = e.target;
    }

    box.onmouseup = function(e){
        isclick = false; 
    }

});
//window.addEventListener("load", function(){
//    var section = document.querySelector("#s10");
//    var box = section.querySelector(".box");
//    var item = section.querySelector(".item");
//    var isClick = false;
//
//    box.onclick = function(e){
//    }
//         var pos1 = "x:" + e.x + ", y:" + e.y + ",";
//         console.log(pos1);
//
//         var pos2 = "offsetX :" + e.offsetX + ", offsetY : " + e.offsetY;
//         console.log(pos2);
//
//         var pos3 = "pageX:" + e.pageX + ", pageY: " + e.pageY;
//         console.log(pos3);
//
//         var pos4 = "screenX:" + e.screenX+ ", pageY: " + e.screenY;
//         console.log(pos4);

    //box.onclick= function(e){
    //    console.log("================================");
    //    var pos1 = "clientX :" + e.clientX+ ", clientY:" + e.clientY + ",";
    //    console.log(pos1);

    //    var pos2 = "offsetX :" + e.offsetX + ", offsetY : " + e.offsetY;
    //    console.log(pos2);

    //    var pos3 = "pageX:" + e.pageX + ", pageY: " + e.pageY;
    //    console.log(pos3);

    //    var pos4 = "screenX:" + e.screenX+ ", screenY: " + e.screenY;
    //    console.log(pos4);

    //    item.style.left = e.offsetX + "px";
    //    item.style.top = e.offsetY + "px";
    //}
    //var offset = {x:0, y:0};
    //box.onmousemove = function(e){
    //// box.onclick= function(e){
    //     if(!isClick)
    //         return;
    //    item.style.left = e.pageX - box.offsetLeft - offset.x + "px";
    //    item.style.top = e.pageY - box.offsetTop - offset.y + "px";
    //}

    //box.onmouseup= function(e){
    //    if(!e.target.classList.contains("item"))
    //        return;
    //    isClick = false;
    //}

    //box.onmousedown= function(e){
    //    if(!e.target.classList.contains("item"))
    //        return;
    //    isClick = true;
    //    offset.x = e.offsetX;
    //    offset.y = e.offsetY;

    //    item = e.target;
    //}
//});
//window.addEventListener("load", function(){
//    var section = document.querySelector("#s10"); 
//    var box = section.querySelector(".box"); 
//    var item = section.querySelector(".item"); 
//    var isclick = false;
//    var offset = {x:0, y:0};
//    //onmouseup onmousedown
//
//    box.onclick = function(e){
//        if(!e.target.classList.contains("item"))
//            return;
//        if(!isclick)
//             return;
//
//    }
//    
//    section.onmousemove = function(e){
//        if(!isclick)
//            return;
//
//        item.style.left = e.pageX - box.offsetLeft - offset.x + "px";
//        item.style.top = e.pageY - box.offsetTop - offset.y + "px";
//    }
//
//    section.onmousedown = function(e){
//        if(!e.target.classList.contains("item"))
//            return;
//        isclick = true;
//
//        offset.x = e.offsetX;
//        offset.y = e.offsetY;
//
//        item = e.target;
//        // var pos1 = "x:" + e.x + ", y:" + e.y + ",";
//        // console.log(pos1);
//
//        // var pos2 = "offsetX :" + e.offsetX + ", offsetY : " + e.offsetY;
//        // console.log(pos2);
//
//        // var pos3 = "pageX:" + e.pageX + ", pageY: " + e.pageY;
//        // console.log(pos3);
//
//        // var pos4 = "screenX:" + e.screenX+ ", pageY: " + e.screenY;
//        // console.log(pos4);
//    }
//
//    section.onmouseup = function(e){
//        if(!e.target.classList.contains("item"))
//            return;
//        isclick = false;
//
//        item = null;
//    }
//});

window.addEventListener("load", function(){
    var section = document.querySelector("#s9-2");
    var box = section.querySelector(".box");
    var bar = box.querySelector(".bar");
    var item = box.querySelector(".item");


    box.onscroll= function(){

    console.log("window-innerHeigt : " + window.innerHeight);
    console.log("window-width : " + window.innerWidth);
    console.log("box.offsetTop" + box.offsetTop);
    console.log("window.scrollY" + window.scrollY);
    }
});

//     // img.parentElement;
//     // img.previousElementSibling;
//     // img.nextElementSibling;
//     // img.children[0];
//     // img.firstElementChild;
//     // img.lastElementChild;

window.addEventListener("load", function(e){
    var section = this.document.querySelector("#s9-1")
    var box = section.querySelector(".page-box");
    var active = box.querySelector(".active");
    var isMoving = false;

    box.onwheel = function(e){
        e.preventDefault();

        if(isMoving)
            return;


        if(e.deltaY > 0){
            var nextNode = active.nextElementSibling;
            if(nextNode == null)
                return;
            nextNode.classList.add("active");
            active = nextNode;
            isMoving = true;
        } else if(e.deltaY < 0){
            var preNode = active.previousElementSibling;
            if(preNode == null)
                return;
            active.classList.remove("active");
            active = preNode;
            isMoving = true;
        }
    }

    box.ontransitionend = function(){
        isMoving = false;
    }
});
//window.addEventListener("load", function(){
//    var section = document.querySelector("#s9-1");
//    var pageBox = section.querySelector(".page-box");
//    var active = pageBox.querySelector(".active");
//    var isMoving = false;
//    pageBox.onwheel= function(e){
//        e.preventDefault();
//        if(isMoving)
//            return;
//        if(e.deltaY > 0){
//            var next = active.nextElementSibling;
//            if(next == null)
//                return;
//            next.classList.add("active");
//            active = next;
//        }else if(e.deltaY < 0){
//            var before = active.previousElementSibling;
//            if(before == null)
//                return;
//            active.classList.remove("active");
//            active = before;
//        }
//        isMoving = true;
//    }
//
//    pageBox.ontransitionend = function(){
//        isMoving = false;
//    }

//});
//window.addEventListener("load", function(){
//     var section = document.querySelector("#s9-2");    
//     var box = section.querySelector(".box");
//     var bar = box.querySelector(".bar");
//
//     box.onscroll = function(e){
//         console.log(e.target.scrollTop);
//     }
//
//     document.onscroll = function(){
//         var y =  window.innerHeight- (box.offsetTop - window.scrollY);
//
//         var progress = y/3 > 100 ? 100 : y/3;
//         //console.log(progress);
//
//         box.style.opacity = progress / 100.0;
//         bar.style.width = progress+"%";
//     }
//
//});
window.addEventListener("load", function(){

});
//window.addEventListener("load", function(){
    //var section = document.querySelector("#s9-1");    
    //var box = section.querySelector(".page-box");
    //var pages = section.querySelectorAll(".page");
    //var index = 0;
    //var isWorking = false;
    
    //box.onwheel = function(e){

    //    if(!e.ctrlKey)
    //        return;
    //    // if(isWorking)
    //    //     return;

    //    e.preventDefault();
    //    isWorking = true;
    //    if(e.deltaY > 0) {
    //        if(index >= pages.length - 1){
    //            isWorking = false;
    //            return;    
    //        }
    //        index++;
    //        pages[index].classList.add("active");
    //    }else{
    //        pages[index].classList.remove("active");
    //        if(index <= 0){
    //            isWorking = false;
    //            return;    
    //        }
    //        index--;
    //    }
    //    console.log(index);
    //};    

    //box.ontransitionend = function(){
    //    isWorking = false; 
    //}
        // if(isWorking)
        //     return;

        // if(e.deltaY > 0){
        //     index++;
        //     isWorking=true;
        //     if(index > pages.length - 1){
        //         index = pages.length - 1;
        //         isWorking = false;
        //     }
        //     pages[index].classList.add("active");
        // }
        // else{
        //     pages[index].classList.remove("active");
        //     index--;
        //     isWorking=true;
        //     if(index <= 0){
        //         index = 0;
        //         pages[index].classList.add("active");
        //         isWorking = false;
        //     }

        // }
    // box.ontransitionend = function(){
    //     isWorking = false;
    // }
//});

//window.addEventListener("load", function(){
//     var section = document.querySelector("#s9-1");
//     var pageBox= section.querySelector(".page-box");
//     var current = pageBox.querySelector(".first");
//     var isMoveing = false;
//     // img.parentElement;
//     // img.previousElementSibling;
//     // img.nextElementSibling;
//     // img.children[0];
//     // img.firstElementChild;
//     // img.lastElementChild;
//     var zIndex = 1;
//     pageBox.onwheel = function(e) {
//         e.preventDefault();

//         if(isMoveing)
//             return;

//         isMoveing = true;

//         current.classList.remove("moveUp");
//         current.classList.remove("moveDown");

//         if(e.deltaY > 0){
//             var nextNode = current.nextElementSibling; 
//              if(nextNode == null)
//                 return;
//             nextNode.classList.add("moveUp");
//             current.classList.remove("moveUp");
//             current.classList.add("first");
//             current = nextNode;
             
//         }else if(e.deltaY < 0){
//            var preNode = current.previousElementSibling;
//            if(preNode == null) 
//               return;
//             current.classList.add("moveDown");
//             preNode.classList.add("first");
//             current = preNode;
//         }
//     }

//     pageBox.addEventListener("animationend",function(e){
//         if(e.animationName == "slideup"){
//             var node = current.previousElementSibling;
//             node.classList.remove("first");
//         }else if(e.animationName == "slidedown"){
//             var node = current.nextElementSibling;
//             node.classList.remove("moveDown");
//             node.classList.remove("first");
//         }
        
//         isMoveing = false;

//     },false);
// });

window.addEventListener("load", function(){
    var section = document.querySelector("#s9");
    var listBox = section.querySelector(".img-list-box");
    var active = listBox.querySelector(".active");
    var showRoom = section.querySelector(".show-room");
    var img = showRoom.querySelector("img");
    var imgSize = 40;
    img.src = active.firstElementChild.src;
         // img.parentElement;
         // img.previousElementSibling;
         // img.nextElementSibling;
         // img.children[0];
         // img.firstElementChild;
         // img.lastElementChild;
    section.onkeydown = function(e){
        if(e.code == "ArrowRight"){
            var nextNode = active.nextElementSibling;
            if(nextNode == null)
                return;
            nextNode.classList.add("active");
            active.classList.remove("active");
            active = nextNode;
        } else if(e.code == "ArrowLeft"){
            var preNode = active.previousElementSibling;
            if(preNode == null)
                return;
            preNode.classList.add("active");
            active.classList.remove("active");
            active = preNode;
        }

        img.src = active.firstElementChild.src;
    }

    listBox.onwheel = function(e){
        e.preventDefault();

        if(e.deltaY > 0){
            var nextNode = active.nextElementSibling;            
            if(nextNode == null)
                return;
            nextNode.classList.add("active");
            active.classList.remove("active");
            active = nextNode;
        }
        else if(e. deltaY < 0){
            var preNode = active.previousElementSibling;
            if(preNode == null)
                return;
            preNode.classList.add("active");
            active.classList.remove("active");
            active = preNode;
        }

        img.src = active.firstElementChild.src;
    }

    var scale = 1;
    showRoom.onwheel = function(e){
        e.preventDefault();
        if(scale < 0.3)
            scale = 0.3;
        if(scale > 1)
            scale = 1;

        scale += 0.001 * e.deltaY; 
        img.style.transform = "scale("+scale+")";
    }
});
// --- <h1>9. 이벤트 다루기(wheel) : 이미지 쇼룸</h1> ----------------------------------
// window.addEventListener("load", function(){
//     var section = document.querySelector("#s9");    
//     var imgListBox = section.querySelector(".img-list-box");
//     var showRoom = section.querySelector(".show-room");
//     var img = showRoom.querySelector("img");
    
//     var current = imgListBox.querySelector(".active");
//     var isWorking = false;

//     section.onkeydown = function(e){
//         if(e.code == "ArrowLeft"){
            
//         }
//         else if(e.code == "ArrowRight"){

//         }

//     };

//     imgListBox.onwheel = function(e){
//         if(!e.ctrlKey)
//         return;
//         e.preventDefault();
//         // img.parentElement;
//         // img.previousElementSibling;
//         // img.nextElementSibling;
//         // img.children[0];
//         // img.firstElementChild;
//         // img.lastElementChild;
//         if(isWorking)
//             return;

//         if(e.deltaY < 0){ // 왼쪽
//             var prevNode = current.previousElementSibling;

//             current.classList.remove("active");
//             prevNode.classList.add("active");
//             current = prevNode;
            
//         }
//         else{ // 오른쪽
//             var nextNode = current.nextElementSibling;

//             current.classList.remove("active");
//             nextNode.classList.add("active");
//             current = nextNode;
//         }

//         isWorking = true;
//         // img.src = current.자식이미지.src;
//         img.src = current.firstElementChild.src;
//         current.ontransitionend = function(){
//             isWorking = false;
//             //img.src = current.firstElementChild.src;
//         }        
//     };

    //var height = parseInt(img.style.height);
//     var scale = 1;
//     img.onwheel = function(e){
//         e.preventDefault();
        
//         // console.log(e.deltaY);
//         // console.log(e.deltaMode);

//         //height += e.deltaY/10;
//         scale += e.deltaY*0.001;
        
//         console.log(scale);
//         //console.log(height);
//         //img.style.height = height+"%";
//         img.style.transform = "scale("+scale+")";
//     };
// });
window.addEventListener("loat", function(){
    var section = document.querySelector("#8-1");
    var box = section.querySelector(".box");

    box.onclick = function(e){
    }
});
//window.addEventListener("load",function(){
//    var section = document.querySelector("#s8-1");    
//    var box = section.querySelector(".box");
//
//    box.onclick = function(e){
//        if(e.target.classList.contains("box")){
//            console.log("box line 밖");
//            return;
//        }
//    }
//
//    box.onkeydown = function(e){
//        if(e.target.classList.contains("box")){
//            return;
//        }
//
//        if(e.code =="Delete"){
//
//            console.log(e.target);
//            e.target.classList.add("aaa");
//            console.log(e.target.classList);
//        }
//    }
//});
// --- <h1>8. 이벤트 다루기(focus/blur/tabindex), 스타일(:valid,..) : 입력 값 유효성 검사하기</h1> ----------------------------------
window.addEventListener("load", function(){
    var section = document.querySelector("#s8");    
    var form = section.querySelector("form");
    var unameInput= form.querySelector("input[name=uname]");
    form.onsubmit = function(e){
        e.preventDefault();

        console.log(unameInput.value);
        if(unameInput.value.length < 3)
            unameInput.setCustomValidity("이름으로 2자이상");


        console.log("submit");
    };

    //var selectedItem = section.querySelector(".selected");
});

// 7
window.addEventListener("load", function(){
    var section = document.querySelector("#s7-1");
    var clickBox = section.querySelector(".src-item-list");
    var srcBoxs = section.querySelectorAll(".src-item");
    var dstBox = section.querySelector(".dst-item-list");

    clickBox.onclick = function(e){
        clickBox.classList.remove("active");
        clickBox.ontransitionend = null; 
        e.target.classList.add("active");
        clickBox = e.target;
        console.log(clickBox.ontransitionend);
    }

    
    dstBox.onclick = function(e){
        var style = window.getComputedStyle(e.target);
        var left = style.getPropertyValue("left");
        var top = style.getPropertyValue("top");

        clickBox.style.left = left;
        clickBox.style.top = top;
        clickBox.ontransitionend = function(e){
            clickBox.classList.add("finished");
        };
    };
});

//window.addEventListener("load", function(){
//    var section = document.querySelector("#s7");
//    var box = section.querySelector(".box");
//    var firstBox = section.querySelector(".active");
//    var isFirstClick = false;
//    var isSecondClick = false;
//    box.onclick=function(e){
//        
//        if(e.target.classList.contains("src-item"))
//            isFirstClick = true;
//        else if(e.target.classList.contains("dst-item") && isFirstClick){
//            isFirstClick = false;
//            isSecondClick = true;
//        }
//        else
//            return;
//
//
//        if(isFirstClick){
//            if(firstBox!=null)
//                firstBox.classList.remove("active");
//            e.target.classList.add("active");
//            firstBox= e.target;
//        }else if(isSecondClick){
//            var targetStyle = window.getComputedStyle(e.target);
//            var left = targetStyle.getPropertyValue("left");
//            var top = targetStyle.getPropertyValue("top");
//            firstBox.style.left = left;
//            firstBox.style.top = top;
//            firstBox.style.transform = "rotate(360deg)";
//            //var left = Math.round(e.target.getBoundingClientRect().left);
//            //var top = Math.round(e.target.getBoundingClientRect().top);
//            //firstBox.style.left = (left - box.offsetLeft) + "px";    
//            //firstBox.style.top = (top - box.offsetTop) + "px";    
//            firstBox.ontransitionend = function(){
//            console.log("끝");
//            firstBox.classList.add("finished");
//            firstBox.ontransitionend = null;
//            }
//        }
//
//        
//    }
//});

// ---6. 스타일 다루기: 아코디언-------------------------

//window.addEventListener("load", function(){
//    var section = document.querySelector("#s6");
//    var box = section.querySelector(".accordion-box");
//    var content = section.querySelectorAll(".accordion-content");
//    var current = section.querySelector(".active");
//    box.onclick=function(e){
//        
//        var valid= e.target.nodeName == "H2" || e.target.classList.contains("accordion-header");
//
//        if(!valid)
//            return;
//
//
//        if(current != null)
//            current.classList.remove("active");
//
//        e.target.classList.toggle("active");
//        current = e.target;
//        
//    }
//    
//
//});
window.addEventListener("load", function(){
    var section = document.querySelector("#s6");
    var box = section.querySelector(".accordion-box");
    var current = section.querySelector(".active");
    box.onclick=function(e){
        if(e.target.nodeName != "H2" && !e.target.classList.contains("accordion-header"))
            return;

        if(current != null)
            current.classList.remove("active");

        e.target.classList.toggle("active");
        current = e.target;
    };


});
//window.addEventListener("load", function(){
//    var section = document.querySelector("#s6");
//    var box = section.querySelector(".accordion-box");
//    var current = null;
//    box.onclick = function(e){
//        if(current != null)
//            current.classList.remove("active");
//        e.target.classList.toggle("active"); 
//
//        current = e.target;    
//    }
//});
//-------------------------------------------
//5-1. 숙제) 카드클릭시 이동
//window.addEventListener("load", function(){
//    var section = document.querySelector("#s5-1");
//    var card = section.querySelector("ul");
//    var lis = section.querySelectorAll("li");
//
//    var cardNames = [];
//    lis.forEach(function(item){
//        cardNames.push(item.className);
//    });
//
//    var pos = [];
//    (function(){
//        for(var i = 0; i < cardNames.length; i++)
//            pos.push(i);
//    })();
//
//    // 유연성 가독성
//    card.onclick = function(e){
//
//        var clickPosIndex = cardNames.indexOf(e.target.className);
//        var lastIndex = lis.length - 1;
//
//        for(var i = 0; i < lis.length; i++){
//            if(clickPosIndex == 0)
//                lis[i].className = cardNames[pos[i] = pos[i] + 1 > lastIndex ? 0 : pos[i] + 1];  
//            else if(clickPosIndex == lastIndex)
//                lis[i].className = cardNames[pos[i] = pos[i] - 1 < 0 ? lastIndex : pos[i] - 1];  
//        }
//    }
//});

window.addEventListener("load", function(){
    var section = document.querySelector("#s5-1");
    var box = section.querySelector(".box");
    var items = box.querySelectorAll(".item");
    var classNames = [] ;
    
    for(var i = 0; i < items.length; i++){
        classNames.push(items[i].className);
    }

    box.onclick = function(e){
        if(e.target.className == "box" || e.target.tagName == "UL")
            return;

        var click = e.target.className;

        var clickIndex = 0;;
        for(var i = 0; i < items.length; i++){
            if(items[i].className == click)
                clickIndex = i;
        }
        console.log(clickIndex);

        if(clickIndex == 0){
            for(var i = 0; i < items.length; i++) {
                var index = i + 1 > items.length - 1 ? 0 : i + 1;
                items[index].className = classNames[i];
            }       
            console.log(items);
        }else if(e.target.className == "card-3th"){

        }
    }
});

//5.스타일 다루기:아이템 이동하기
window.addEventListener("load", function(){
    var section = document.querySelector("#s5");    
    var btnNext = section.querySelector(".btn-next");
    var lis = section.querySelectorAll("li");

    var offIndex = 0; 
    btnNext.onclick = function(e){
        e.preventDefault();

        offIndex++;
        
        lis[(0+offIndex)%3].className = "card-1th";        
        lis[(1+offIndex)%3].className = "card-2th";
        lis[(2+offIndex)%3].className = "card-3th";

    };
});

//<h1>4. 스타일 다루기 : 값 입력과 동적으로 박스 스타일 변경하기</h1>

window.addEventListener("load", function(){
    var section = document.querySelector("#s4");
    var styleInput = section.querySelector(".style-input");
    var widthInput = section.querySelector(".width-input");
    var radiusInput= section.querySelector(".radius-input");
    var colorInput = section.querySelector(".color-input");
    var showBox = section.querySelector(".item");

    styleInput.oninput = function(e){
        var preNode = styleInput.previousElementSibling;
       showBox.style.borderStyle = e.target.value;
       preNode.innerText = "style :" +e.target.value;
    }

    widthInput.oninput = function(e){
        var preNode = widthInput.previousElementSibling;
        showBox.style.borderWidth= e.target.value + "px";
        preNode.innerText = "width: " + e.target.value + "px";
    }

    radiusInput.oninput = function(e){
        var preNode = radiusInput.previousElementSibling;
        showBox.style.borderRadius = e.target.value + "px";
        preNode.innerText = "radius" + e.target.value + "px";
    } 

    colorInput.oninput = function(e){
        var preNode = colorInput.previousElementSibling;
        showBox.style.borderColor = e.target.value;
        preNode.innerText = "color :" + e.target.value;
    }

});

//window.addEventListener("load", function(){
//    var section = document.querySelector("#s4");    
//    var styleInput = section.querySelector(".style-input");
//    var widthInput = section.querySelector(".width-input");
//    var radiusInput = section.querySelector(".radius-input");
//    var colorInput = section.querySelector(".color-input");
//    var item = section.querySelector(".item");
//
//    styleInput.oninput = function(){
//        item.style.borderStyle = styleInput.value;
//        console.log(item.style.cssText);
//    }
//
//    widthInput.oninput = function(){        
//        item.style.borderWidth = widthInput.value+"px";
//        console.log(item.style.cssText);
//    }
//
//    radiusInput.oninput = function(){        
//        item.style.borderRadius = radiusInput.value+"px";
//        console.log(item.style.cssText);
//    }
//
//    colorInput.oninput = function(){        
//        item.style.borderColor = colorInput.value;
//        console.log(item.style.cssText);
//    }
//
//});

// 3-1)숙제 계산기
window.addEventListener("load", function(){
    var section = document.getElementById("s3-1");
    var txtInfo = section.querySelector(".box > input");
    var buffer = "";
    var isOperationState = false;
    var isResult = false;

    section.onclick = function(e){
        e.preventDefault();

        if(e.target.nodeName == "DIV")
            return;

        if(txtInfo.value == "0")
            txtInfo.value = "";

        var operation = e.target.value;

        if(operation == "+" || 
            operation == "-" ||
            operation == "*" ||
            operation == "/" ||
            operation == "="){
            e.stopPropagation();
            if(isResult){
                buffer += txtInfo.value;
                txtInfo.value = eval(buffer);
                isResult = false;
            }

            isOperationState = true;
            buffer = txtInfo.value + operation;
            return;
        }

        if(isOperationState){
            txtInfo.value="";
            isResult = true;
            isOperationState = false;
        }

        txtInfo.value += e.target.value;
    }
});
//<h1>3. 이벤트 객체 : 개선된 계산기</h1> -------------------------
//window.addEventListener("load", function(){
//    var section = document.querySelector("#s3");    
//    var txtInput = section.querySelector("input[type=text]");
//    var divInput = section.querySelector("input[value='/']");
//
//    divInput.onclick = function(e){
//        e.preventDefault();
//       // e.stopPropagation();
//
//        console.log("나눗셈 버튼");
//    }
//    
//    var box = section.querySelector("div");
//    box.addEventListener("click", function(e){
//         e.preventDefault();
//    
//        if(e.target.nodeName == "INPUT"){
//            
//            if(txtInput.value == "0")
//                txtInput.value = "";
//
//            var value = txtInput.value;
//            console.log(e.target.value); 
//            value += e.target.value;
//            txtInput.value = value;
//        }
//    },true);
    // box.onclick = function(e){
    // e.preventDefault();
    
    // if(e.target.nodeName == "INPUT"){
        
    //     if(txtInput.value == "0")
    //         txtInput.value = "";

    //     var value = txtInput.value;
    //     console.log(e.target.value); 
    //     value += e.target.value;
    //     txtInput.value = value;
    // }

    // var numButtons = section.querySelectorAll(".num");
    
    // for(var i=0; i<numButtons.length; i++)
    //     numButtons[i].onclick = function(e){
    //         var value = txtInput.value;
    //         console.log(e.target.value);
    //         value += e.target.value;
    //         txtInput.value = value;
    //     };
        
//});
//<h1>2. DOM 속성 다루기 : 계산기</h1> -------------------------
//window.addEventListener("load", function(){
//    
//    var section = document.querySelector("#s2");    
//    var xInput = section.querySelector(".x-input");
//    var yInput = section.querySelector(".y-input");
//    var button = section.querySelector(".button");
//    var resultSpan = section.querySelector(".result-span");
//
//    button.onclick = function(){
//        var x = parseInt(xInput.value);
//        var y = parseInt(yInput.value);        
//        resultSpan.innerText = x + y;
//    };
//
//});
window.addEventListener("load", function(){
    var section = document.querySelector("#s3");
    var txtInfo = section.querySelector("input[type]");
    var box = section.querySelector(".box");

    box.onclick = function(e){
        e.preventDefault();
        txtInfo.value = e.target.value;
        console.log(e.target.classList[1]);
    }
});

// 1. 노드 선택방법 -------------------------------------------
//window.addEventListener("load", function(){
//    // --- 초기화 ----------------
//    // 2. Selectors API를 이용하여 노드를 선택하는 방법
//    var section = document.querySelector("#s1");
//    //var input = section.querySelector(".input");
//    var input = section.querySelector("input[type=text]");
//    var button = section.querySelector("input[type=button]");
//
//    // 1. 이 방식은 DOM의 노드선택 방법
//    var section = document.getElementById("s1");
//    var input = section.getElementsByClassName("input")[0];    
//    var button = section.getElementsByClassName("button")[0];
//
//    button.onclick = function(){
//        input.value = "안녕하세요";
//    };      
//
//});
window.addEventListener("load", function(){
    var section = document.querySelector("#s2");
    var x = section.querySelector(".x-input");
    var y = section.querySelector(".y-input");
    var plusButton = section.querySelector(".button");
    var result = section.querySelector("div>span>span+span");

    plusButton.onclick = function(){
        result.innerText = parseInt(x.value) + parseInt(y.value);
    }

});

//window.addEventListener("load", function(){
//    // --- 초기화 ----------------
//    var btn1 = document.getElementById("btn1");
//    btn1.onclick = printSum;
//        
//    function printSum(){
//        var x, y;
//        x = prompt('x 값을 입력하세요');
//        y = prompt('x 값을 입력하세요');
//        x = parseInt(x);
//        y = parseInt(y);
//        btn1.value = x+y;
//        btn1.type="text";
//        
//    }
//
//});
window.addEventListener("load", function(){
    var section = document.querySelector("#s1");
    var box = section.querySelector(".input");
    var clickButton= section.querySelector(".button");
    var btn1 = document.getElementById("btn1");

    clickButton.onclick = function(){
        box.value = "방가요";
    }

    btn1.onclick = function(){
        var x = prompt("x값을 입력하세요");
        var y = prompt("y값을 입력하세요");
        box.value = parseInt(x) + parseInt(y);
    };

});
