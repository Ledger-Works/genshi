<template>
  <div>
    <component :is="`md-${props.type}-button`">
      <slot></slot>
    </component>
  </div>
</template>
<script setup lang="ts">

import '@material/web/button/elevated-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/icon/icon.js';

import { defineProps } from 'vue';

enum ButtonType {
  Elevated = 'elevated',
  Filled = 'filled',
  FilledTonal = 'filled-tonal',
  Outlined = 'outlined',
  Text = 'text',
  Icon = 'icon'
}


const props = defineProps({
  type: {
    type: String as () => ButtonType,
    validator: (value: ButtonType) => {
      return ['elevated', 'filled', 'filled-tonal', 'outlined', 'text', 'icon'].includes(value);
    },
    required: true,
    default:  'filled',
  },
  hasIcon: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

</script>