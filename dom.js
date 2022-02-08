
window.addEventListener("load",function(){
    var section = document.querySelector("#s9");    
    var images= section.querySelectorAll(".img-list-box>ul>li>img");
    var imageUl = section.querySelector(".img-list-box");

    var imageWidths = [];
    for(var i = 0; i < images.length; i++){
        var targetStyle = window.getComputedStyle(images[i]);
        var width = parseInt(targetStyle.getPropertyValue("width"));
        imageWidths.add(width);
    }
    var clickNum = 0; 
    var pos = [];

    (function(){
        for(var i; i < images.length; i++)
        pos.add(i);
    })();



    imageUl.onclick = function(){
        clickNum++;
        for(var i = 0; i < images.length; i++){
            var value = (100 * clickNum); 
            images[i].style.left =  + "px";
        }
    }
    
});

window.addEventListener("load",function(){
    var section = document.querySelector("#s8-1");    
    var box = section.querySelector(".box");

    box.onclick = function(e){
        if(e.target.classList.contains("box")){
            console.log("box line 밖");
            return;
        }
    }

    box.onkeydown = function(e){
        if(e.target.classList.contains("box")){
            return;
        }

        if(e.code =="Delete"){

            console.log(e.target);
            e.target.classList.add("aaa");
            console.log(e.target.classList);
        }
    }
});
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
    var section = document.querySelector("#s7");
    var box = section.querySelector(".box");
    var firstBox = section.querySelector(".active");
    var isFirstClick = false;
    var isSecondClick = false;
    box.onclick=function(e){
        
        if(e.target.classList.contains("src-item"))
            isFirstClick = true;
        else if(e.target.classList.contains("dst-item") && isFirstClick){
            isFirstClick = false;
            isSecondClick = true;
        }
        else
            return;


        if(isFirstClick){
            if(firstBox!=null)
                firstBox.classList.remove("active");
            e.target.classList.add("active");
            firstBox= e.target;
        }else if(isSecondClick){
            var targetStyle = window.getComputedStyle(e.target);
            var left = targetStyle.getPropertyValue("left");
            var top = targetStyle.getPropertyValue("top");
            firstBox.style.left = left;
            firstBox.style.top = top;
            firstBox.style.transform = "rotate(360deg)";
            //var left = Math.round(e.target.getBoundingClientRect().left);
            //var top = Math.round(e.target.getBoundingClientRect().top);
            //firstBox.style.left = (left - box.offsetLeft) + "px";    
            //firstBox.style.top = (top - box.offsetTop) + "px";    
            firstBox.ontransitionend = function(){
            console.log("끝");
            firstBox.classList.add("finished");
            firstBox.ontransitionend = null;
            }
        }

        
    }
});

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
//-------------------------------------------
//5-1. 숙제) 카드클릭시 이동
window.addEventListener("load", function(){
    var section = document.querySelector("#s5-1");
    var card = section.querySelector("ul");
    var lis = section.querySelectorAll("li");

    var cardNames = [];
    lis.forEach(function(item){
        cardNames.push(item.className);
    });

    var pos = [];
    (function(){
        for(var i = 0; i < cardNames.length; i++)
            pos.push(i);
    })();

    // 유연성 가독성
    card.onclick = function(e){

        var clickPosIndex = cardNames.indexOf(e.target.className);
        var lastIndex = lis.length - 1;

        for(var i = 0; i < lis.length; i++){
            if(clickPosIndex == 0)
                lis[i].className = cardNames[pos[i] = pos[i] + 1 > lastIndex ? 0 : pos[i] + 1];  
            else if(clickPosIndex == lastIndex)
                lis[i].className = cardNames[pos[i] = pos[i] - 1 < 0 ? lastIndex : pos[i] - 1];  
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
    var radiusInput = section.querySelector(".radius-input");
    var colorInput = section.querySelector(".color-input");
    var item = section.querySelector(".item");

    styleInput.oninput = function(){
        item.style.borderStyle = styleInput.value;
        console.log(item.style.cssText);
    }

    widthInput.oninput = function(){        
        item.style.borderWidth = widthInput.value+"px";
        console.log(item.style.cssText);
    }

    radiusInput.oninput = function(){        
        item.style.borderRadius = radiusInput.value+"px";
        console.log(item.style.cssText);
    }

    colorInput.oninput = function(){        
        item.style.borderColor = colorInput.value;
        console.log(item.style.cssText);
    }

});

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
