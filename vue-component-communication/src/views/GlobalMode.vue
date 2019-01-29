<template>
  <div>
    <NumberDisplay/>
    <NumberSubmit/>
  </div>
</template>

<script>
import NumberDisplay from '../components/pass-data-3/NumberDisplay';
import NumberSubmit from '../components/pass-data-3/NumberSubmit';

export default {
  name: 'GlobalMode',
  components: { NumberDisplay, NumberSubmit },
};
</script>
