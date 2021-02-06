<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>

export default {
  props: ["event"],
  methods: {
    // Call to API
    // If registered then redirect to event details
    register() {
      this.$router.push({
        name: 'EventDetails',
        //params: { id: this.event.id }
        // * Programmatic Navigation *
        // NOTE: Both EventRegister and EventDetails have an :id param which will be used
        // by default when navigating
      })
    }
  }
};
</script>

/script>