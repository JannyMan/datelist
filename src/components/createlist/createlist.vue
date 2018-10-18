<template>
  <div class="hello">
    <p>个人日记</p>
    <group>
      <x-input v-model="titleval" placeholder="标题"  @on-change='gettitle'></x-input>
      <x-textarea v-model="resval" :max="500" name="description" :height="400" placeholder="内容" @on-change='getres'></x-textarea>
    </group>
    <div class="h50"></div>
    <flexbox>
        <flexbox-item>
          <x-button type="primary" v-on:click.native="add">提交</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn">删除</x-button>
        </flexbox-item>
      </flexbox>
  </div>
</template>

<script>
import { XTextarea, Group, XInput,XButton, Flexbox, FlexboxItem} from 'vux';
import axios from 'axios';
import qs from 'qs';
export default {
  components: {
    XButton,
    Flexbox,
    FlexboxItem,
    XTextarea,
    Group,
    XInput
  },
  name: 'chakan',
  data () {
    return {
      titleval: '',
      resval: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    gettitle: function(){
      console.log(this.titleval);
    },
    getres:function(){
      console.log(this.resval);
    },
    add: function(){
      axios.post('https://www.291buy.cn/datelist/php/res.php', qs.stringify({
      type: 'createRes',
      name: '江林',
      title: this.titleval,
      res: this.resval
      }))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
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
