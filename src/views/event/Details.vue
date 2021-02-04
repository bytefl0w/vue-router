<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["event"]
};
</script>
