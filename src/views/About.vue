<template>
  <div class="about">
    <myTabs :content="tabData"/>
  </div>
</template>

<script>
  import myTabs from '@/components/myTabs.vue'

  export default {
    components: {
      myTabs
    },
    data: function() {
      return {
        tabData: [
          {
            title: "History",
            id: 1,
            content: "asd;kfjasdfj as;dfkj asdfjk a;lkLorem ipsum something..."
          },
          {
            title: "Mission",
            id: 2,
            content: "Lorem ipsum something..."
          },
          {
            title: "Overview",
            id: 3,
            content: "Lorem ipsum something..."
          }
        ]
      }
    }
  }
</script>
