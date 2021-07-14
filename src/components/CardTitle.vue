<template >
  <div class="d-flex justify-content-between">
    <h4 class="card-title">@_{{ userName }}</h4>
    <span class="position-relative">
      Drafts
      <span
        class="
          position-absolute
          top-0
          start-100
          translate-middle
          badge
          rounded-pill
          bg-danger
        "
      >
        {{drafts}}
        <span class="visually-hidden">unread messages</span>
      </span>
    </span>
  </div>
</template>
<script>
export default {
    name:'CardTitle',
    props:{
        userName:{
            type:String,
            required:true
        },
        drafts:{
            type:Number,
            required:true
        }
    }
};
</script>
<style lang="">
</style>