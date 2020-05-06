import Vue from 'vue'
import { Button, Table, Input, Form } from 'ant-design-vue'

import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Table.name, Table)
Vue.component(Input.name, Input)
Vue.component(Input.Search.name, Input.Search)
Vue.component(Input.TextArea.name, Input.TextArea)
Vue.component(Form.name, Form)
Vue.component(Form.Item.name, Form.Item)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
