window.addEventListener("load", function(){
    var section = document.querySelector("#s7");
    var box = section.querySelector(".box");
    var firstBox= section.querySelector(".active");
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
            //firstBox.style.left= clickBox.style.left;    
            //firstBox.style.left = ;
            //firstBox.style.top = ;
            console.log(box.offsetLeft);
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
window.addEventListener("load", function(){
    var section = document.querySelector("#s3");    
    var txtInput = section.querySelector("input[type=text]");
    var divInput = section.querySelector("input[value='/']");

    divInput.onclick = function(e){
        e.preventDefault();
       // e.stopPropagation();

        console.log("나눗셈 버튼");
    }
    
    var box = section.querySelector("div");
    box.addEventListener("click", function(e){
         e.preventDefault();
    
        if(e.target.nodeName == "INPUT"){
            
            if(txtInput.value == "0")
                txtInput.value = "";

            var value = txtInput.value;
            console.log(e.target.value); 
            value += e.target.value;
            txtInput.value = value;
        }
    },true);
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
        
});
//<h1>2. DOM 속성 다루기 : 계산기</h1> -------------------------
window.addEventListener("load", function(){
    
    var section = document.querySelector("#s2");    
    var xInput = section.querySelector(".x-input");
    var yInput = section.querySelector(".y-input");
    var button = section.querySelector(".button");
    var resultSpan = section.querySelector(".result-span");

    button.onclick = function(){
        var x = parseInt(xInput.value);
        var y = parseInt(yInput.value);        
        resultSpan.innerText = x + y;
    };

});

// 1. 노드 선택방법 -------------------------------------------
window.addEventListener("load", function(){
    // --- 초기화 ----------------
    // 2. Selectors API를 이용하여 노드를 선택하는 방법
    var section = document.querySelector("#s1");
    //var input = section.querySelector(".input");
    var input = section.querySelector("input[type=text]");
    var button = section.querySelector("input[type=button]");

    // 1. 이 방식은 DOM의 노드선택 방법
    var section = document.getElementById("s1");
    var input = section.getElementsByClassName("input")[0];    
    var button = section.getElementsByClassName("button")[0];

    button.onclick = function(){
        input.value = "안녕하세요";
    };      

});

window.addEventListener("load", function(){
    // --- 초기화 ----------------
    var btn1 = document.getElementById("btn1");
    btn1.onclick = printSum;
        
    function printSum(){
        var x, y;
        x = prompt('x 값을 입력하세요');
        y = prompt('x 값을 입력하세요');
        x = parseInt(x);
        y = parseInt(y);
        btn1.value = x+y;
        btn1.type="text";
        
    }

});
