import { createApp, inject } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from '@/router'
import {useAuth} from  '@/composable/useAuth'

const app = createApp(App)
app.use(router)
useAuth(app)
router.beforeEach((to, from) => {
    if (to.meta.requiresLogin && !inject('is_logged')()){
        router.push({name : 'login'})
    }
})
app.mount('#app')
