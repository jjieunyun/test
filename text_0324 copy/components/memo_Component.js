Vue.component('memo-component',{
    props : { popsMemolist:Array }, //삭제할 때 자신이 어떤 위치를 가지고 있는지 알려주는 역할
    template : 
    `<div class="page">
        <h3 class="title"> <button class="btn" >x</button>
            <slot name="title"></slot>
        </h3>
        <p><slot name="memo"></slot><p>
    <hr style="border: solid 1px salmon">
        <p class="time">{{time}}</p>
    </div>`,
    data () {
        return {

        }
    },
    methods : {
        /*deletememo (e) {
            const index = e.target.getAttribute('index');
            .splice(index,1)*/
        
            
    
    },
    computed : {
        time() {
            const date = new Date();
            //getMonth는 0~11까지 반환하기때문에 +1해줌
            return date.getUTCFullYear()+"년 " + (date.getMonth()+1) + "월 " + date.getDate() + "일"
        },
    }
});

/*
computed에 newDate객체를 생성하지 않고 아래와 같이 data에 생성해서
this.를 사용하는 방법으로 
사용할 수 있음
data () {
    return {
        
    }
},
computed : {
    fomatTime () {
        return this.time,getUTCFullYear() + '년'
    }
}


*/