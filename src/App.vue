<script setup>
import MainView from './views/MainView.vue'
</script>

<template>
    <MainView/>
</template>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--background-color-primary);
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
*{
  font-family: 'Space Mono', sans-serif;
  font-size: 18px;
  font-weight: 400;
}
:root {
  --background-color-primary: #e4eaf5;
  --background-color-secondary: #fafafa;
  --accent-color: #13498F;
  --text-primary-color: #3e414c;
  --element-size: 3rem;
  --greyed-out: #8E94A4;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #141C2F;
  --background-color-secondary: #1F2A48;
  --accent-color: #13498F;
  --text-primary-color: #fff;
  --greyed-out: #8E94A4;
}
.wrapper{
  background-color: var(--background-color-primary);
}


</style>
