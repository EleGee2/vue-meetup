<template>
  <div>
    <!-- TODO: Toggle Modal, set isOpen to oposite value of is Open -->
    <button
      class="button is-success"
      @click="isOpen = !isOpen"
    >
      {{ btnTitle }}
    </button>
    <!-- TODO: create "isOpen" variable in data and set it to false -->
    <!-- TODO: Set is-active class when isOpen is true -->
    <div :class="['modal', {'is-active': isOpen}]">
      <div class="modal-background" />
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            {{ title }}
          </p>
          <!-- TODO: Close Modal set isOpen to false -->
          <button
            class="delete"
            aria-label="close"
            @click="isOpen = false"
          />
        </header>
        <section class="modal-card-body">
          <form>
            <div class="field">
              <label class="title">
                What would you like to ask?
              </label>
              <!-- TODO: Create "form" object in data containing "title" and bind it to textarea -->
              <textarea
                v-model="form.title"
                class="textarea"
                placeholder="Just write something that interest you (:"
                rows="10"
              />
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <!-- TODO: Emit thread Create -->
          <button
            class="button is-success"
            @click="threadSubmitted"
          >
            Post Changes
          </button>
          <!-- TODO: Close Modal set isOpen to false -->
          <button
            class="button"
            @click="isOpen = false"
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      btnTitle: {
        type: String,
        required: false,
        default: 'Open Modal'
      },
      title: {
        type: String,
        required: false,
        default: 'Create'
      }
    },
    data () {
      return {
        isOpen: false,
        form: {
          title: null
        }
      }
    },
    methods: {
      threadSubmitted () {
        this.$emit('threadSubmitted', { title: this.form.title, done: () => {
          this.form.title = ""
          this.isOpen = false
        }})
      }
    }
  }
</script>

<style scoped>

</style>