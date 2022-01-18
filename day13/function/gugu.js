//구구단 함수 정의
//return이 없는 경우
function gugudan(dan){
    for(var i =1; i <= 9; i++){
        document.write(dan + " X " + i + " = " + (4*i) + "<br>");
    }
}

gugudan(6);     //호출
