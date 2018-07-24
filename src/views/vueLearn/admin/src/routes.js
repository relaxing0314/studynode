import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Table from './views/list/Table.vue'
import Upload from './views/list/upload.vue'
import Zip from './views/list/zip.vue'
import CountTo from './views/count/countTo.vue'
import Word from './views/editor/tinymce.vue'
import Markdown from './views/editor/markdown.vue'
import Json from './views/editor/json.vue'
import Draggable from './views/editor/draggable.vue'
import echarts from './views/charts/echarts.vue'
import LineEcharts from './views/charts/line.vue'
import Keyboard from './views/charts/keyboard.vue'
import MixChart from './views/charts/mixChart.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: 'Table Upload Zip',
        iconCls: 'fa fa-list',
        children: [
            { path: '/table', component: Table, name: 'Table' },
            { path: '/upload', component: Upload, name: 'Upload' },
            { path: '/zip', component: Zip, name: 'Zip' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Count',
        iconCls: 'fa fa-cubes',
        leaf: true,//只有一个节点
        children: [
            { path: '/countTo', component: CountTo, name: 'CountTo' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Editor',
        iconCls: 'fa fa-pencil-square-o',
        children: [
          { path: '/word', component: Word, name: 'Word' },
          { path: '/markdown', component: Markdown, name: 'Markdown' },
          { path: '/json', component: Json, name: 'Json' },
          { path: '/draggable', component: Draggable, name: 'Draggable' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
          { path: '/echarts', component: echarts, name: 'echarts' },
          { path: '/lineEcharts', component: LineEcharts, name: 'LineEcharts' },
          { path: '/keyboard', component: Keyboard, name: 'Keyboard' },
          { path: '/mixChart', component: MixChart, name: 'MixChart' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
