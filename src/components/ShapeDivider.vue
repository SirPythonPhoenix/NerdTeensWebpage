<template>
  <div class="custom-shape-divider-top-1682266626" v-if="this.position === 'top'">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
  </div>
  <div class="custom-shape-divider-bottom-1682266660" v-if="this.position === 'bottom'">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "ShapeDivider",
  props: {
    position: 'top'
  }
}
</script>

<style scoped>
.custom-shape-divider-top-1682266626 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1682266626 svg {
    position: relative;
    display: block;
    width: calc(113% + 1.3px);
    height: 126px;
}

.custom-shape-divider-top-1682266626 .shape-fill {
    fill: #000000;
}


.custom-shape-divider-bottom-1682266660 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1682266660 svg {
    position: relative;
    display: block;
    width: calc(113% + 1.3px);
    height: 126px;
}

.custom-shape-divider-bottom-1682266660 .shape-fill {
    fill: #FFFFFF;
}
</style>
