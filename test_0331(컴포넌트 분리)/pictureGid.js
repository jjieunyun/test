Vue.component('picture-grid',{
    props : [],
    template : 
    `
    <div>
        <v-container>
        <h1 class=" d-flex justify-center mt-5">현재 인기있는 곳 입니다</h1>
        <p class=" d-flex justify-center">추천을 통해 인기있는 곳을 골라주세요</p>

        <!--card contets-->
        <v-row>
            <v-col cols="12" sm="6" v-for="(place,index) in placeList">
                <v-card class="ma-0" max-width="600px">
                    <v-img :src="place.img" height="250"></v-img>
                    <v-card-text>
                        <h2>{{title}}</h2>
                    </v-card-text>
                    <v-card-actions class=" d-flex justify-space-between">
                        <h3>{{place.count}}</h3>
                        <v-btn @click="countUp(index)" :color="place.color" dark>추천</v-btn>
                    </v-card-actions>
                    
                </v-card>
            </v-col>

        </v-row>
    </v-container>
    </div>
    `,
    data () {
        return {
            placeList : [
                {
                    title : '시민 공원',
                    img : './img/1.jpg',
                    count : 0,
                    color : 'red'
                    
                },
                {
                    title : '도시 야경',
                    img : './img/2.jpg',
                    count : 0,
                    color : 'blue'
                    
                },
                {
                    title : '광안 대교',
                    img : './img/3.jpg',
                    count : 0,
                    color : 'green'
                    
                },
                {
                    title : '해운대',
                    img : './img/4.jpg',
                    count : 0,
                    color : 'yellow'
                },
            ]
        }
    },
    methods : {
        countUp(index) {
            this.placeList[index].count +=1;
            this.$emit('recommend-title',
            this.placeList[index].title,)
        }
    },
})