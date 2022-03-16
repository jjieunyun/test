        //사용되는 변수들
        'use strict'
        
        let score = 0;
        let count = 0;     
        const quizeArray = [
                {quiz:"뽑으면 우는 식물은?",answer:"우엉"},
                {quiz:"소가 웃으면?",answer:"우하하"},
                {quiz:"세상에서 가장 착한 사자는?",answer:"자원봉사자"},
                {quiz:"바나나가 웃으면?",answer:"바나나킥"},
                {quiz:"신데렐라가 잠을 못 자면?",answer:"모짜렐라"}
            ];

        let newQuiz = [];

        //0. input_text 맨 처음에 숨기기
        $("#input_text").hide();
        //1. 시작을 눌렀을 때, 입력란 보이고 문제출력
        $("#start").on("click", function(e){
            e.preventDefault();  //새로고침 막기
            quizeStart();
            $("#score").text("");
            $("#input_form").slideDown();
            $("#input_form").children().first().focus();  //input text
        
        });
        
        //2. submit이벤트가 발생하면 input값 비교
        $("#input_form").on("submit", function(e){
            e.preventDefault();   //새로고침 막기
            const answer = newQuiz[count].answer;
            const $user = $("#input_form").children().first().val();
            switch(count) {
                case "0" :
                console.log(newQuiz[0].quiz);
                count++;

                if($user == answer) {
                score++;
                $("#score").text(`${score}점 입니다.`);
            }
                break;
            

            case "1" :
                console.log(newQuiz[1].quiz);
                count++;

                if($user == answer) {
                score++;
                $("#score").text(`${score}점 입니다.`);
            }
                break;
            

            case "2" : 
                console.log(newQuiz[2].quiz);
                count++;

                if($user == answer) {
                score++;
                $("#score").text(`${score}점 입니다.`);
            }
                break;
            

            case "3" : 
                $("#input_form").hide();   //입력창 멈추기
                $("#quiz").text("");   //텍스트 없애기
                count = 0;
                score = 0;
                break;
        }});

        //3. 랜덤퀴즈 동작함수
        function quizeStart () {
            while(quizeArray.length > 3) {
            let moveQuiz = quizeArray.splice(Math.floor(Math.random() * quizeArray.length),1)[0];
            newQuiz.push(moveQuiz)
        }};