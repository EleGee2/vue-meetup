<template>
  <form class="post-create">
    <div class="field">
      <textarea
        v-model="text"
        v-auto-expand
        class="textarea textarea-post"
        placeholder="Write a post"
        rows="1"
      />
      <button
        :disabled="!text"
        class="button is-primary m-t-sm"
        @click.prevent="sendPost"
      >
        Send
      </button>
    </div>
  </form>
</template>

<script>
import autoExpand from '@/directives/autoExpand'
export default {
  directives: {
    autoExpand
  },
  prop: {
    threadId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      text: null
    }
  },
  methods: {
    sendPost () {
      this.$store.dispatch('threads/sendPost', {text: this.text, threadId: this.threadId})
    }
  }
}
</script>

<style lang="scss" scoped>
  .textarea-post {
    padding-bottom: 30px;
  }
  .post-create {
    margin-bottom: 15px;
  }
</style>