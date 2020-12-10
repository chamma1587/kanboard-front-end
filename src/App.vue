<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
  background-image: url('../src/assets/bg/background.png');
  background-repeat: no-repeat;
  margin: auto;
}

$blue: #2a68b8;
$green: #12bf7c;
$red: #ff4136;
$black: #333333;
$white: #ffffff;
$gray: #eeeeee;
$boderRadiusSm: 2px;
$boderRadiusMd: 4px;
$boderRadiusLg: 6px;

.contaner {
  margin: 0 auto;
  display: flex;
}

.board {
  display: inline-block;
  width: 300px;
  height: auto;
  background-color:$gray;
  min-height: 50px;
  margin: 10px;
  padding: 10px;
  vertical-align: top;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1),
    0 5px 10px 2px rgba(0, 0, 0, 0.06);

  &__title {
    display: flex;
    align-items: center !important;
    text-align: left;
    padding: 5px 7px 10px 7px;
    border-bottom: 3px solid $blue;
    margin-bottom: 10px;
  }

  &__fotter {
    margin-top: 10px;
  }
}

.list-group {
  min-height: 50px;
  width: 300px;
  &-item {
    height: 50px;
    border-radius: $boderRadiusSm;
    cursor: move;
    margin-bottom: 7px;
    background: $white;
    display: flex;
    padding: 8px;
    align-items: top !important;
    text-align: left;
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.1),
      0 3px 8px 2px rgba(0, 0, 0, 0.06);
  }
  &-item:hover {
    background: $gray;
  }
}

.btn {
  color: $white;
  box-shadow: none;
  cursor: pointer;
  &--lg {
    padding: 10px 38px;
    font-size: 16px;
    border-radius: $boderRadiusLg;
  }
  &--md {
    padding: 7px 24px;
    font-size: 14px;
    border-radius: $boderRadiusMd;
  }
  &--sm {
    padding: 5px 10px;
    font-size: 12px;
    border-radius: $boderRadiusSm;
  }
  &--green {
    border: 1px solid $green;
    background: $green;
  }
  &--blue {
    border: 1px solid $blue;
    background: $blue;
  }
  &--red {
    border: 1px solid $red;
    background: $red;
  }
  &--block {
    width: 100%;
  }

  &--no-border{
    border-radius: 0px;
  }
}

.form-group {
  margin: 10px;
  padding: 10px;
  input, textarea{
    width: 95%;
    min-height: 28px;
    line-height: 26px;
    color:$black;
    padding: 1px 5px 1px 5xp;
    margin-bottom: 10px;
  }
}

.inline-item {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
}

.inline-item-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.title-text {
  font-size: 16px;
  font-weight: 600;
}

.main{
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
}

.add-button{
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
  margin-top: 10px;
}

.export-button{
  position: fixed;
  right:    10px;
  bottom:   10px;
}

</style>
