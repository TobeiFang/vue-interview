<template>
  <div class="test">
    <div>平均值: {{$store.state.average}}</div>
    <button @click="update">加载更多</button>
    <div style="overflow: auto; height:608px">
    <div class="list" v-for="item in $store.state.dataList" :key="item.id">
      <div class="id">{{item.id}}</div>
      <div class="data">{{item.data}}</div>
      <div class="time">{{item.time}}</div>
    </div>
    </div>
  </div>
</template>

<script>
import mock from '../mock.js'
export default {
  name: 'test',
  data () {
    return {
      dataList: [],
      average: '',
      daTa: []
    }
  },
  computed: {},
  mounted () {
    mock().then(res => {
      console.log(res)
      this.daTa = [...this.daTa, ...res]
      console.log(this.daTa)
      this.$store.commit('assignDataList', this.daTa)
    })
  },
  methods: {
    update () {
      const num = Math.floor(Math.random() * 10)
      mock(
        this.$store.state.dataList.length,
        this.$store.state.dataList.length + num
      ).then(res => {
        this.daTa = [...this.daTa, ...res]
        console.log(this.daTa)
        this.$store.commit('assignDataList', this.daTa)
      })
    }
  }
}
</script>

<style scoped lang="less">
.test {
  .list {
    display: flex;
    flex-direction: row;
    div {
      text-align: left;
      margin-right: 20px;
      width: 100px;
    }
    .id {
      width: 100px;
      margin-left: 32%;
    }
    .data {
    }
    .time {
      width: 500px;
    }
  }
  button {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
}
</style>
