Vue.component('recommend-list',{
    props : ['recommend'],
    template : 
    `
    <div>
        <!-- 뷰티파이 카드 디자인 위에 리스트 추가 -->
        
    <v-container>
        <v-card>
            <v-slide-x-transition group>
                <!-- 리스트아이템을 이용한 추천코멘트 반복-->
                <v-list-item v-for="(r, i) in recommend" :key="i">
                    <v-list-item-content>
                        <v-list-item-title>{{r}}를 추천합니다</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <!-- 리스트아이템을 이용한 추천코멘트 반복 끝-->
            </v-slide-x-transition>
        </v-card>
        <v-container>
    </div>
    `,
    data : function (){
        return {}
    }
})