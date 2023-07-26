import HomePage from '@/components/homepage/HomePage.vue';
import BrowsePage from '@/components/browsepage/BrowsePage.vue';
import LoginPage from '@/components/loginpage/LoginPage.vue'
import SingleMoviePage from '@/components/singlemoviepage/SingleMoviePage.vue'
import PeoplePage from '@/components/peoplepage/PeoplePage.vue'
import SinglePeoplePage from '@/components/singlepeoplepage/SinglePeoplePage.vue'
import LogOutPage from '@/components/logoutpage/LogOutPage.vue'
import WatchListPage from '@/components/watchlistpage/WatchListPage.vue'
import SearchResultPage from '@/components/searchresultpage/SearchResultPage.vue'
import MoviesPage from '@/components/moviespage/MoviesPage.vue'
import TVpage from '@/components/tvpage/TVPage.vue'
import SettingPage from '@/components/settingpage/SettingPage.vue'

export const routes = [
    {path : '/home', name : 'home', component : HomePage, meta : {requiresLogin : true, title : 'Home page'}},
    {path : '/browse', name : 'browse', component : BrowsePage, meta : {requiresLogin : true , title : 'Browse page'}},
    {path : '/watchlist', name : 'watchlist', component : WatchListPage, meta : {requiresLogin : true , title : 'WatchList page'}},
    {path : '/movies', name : 'movies', component : MoviesPage, meta : {requiresLogin : true , title : 'Movies page'}},
    {path : '/movie/:id', name : 'movieDetail', component : SingleMoviePage, meta : {requiresLogin : true , title : 'Movie page'}},
    {path : '/tvshows', name : 'tvshows', component : TVpage, meta : {requiresLogin : true , title : 'Tv shows page'}},
    {path : '/people', name : 'people', component : PeoplePage, meta : {requiresLogin : true , title : 'Poeple page'}},
    {path : '/people/:id', name : 'person', component : SinglePeoplePage, meta : {requiresLogin : true , title : 'People page'}},
    {path : '/setting', name : 'setting', component : SettingPage, meta : {requiresLogin : true , title : 'Setting page'}},
    {path : '/result', name : 'result', component : SearchResultPage, meta : {requiresLogin : true , title : 'Search Result page'}},
    {path : '/logout', name : 'logout', component : LogOutPage, meta : {requiresLogin : true , title : 'Logout'}},
    {path : '/login', name : 'login', component : LoginPage, meta : {requiresLogin : false , title : 'Login'}},
]
