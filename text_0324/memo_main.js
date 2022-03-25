new Vue({
    el : "#app",
    data : {
        //메모를 삭제할 때 고유의 데이터를 이용해서 삭제하려고 id씀
        id : 1,
        title : '',
        memo : '',
        memolist : [],
    },
    methods : {
        addMemo() {
            this.memolist.push({
                id: this.id, 
                title: this.title, 
                memo: this.memo });
            this.id++; //push한 이후에 id값을 증가해서 num
            this.title = "";
            this.memo = "";
        },
        deleteMemo (id) {
            //memolist의 요소를 삭제함
            //배열의 splice(인덱스, 갯수) 메서드를 이용해서 삭제
            //문제 : 배열의 요소가 객체이기에 인덱스를 찾는 함수 사용안됨
            //해결방법 : 객체안의 id값을 비교해서 index값을 찾아냄
            //          배열의 값을 하나씩 비교하기 위한방법은? ->for과 foreach
            //방법선택 : forEach사용
            let index =0;
            this.memolist.forEach((element,i) => {
                if(element.id == id) {
                    index = i;
                }
            });
            //인덱스 값을 찾은 후 삭제
            this.memolist.splice(index,1)
        }
    },

});


