<template>
  <div class="bottom-sheet-container">
    <div class="bottom-sheet">
      <div class="drag-handle-container">
        <div class="drag-handle" />
      </div>
      <div class="inner-template">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  setTimeout(() => {
    const bottomSheet = document.querySelector('.bottom-sheet');
    bottomSheet.style.transform = 'translateY(0)';
  }, 1000);
});
</script>
<style lang="scss" scoped>
$drag-handle-padding: dp-to-px(22);
@function dp-to-px($dpValue, $dpi: 160) {
    @return ($dpValue * calc($dpi / 160)) + px;
}
.bottom-sheet-container {
  background: rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  justify-content: center;
}
.bottom-sheet {
    margin-top: dp-to-px(72);
    border-radius: 22px 22px 0 0;
    width: 100%;
    max-width: dp-to-px(640);
    position: fixed;
    bottom: 0;
    // TODO: Add transition
    transition: 1s;
    transform: translateY(100%);
    background-color: var(--md-sys-color-surface-container-low);
    /* M3/Elevation Light/1 */
    box-shadow: 0px 0.0625rem 0.125rem rgba(0, 0, 0, 0.3),
      0px 0.0625rem 0.1875rem 0.0625rem rgba(0, 0, 0, 0.15);
    .drag-handle-container {
      padding: dp-to-px(22);
    }
    .drag-handle {
        margin: auto; 
        background-color: var(--md-sys-color-on-surface-variant);
        border-radius: 100px;
        width: dp-to-px(32);
        height: dp-to-px(4);
    }
    @media screen and (min-width: dp-to-px(640)){
        margin-left: dp-to-px(56);
        margin-right: dp-to-px(56);
    }
    .inner-template {
      padding: 1rem;
    }
}
</style>