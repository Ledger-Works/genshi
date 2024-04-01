<template>
  <component
    :is="`md-${type}-text-field`"
    :disabled="disabled"
    :label="label"
    :placeholder="placeholder"
    :prefix-text="prefixText"
    :suffix-text="suffixText"
    :supporting-text="supportingText"
    :type="inputType"
    @change="updateValue"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/textfield/filled-text-field.js';
import { MdFilledTextField } from '@material/web/textfield/filled-text-field.js';
import '@material/web/textfield/outlined-text-field.js';

type Props = {
    type: 'filled' | 'outlined'
    disabled: boolean
    label: string
    placeholder: string
    prefixText?: string
    suffixText?: string
    supportingText?: string
    inputType?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' | 'textarea'
}

withDefaults(defineProps<Props>(), {
  type: 'outlined',
  prefixText: '',
  suffixText: '',
  supportingText:'',
  inputType: 'text'
})

const model = defineModel({type: String});

const updateValue = ($event: Event): void => {
  const textField = $event.target as MdFilledTextField
  model.value = textField.value;
}
</script>