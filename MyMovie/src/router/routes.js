import HomePage from '@/components/homepage/HomePage.vue';
import BrowsePage from '@/components/browsepage/BrowsePage.vue';
import LoginPage from '@/components/loginpage/LoginPage.vue'
import SingleMoviePage from '@/components/singlemoviepage/SingleMoviePage.vue'
import PeoplePage from '@/components/peoplepage/PeoplePage.vue'
import SinglePeoplePage from '@/components/singlepeoplepage/SinglePeoplePage.vue'
import LogOutPage from '@/components/logoutpage/LogOutPage.vue'

export const routes = [
    {path : '/home', name : 'home', component : HomePage, meta : {requiresLogin : true}},
    {path : '/browse', name : 'browse', component : BrowsePage, meta : {requiresLogin : true}},
    {path : '/watchlist', name : 'watchlist', component : BrowsePage, meta : {requiresLogin : true}},
    {path : '/movies', name : 'movies', component : BrowsePage, meta : {requiresLogin : true}},
    {path : '/movie/:id', name : 'movieDetail', component : SingleMoviePage, meta : {requiresLogin : true}},
    {path : '/tvshows', name : 'tvshows', component : BrowsePage, meta : {requiresLogin : true}},
    {path : '/people', name : 'people', component : PeoplePage, meta : {requiresLogin : true}},
    {path : '/people/:id', name : 'person', component : SinglePeoplePage, meta : {requiresLogin : true}},
    {path : '/setting', name : 'setting', component : BrowsePage, meta : {requiresLogin : true}},
    {path : '/logout', name : 'logout', component : LogOutPage, meta : {requiresLogin : true}},
    {path : '/login', name : 'login', component : LoginPage, meta : {requiresLogin : false}},
]
