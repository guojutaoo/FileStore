import FileReader from './components/FileReader.vue'
import FileUpload from './components/FileUpload.vue'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home'

const routes = [
    { path: '/read', component: FileReader },
    { path: '/upload/', component: FileUpload },
    { path: '/hello', component: HelloWorld },
    { path: '/', component: Home }
];

export default routes;