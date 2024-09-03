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
          <button type="button" class="btn-close" @click="handleClose" aria-label="Закрыть"></button>
          <h4 class="dialog__title" v-if="$slots.title">
            <slot name="title" />
          </h4>
          <p v-if="$slots.content">
            <slot name="content" />
          </p>
          <div v-if="$slots.foto" class="foto">
            <slot name="foto" />
          </div>
          <div v-if="$slots.video" class="video">
            <slot name="video" />
          </div>
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
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

.dialog-content {
  --margin-x: 1.5rem;
  max-width: 550px;
  margin-right: calc(var(--margin-x) * 0.5);
  margin-left: calc(var(--margin-x) * 0.5);
  background-color: #fefefe;
  padding: 46px 20px 20px 20px;
  border-radius: 1rem;
}

.dialog__title {
  margin-bottom: 1rem;
}

.btn-close {
  position: absolute;
  top: 9px;
  right: 9px;
  width: 30px;
  height: 30px;
  background: transparent;
  cursor: pointer;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 3px;
    border-radius: 3px;
    background-color: #5a5a5a;
    @include myTransitionAll;
  }

  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover.btn-close::after,
  &:hover.btn-close::before {
    background-color: black;
  }
}

.foto,
.video {
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
}
</style>
