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
        
    },

});


