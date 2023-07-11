import HomePage from '@/components/homepage/HomePage.vue';
import BrowsePage from '@/components/browsepage/BrowsePage.vue';

export const routes = [
    {path : '/', name : 'home', component : HomePage},
    {path : '/browse', name : 'browse', component : BrowsePage},
    {path : '/watchlist', name : 'watchlist', component : BrowsePage},
    {path : '/movies', name : 'movies', component : BrowsePage},
    {path : '/tvshows', name : 'tvshows', component : BrowsePage},
    {path : '/people', name : 'people', component : BrowsePage},
    {path : '/setting', name : 'setting', component : BrowsePage},
    {path : '/logout', name : 'logout', component : BrowsePage},
]
