<template>
  <header class="material-header">
    <div class="container"
      :class="`header-type-${props.type}`">
      <div class="leading-icon" @click="emits('leading-icon-click')">
        <slot v-if="$slots.leadingIcon" name="leadingIcon" />
        <span v-else class="material-symbols-outlined">{{ props.leadingIcon }}</span>
      </div>
      <div class="headline">
        <slot name="headline" />
      </div>
      <div v-if="!props.tralingIcons" class="trailing-icon" @click="emits('trailing-icon-click')">
        <slot v-if="$slots.tralingIcon" name="tralingIcon" />
        <span v-else class="material-symbols-outlined">{{ props.tralingIcon }}</span>
      </div>
      <div v-else class="trailing-icon" @click="emits('trailing-icon-click')">
        <slot v-if="$slots.tralingIcons" name="tralingIcons" />
        <span v-for="(icon, index) in props.tralingIcons" v-else :key="index"
          class="material-symbols-outlined material-symbol" @click="emits('trailing-icon-click', index)">{{ icon
          }}</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { TopBarType } from './constants';

const props = withDefaults(defineProps<{ type: TopBarType, leadingIcon: string, tralingIcon: string, tralingIcons: string[] }>(), {
  type: 'center-aligned',
  leadingIcon: 'menu',
  tralingIcon: 'person'
});

const emits = defineEmits([
  'trailing-icon-click',
  'leading-icon-click'
])

</script>

<style lang="scss">
@function dp($dpValue, $dpi: 160) {
  @return ($dpValue * calc($dpi / 160))+px;
}

.material-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .container {
    min-height: dp(64);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    padding: 0 16px;

    .leading-icon {
      justify-self: flex-start;
    }

    .trailing-icon {
      justify-self: flex-end;
      display: flex;
      gap: 8px;
    }
  }

  .header-type-small {
    grid-template-columns: 48px 1fr 1fr;
    .headline {
      justify-self: flex-start;
    }
  }

  .header-type-medium {
    grid-template-columns: 1fr 1fr;
    padding: 16px;
    .headline {
      grid-row: 2;
      justify-self: flex-start;
      padding-left: 4px;
      font-size: 1.25rem;
    }
  }
  .header-type-large {
    grid-template-columns: 1fr 1fr;
    row-gap: 16px;
    padding: 16px;
    .headline {
      grid-row: 4;
      justify-self: flex-start;
      padding-left: 4px;
      font-size: 1.5rem;
    }
  }
}
</style>
