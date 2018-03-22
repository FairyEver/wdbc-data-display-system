import Vue from 'vue'

Vue.component('ChartBarBase', resolve => { require(['@/components/Charts/Bar/Base/index.vue'], resolve) })

Vue.component('ChartCountStyle1', resolve => { require(['@/components/Charts/Count/Style1/index.vue'], resolve) })

Vue.component('ChartLineBase', resolve => { require(['@/components/Charts/Line/Base/index.vue'], resolve) })
Vue.component('ChartLineMulti', resolve => { require(['@/components/Charts/Line/Multi/index.vue'], resolve) })

Vue.component('ChartPieBase', resolve => { require(['@/components/Charts/Pie/Base/index.vue'], resolve) })
