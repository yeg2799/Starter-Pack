<template lang="pug">
.default-layout
  span Hello {{ name }}
</template>

<script>
import { ref } from '@nuxtjs/composition-api';

export default {
  setup() {
    const name = ref('Emre');

    return {
      name,
    };
  },
};
</script>
