<template>
  <parent-com/>
</template>

<script>
import ParentCom from '../components/lifecycle-2/ParentCom';

export default {
  name: 'Lifecycle',
  components: {
    'parent-com': ParentCom,
  },
};
</script>
