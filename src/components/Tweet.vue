<template>
  <div>
    <div v-for="item in items" class="tweet">
      <div class="profile-pic">
      </div>
      <div class="content-wrapper">
        <div class="profile-wrapper">
          <div class="item name">
            {{item.name}}
          </div>
          <div class="item id">
            @{{item.id}}
          </div>
        </div>
        <div class="time">{{item.time}}</div>
        <div class="content">
          {{item.content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      'items':
      [
        {
          name: 'aime',
          id: 'aimetpgm',
          time: '7 Nov',
          content: 'blah blah'
        },
        {
          name: 'ThaiPang',
          id: 'dtinth',
          time: '7 Nov',
          content: 'blah blah blah blah'
        },
        {
          name: 'James',
          id: 'muccha',
          time: '7 Nov',
          content: 'blah'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .tweet {
    border: solid 1px rgba(0,0,0,0.2);
    height: fit-content;
    padding: 20px;
    display: flex;
  }
  .tweet .profile-pic {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #999;
  }
  .tweet .content-wrapper {
    margin-left: 20px;
  }
  .tweet .content-wrapper .profile-wrapper{
    display: flex;
  }
  .tweet .content-wrapper .profile-wrapper .item{
    padding: 10px;
  }
  .tweet .content-wrapper .profile-wrapper .name{
    font-weight: bold;
  }
  .tweet .content-wrapper .profile-wrapper .id{
    color: #777;
  }
  .tweet .content-wrapper .time{
    color: #999;
    width: fit-content;
    padding-left: 10px;
  }
  .tweet .content-wrapper .content{
    width: fit-content;
    word-wrap: break;
    color: #333;
    padding: 10px;
  }
</style>