import { createRouter, createWebHashHistory } from 'vue-router';
import AtWorkPage from '../pages/AtWorkPage.vue';
import ResultsPage from '../pages/ResultsPage.vue';
import ArchivePage from "@/pages/ArchivePage.vue";

const routes = [
    { path: '/', component: AtWorkPage },
    { path: '/results', component: ResultsPage },
    { path: '/archive', component: ArchivePage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
