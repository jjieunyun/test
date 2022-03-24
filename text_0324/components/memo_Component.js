Vue.component('memo-component',{
    props : [ 'title','memo', 'id' ],
    template : 
    `<div class="page">
        <h3 class="title"> <button class="btn" @click="deletememo">x</button>
            <slot name="title1">{{title}}</slot>
        </h3>
        <p><slot name="memo1">{{memo}}</slot><p>
    <hr style="border: solid 1px salmon">
        <p class="time">{{time}}</p>
    </div>`,
    data () {
        return {
            
        }
    },
    methods : {
        deletememo () {
            this.$emit('delete',this.id)
        }
    },
    computed : {
        time() {
            const date = new Date();
            //getMonth는 0~11까지 반환하기때문에 +1해줌
            return date.getUTCFullYear()+"년 " + (date.getMonth()+1) + "월 " + date.getDate() + "일"
        },
    }
});