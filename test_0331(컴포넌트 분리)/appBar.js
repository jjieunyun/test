Vue.component('appbar-component',{
    template : 
    `<div>

            <v-app-bar app color="#607D8B" dark>
                <v-app-bar-nav-icon @click="navDrawer = true"></v-app-bar-nav-icon>
                <v-toolbar-title>부산 관광 안내</v-toolbar-title>
            </v-app-bar>

            

            <!--navi drawer 영역-->
            
            <v-navigation-drawer absolute temporary v-model="navDrawer">
                <v-toolbar flat height="70px">
                    <v-list>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-icon class="grey white--text">mdi-account</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>즐거운 부산</v-list-item-title>
                                <v-list-item-subtitle>다이나믹부산</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-toolbar>
                <v-divider></v-divider>

                <!--menulist 작성-->
                <v-list>
                    <v-list-item @click="" v-for="item in itemList" :key="index">
                        <v-list-item-action >
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{item.title}}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>

    </div>
    `,
    data () {
        return {
            itemList : [
                {
                    title : '메인페이지',
                    icon : 'mdi-card-account-details-outline',
                    link : '#',
                    
                },
                {
                    title : '관광지소개',
                    icon : 'mdi-clipboard-list-outline',
                    link : '#',
                },
                {
                    title : '추천명소',
                    icon : 'mdi-flower',
                    link : '#',
                }
            ],
        }
    }
})