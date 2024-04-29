<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  isActive: {
    type: Boolean,
    default() {
      return false;
    },
  },
});

defineEmits(["onClose"]);
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
        v-show="props.isActive"
      >
        <Transition name="modal-inner">
          <div
            class="p-4 bg-white self-start mt-32 max-w-screen-md"
            v-if="props.isActive"
          >
            <slot />
            <button
              class="text-black mt-8 py-2 px-6 border border-slate-200 rounded-md hover:bg-slate-50"
              @click="$emit('onClose')"
            >
              Close
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
