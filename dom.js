//5-1. 숙제) 카드클릭시 이동
window.addEventListener("load", function(){
    var section = document.querySelector("#s5-1");
    var clickCard = section.querySelector("ul");
    var lis = section.querySelectorAll("li");
    var cardNames = ["card-1th", "card-2th", "card-3th"];
    var rightOffIndex = 0;
    var leftOffIndex = 0;

    clickCard.onclick = function(e){

        var firstPosIndex = cardNames.indexOf(e.target.className);

        if(firstPosIndex == 0){
            lis[0].className = cardNames[(1 + rightOffIndex) % 3];
            lis[1].className = cardNames[(2 + rightOffIndex) % 3];
            lis[2].className = cardNames[(0 + rightOffIndex) % 3];
            rightOffIndex++;
        }else if(firstPosIndex == 2){

            //leftOffIndex = leftOffIndex % 3 == 0 ? 2 : leftOffIndex;

            lis[0].className = cardNames[calculateIndex(leftOffIndex)];  
            lis[1].className = cardNames[calculateIndex(leftOffIndex + 1)];
            lis[2].className = cardNames[calculateIndex(leftOffIndex + 2)];

            leftOffIndex++;
        }

        console.log(lis);
        }
});

 var calculateIndex = function(index){
     if(index >= 0 && index <= 2)
        return index;
     return index = index % 3 == 0 ? 2 : index;
 }
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
