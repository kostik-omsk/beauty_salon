<script setup lang="ts">
const props = defineProps(['isOpen'])
const emits = defineEmits(['close-dialog'])

const handleClose = () => {
  emits('close-dialog')
}
</script>

<template>
  <teleport to="body">
    <Transition name="fade">
      <div class="dialog" v-if="props.isOpen" @click="handleClose">
        <div class="dialog-content fade-animation" @click.stop>
          <button type="button" class="close btn-close" @click="handleClose" aria-label="Закрыть"></button>
          <h4><slot name="title"></slot></h4>
          <p><slot name="content"></slot></p>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<style lang="scss" scoped>
@import '@/assets/style/mixins.scss';
.fade-enter-active {
  animation: bounce-in 0.3s;
}
.fade-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-animation {
  @include myTransitionAll;
  opacity: 1;
  will-change: transform;
}
.fade-enter-active .fade-animation {
  opacity: 0;
  transform: translate(0, -50%);
}

.dialog {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
}

.dialog-content {
  --margin-x: 1.5rem;
  max-width: 550px;
  margin-right: calc(var(--margin-x) * 0.5);
  margin-left: calc(var(--margin-x) * 0.5);
  background-color: #fefefe;
  padding: 20px;
  border-radius: 1rem;
}

.close {
  float: right;
}
</style>
