<template>
  <div
    class="card"
    :class="props.type"
  >
    <slot />
    <md-ripple />
  </div>
</template>

<script setup lang="ts">
import "@material/web/ripple/ripple.js";
import { CardType } from "./constants";

const props = withDefaults(defineProps<{ type: CardType }>(), {
  type: "elevated",
});
</script>

<style scoped lang="scss">
.card {
  height: 100%;
  padding: 1rem;
  border-radius: 0.75rem;
  box-sizing: border-box;
  position: relative;
}

.elevated {
  box-shadow: 0px 0.0625rem 0.125rem rgba(0, 0, 0, 0.3);
  background: var(--md-sys-color-surface);
  border: 0.0625rem solid var(--md-sys-color-outline-variant);

  &:hover {
    background: rgba(var(--md-sys-color-surface), 0.8);
  }

  &:focus {
    /* M3/sys/light/surface */
    background: var(--md-sys-color-surface);
    /* M3/sys/light/outline-variant */
    border: 0.0625rem solid var(--md-sys-color-outline-variant);
  }
}

.outlined {
  background: var(--md-sys-color-surface);
  border: 1px solid var(--md-sys-color-outline-variant);

  &:active {
    /* M3/sys/light/surface */
    background: var(--md-sys-color-surface);
    /* M3/sys/light/outline-variant */
    border: 0.0625rem solid var(--md-sys-color-outline-variant);
  }

  &:hover {
    /* M3/sys/light/surface */
    background-color: rgba(var(--md-sys-color-on-surface), 0.8);
    /* M3/sys/light/outline-variant */
    border: 0.0625rem solid var(--md-sys-color-outline-variant);
    /* M3/Elevation Light/1 */
    box-shadow: 0px 0.0625rem 0.125rem rgba(0, 0, 0, 0.3),
      0px 0.0625rem 0.1875rem 0.0625rem rgba(0, 0, 0, 0.15);
  }
}

.filled {
  background: var(--md-sys-color-surface);
  border: 0.0625rem solid var(--md-sys-color-outline-variant);

  &:focus {
    /* M3/sys/light/surface */
    background: var(--md-sys-color-surface);
    /* M3/sys/light/outline-variant */
    border: 0.0625rem solid var(--md-sys-color-outline-variant);
  }
  &:hover {
    /* M3/sys/light/surface */
    background-color: rgba(var(--md-sys-color-on-surface), 0.8);
    /* M3/sys/light/outline-variant */
    border: 0.0625rem solid var(--md-sys-color-outline-variant);
    /* M3/Elevation Light/1 */
    box-shadow: 0px 0.0625rem 0.125rem rgba(0, 0, 0, 0.3),
      0px 0.0625rem 0.1875rem 0.0625rem rgba(0, 0, 0, 0.15);
  }
}
</style>
