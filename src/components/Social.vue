<template lang="jade">
div
  .social(v-for='item in items')
    .profile-pic
    .content-wrapper
      .profile-wrapper
        .item.name
          | {{item.name}}
        .item.id
          | @{{item.id}}
      .time {{item.time}}
      .content
        | {{item.content}}
      .img-wrapper
        img
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

<style lang="sass" scoped>
  .social
    border: solid 1px rgba(0, 0, 0, 0.2)
    height: fit-content
    padding: 20px
    display: flex
    .profile-pic
      width: 100px
      height: 100px
      border-radius: 50%
      background: #999
    .content-wrapper
      margin-left: 20px
      .profile-wrapper
        display: flex
        .item
          padding: 10px
        .name
          font-weight: bold
        .id
          color: #777
      .time
        color: #999
        width: fit-content
        padding-left: 10px
      .content
        width: fit-content
        word-wrap: break
        color: #333
        padding: 10px
</style>