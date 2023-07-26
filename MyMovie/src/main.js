import { createApp, inject } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from '@/router'
import {useAuth} from  '@/composable/useAuth'
import {useGenres} from  '@/composable/useGenres'

const app = createApp(App)
app.use(router)
await useGenres(app)
useAuth(app)
router.beforeEach((to, from) => {
    const title = to.meta.title
    if (title) {
        document.title = `${title} | MyMovie`
    }
    if (to.meta.requiresLogin && !inject('is_logged')()){
        router.push({name : 'login'})
    }
})
app.mount('#app')
