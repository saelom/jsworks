/* 조건
    성적 점수가 90점 이상이면 'A학점'
    성적 점수가 80점 이상이면 'B학점'
    성적 점수가 70점 이상이면 'C학점'
    성적 점수가 60점 이상이면 'D학점'
    성적 점수가 60점 미만이면 'F학점'
*/

//입력 (변수 선언 및 값 저장)
var score = 55;
var grade = "";

//연산(if 조건문) 및 출력

if(score >= 90){
    grade = "A학점";   
   
}
else if(score >= 80){
    grade = "B학점";   
   
}
else if(score >= 70){
    grade = "C학점";   
 
}
else if(score >= 60){
     grade = "D학점" ;  
   
}
else{
    grade = "F학점";
  
}

document.write("학점은 <span>"+ grade + "</span>입니다.")






