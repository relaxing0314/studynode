import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Table from './views/list/Table.vue'
import Upload from './views/list/upload.vue'
import Zip from './views/list/zip.vue'
import CountTo from './views/count/countTo.vue'
import Editor from './views/editor/tinymce.vue'
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
        iconCls: 'el-icon-message',
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
        iconCls: 'fa fa-id-card-o',
        leaf: true,//只有一个节点
        children: [
            { path: '/countTo', component: CountTo, name: 'CountTo' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Editor',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/editor', component: Editor, name: 'Editor' }
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
