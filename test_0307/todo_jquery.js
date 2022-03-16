let count = 0;

$("#todo_form").on("submit",function(e){
    e.preventDefault();

    //1 -인풋추가 - 체크박스로 타입변경
    const li = $("<li>");
    const checkbox = $("<input>").prop("type","checkbox");
    const button = $("<button>").text("X");

    $("#todo_board").append(li);
    li.append(checkbox).append($("#todo_input").prop("value")).append(button);

    count++;
    $("#score").text(count);

    //checkbox와 button이벤트
    checkbox.on("click", function(){
        if($(this).prop("checked") ) {
            $(this).parent.css("color","lightGray");
            count--;
        }
        else {
            $(this).parent.css("color","black");
            count++;
        }
        $("#score").text(count);
    });
    button.on("click",function(){
        //button객체를 들고옴 > 형제노드
        $(this).parent().remove(); //첫번째 자식을 찾아서 그 속성 중에서 삭제
        //$(this).siblings("input[type='checkbox']").prop("checked")
        if(!$(this).parent().children().filter(":first").prop("checked") ) {
            count--;
            $("#score").text(count);
        }
    })
});