import Vue from 'vue'

Vue.component('ChartBarBase', resolve => { require(['@/components/Charts/Bar/Base/index.vue'], resolve) })
Vue.component('ChartBarStack', resolve => { require(['@/components/Charts/Bar/Stack/index.vue'], resolve) })
Vue.component('ChartBarMulti', resolve => { require(['@/components/Charts/Bar/Multi/index.vue'], resolve) })
Vue.component('ChartBarTop10', resolve => { require(['@/components/Charts/Bar/Top10/index.vue'], resolve) })
Vue.component('ChartBarStyle2', resolve => { require(['@/components/Charts/Bar/Style2/index.vue'], resolve) })

Vue.component('ChartCountStyle1', resolve => { require(['@/components/Charts/Count/Style1/index.vue'], resolve) })
Vue.component('ChartCountStyle2', resolve => { require(['@/components/Charts/Count/Style2/index.vue'], resolve) })
Vue.component('ChartCountStyle3', resolve => { require(['@/components/Charts/Count/Style3/index.vue'], resolve) })

Vue.component('ChartLineBase', resolve => { require(['@/components/Charts/Line/Base/index.vue'], resolve) })
Vue.component('ChartLineBasePlus', resolve => { require(['@/components/Charts/Line/BasePlus/index.vue'], resolve) })
Vue.component('ChartLineMulti', resolve => { require(['@/components/Charts/Line/Multi/index.vue'], resolve) })

Vue.component('ChartMapStyle1', resolve => { require(['@/components/Charts/Map/Style1/index.vue'], resolve) })
Vue.component('ChartMapStyle2', resolve => { require(['@/components/Charts/Map/Style2/index.vue'], resolve) })

Vue.component('ChartPieBase', resolve => { require(['@/components/Charts/Pie/Base/index.vue'], resolve) })
Vue.component('ChartPieStyle2', resolve => { require(['@/components/Charts/Pie/Style2/index.vue'], resolve) })
Vue.component('ChartPieStyle3', resolve => { require(['@/components/Charts/Pie/Style3/index.vue'], resolve) })

Vue.component('ChartRadarStyle1', resolve => { require(['@/components/Charts/Radar/Style1/index.vue'], resolve) })

Vue.component('ChartTableStyle1', resolve => { require(['@/components/Charts/Table/Style1/index.vue'], resolve) })
