<template>
  <div class="hello">
    <panel header="" :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>

<script>
import { Panel } from 'vux';
import axios from 'axios';
import qs from 'qs';
export default {
  components: {
   Panel
  },
  name: 'HelloWorld',
  data () {
    return {
      type: '5',
      list: [{
        src: 'https://www.291buy.cn/datelist/img/60.png',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/chakan',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      footer: {
        title: 'more',
        url: 'http://vux.li'
      }
    }
  },
  methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  created() {
    axios.post('https://www.291buy.cn/datelist/php/res.php', qs.stringify({
      type: 'getRes'
      }))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h50{
  width: 100%;
  height: 10px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
