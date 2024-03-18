<template>
    <div class="card">
        <slot></slot>
    </div>
</template>


<style scoped>
.card {
    width: 100%;
    height: 100%;
    /* M3/sys/light/surface-container */
    background-color: var(--md-sys-color-surface-container-low);
    /* M3/Elevation Light/2 */
    box-shadow: 0px 1px 2px var(--md-sys-color-shadow), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
}
</style>