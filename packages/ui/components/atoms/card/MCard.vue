<template>
    <div class="card" :class="props.type">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">

enum CardType {
    Elevated = 'elevated',
    Filled = 'filled',
    Outlined = 'outlined',
}

enum FlowType {
    Stacked = 'stacked',
    Horizontal = 'horizontal',
}


const props = defineProps({
    type: {
        type: String as () => CardType,
        validator: (value: CardType) => {
            return [CardType.Outlined, CardType.Elevated, CardType.Filled].includes(value);
        },
        required: true,
        default: CardType.Outlined,
    },
});
</script>

<style scoped lang="scss">
.card {
    height: 100%;
    padding: 1rem;
    border-radius: .75rem;
    box-sizing: border-box;
}

.elevated {
   box-shadow: 0px .0625rem .125rem rgba(0, 0, 0, 0.3);
   background: var(--md-sys-color-surface);
   border: 1px solid var(--md-sys-color-outline-variant);

   /* TODO: Figure it out
   * &:hover {
   *    background: rgba(var(--md-sys-color-surface), 0.08);
   * }
   */

   &:focus {
       /* M3/sys/light/surface */
       background: var(--md-sys-color-surface);
       /* M3/sys/light/outline-variant */
       border: 1px solid var(--md-sys-color-outline-variant);
   }
}

.outlined {
   
    background: var(--md-sys-color-surface);
    border: 1px solid var(--md-sys-color-outline-variant);

    &:focus {
        /* M3/sys/light/surface */
        background: var(--md-sys-color-surface);
        /* M3/sys/light/outline-variant */
        border: 1px solid var(--md-sys-color-outline-variant);
    }
}


.filled {

   background: var(--md-sys-color-surface);
   border: 1px solid var(--md-sys-color-outline-variant);

   &:focus {
       /* M3/sys/light/surface */
       background: var(--md-sys-color-surface);
       /* M3/sys/light/outline-variant */
       border: 1px solid var(--md-sys-color-outline-variant);
   }
}
</style>