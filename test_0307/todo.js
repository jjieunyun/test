//0. todo_submit DOM가져옴
const todoInput = document.querySelector("#todo_input");
const todoSubmit = document.querySelector("#todo_form");

//갯수확인
let count = 0;

//이벤트리스너를 통해 이벤트 발생
//submit이벤트는 Form에서 발생하는 이벤트
todoSubmit.addEventListener("submit", todoFormSubmit);

//1. 버튼동작 함수만들기 - +버튼 누르면 li추가
function todoFormSubmit (e) {
    e.preventDefault();
    
    //1 -인풋추가 - 체크박스로 타입변경
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    //2 - 텍스트노드생성
    const text = document.createTextNode(todoInput.value);

    //X버튼생성
    const button = document.createElement("button");
    button.textContent = "X" 

    //board DOM가져오기
    const todoBoard = document.querySelector("#todo_board");
    //board에 추가
    todoBoard.appendChild(li);

    //li에 체크박스 내용과 X버튼 추가
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);

    //input에 빈 문자열 할당
    todoInput.value = "";

    //checkbox이벤트 추가
    checkbox.addEventListener("click", checkTodo);
    //button이벤트 추가
    button.addEventListener("click", deletTodo);
    //남은 할일 추가
    count--;
    document.querySelector("#score").textContent = count;
    
}

//2. 체크박스함수 : 체크되면 색깔바꾸기 - todoCheck & count
function checkTodo(e) {
    const todoBoard = document.querySelector("#todo_board");
    if (!e.target.checked) {
        //체크박스가 checked되면 li의 색을 lightGray로 바꿈
        e.target.parentNode.style.color = "lightGray";
        count--;
    }
    else { //체크박스가 checked가 아니면 li의 색을 black으로 바꿈
        e.target.parentNode.style.color = "black"; 
        count++;
    }
    document.querySelector("#score").textContent = count;
    
}

//3. X누르면 list삭제 함수 - todoDelete
function todoDelete(event) {
    event.target.parentNode.remove();
}


//X버튼 눌렀을때 count 감소
function deletTodo(e) {
    //e.target은 button요소
    //li요소를 가져오기위해 parentNode(부모)를 찾음
    e.target.parentNode.remove();
    //checkbox를 찾기위해 부모의 첫번째 요소노드를 찾음
    const check = e.target.parentNode.firstElementChild.checked;

    if(check){
        count--;
    }

    document.querySelector("#score").textContent = count;
}

