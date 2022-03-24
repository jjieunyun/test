new Vue({
    el : "#app",
    data : {
        id : 0,
        title : '',
        memo : '',
        memolist : [],
    },
    methods : {
        addMemo() {
            this.memolist.push({id: this.id,title: this.title, memo: this.memo});
            this.id++;
            this.title = "";
            this.memo = "";
        },
        deleteMemo (id) {
            let index =0;
            this.memolist.forEach((value,i) => {
                if(value.id == id) {
                    index = i;
                }
            });
            this.memolist.splice(index,1)
        }
    },

});