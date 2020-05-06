<template>
  <div id="app">
    <a-form layout="horizontal" :model="form">

      <a-form-item
        label="url"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 14 }"
      >
        <a-textarea placeholder="url" v-model="form.url" :auto-size="{ minRows: 3, maxRows: 8 }" />
      </a-form-item>

      <a-form-item
        label="定界符"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 14 }"
      >
        <a-input placeholder="自定义定界符" v-model="form.delimiter" />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onClickParse">解析</a-button>
      </a-form-item>

    </a-form>
    <!-- <a-input-search
      placeholder="自定义定界符"
      enter-button="解析"
      size="large"
      @search="onSearch"
    />
    <br />
    <br /> -->
    <a-table :columns="columns" :data-source="data" :pagination="false" :scroll="{ x: 500 }">

    </a-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import qs from 'qs'
import url from 'url'
import HelloWorld from './components/HelloWorld.vue'

const testUrl = 'http://beacon.sina.com.cn/b.gif?http%3A//comos.tytest.sina.cn/%3F__url%3Dhttps%3A//video.sina.cn/news/2020-04-28/detail-iirczymi8734693.d.html%26__isHttps%3D1%26v4%3D1%26faiz_gk655%3D1%26faiz_gk656%3D1%26faiz_qe381%3Dg1t2_C%26faiz_test%3D1|*|t=_exposure,s=banner%E7%AC%AC3%E5%B8%A7%E6%9B%9D%E5%85%89,h=http%3A//comos.tytest.sina.cn/%3F__url%3Dhttps%3A//video.sina.cn/news/2020-04-28/detail-iirczymi8734693.d.html%26__isHttps%3D1%26v4%3D1%26faiz_gk655%3D1%26faiz_gk656%3D1%26faiz_qe381%3Dg1t2_C%26faiz_test%3D1%26channel%3D,ct=1588736022057,aid=EXPOSURE_SN_9270003-0,channel=,dataid=comos:irczymi8734693||*|1557142304353.7092.1588731868172|*|__10.13.240.101_1583809667_0.35377400|*||*|2949|*|3887005787|*|'
// const testUrl = '__url=https://video.sina.cn/news/2020-04-28/detail-iirczymi8734693.d.html&__isHttps=1&v4=1&faiz_gk655=1&faiz_gk656=1&faiz_qe381=g1t2_C&faiz_test=1'
// {
//   __url: 'https://video.sina.cn/news/2020-04-28/detail-iirczymi8734693.d.html',
//   __isHttps: 1,
//   v4: 1,
//   faiz_gk655: 1,
//   faiz_gk656: 1,
//   faiz_qe381: 'g1t2_C',
//   faiz_test: '1|*|t=btn,s=%E7%9B%B8%E5%85%B3%E8%A7%86%E9%A2%910%E6%9B%9D%E5%85%89,h=http://comos.tytest.sina.cn/?__url=https://video.sina.cn/news/2020-04-28/detail-iirczymi8734693.d.html'
// }

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  columns = [
    {
      title: 'key',
      dataIndex: 'key',
      key: 'col1',
      width: 100,
      fixed: 'left',
    }, {
      title: 'value',
      dataIndex: 'value',
      key: 'col2',
    }
  ]
  data = [{
    key: 'key1',
    value: 'value1',
  }, {
    key: 'key2',
    value: 'value2',
  }]

  query = ''
  form = {
    url: testUrl,
    delimiter: '&',
  }

  mounted () {
    this.parse()
  }
  parse() {
    const query = url.parse(this.form.url).query
    const reg = new RegExp(this.form.delimiter)
    const map = qs.parse(query, { delimiter: reg })
    console.log(`=== [Faiz Console:] xxxx ===`, map)
    const resArr: any[] = []
    for (const key in map) {
      const value = map[key]
      resArr.push({
        key,
        value,
      })
    }
    this.data = resArr
  }
  onClickParse() {
    this.parse()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  padding: 20px;
}
</style>
