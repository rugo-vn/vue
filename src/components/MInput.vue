<script setup>
import { onMounted, ref } from "vue";
import { generateId } from '../utils';

const props = defineProps(["label", "type", "modelValue", 'focus', 'disabled']);
defineEmits(["update:modelValue", 'focus', 'blur']);

const id = generateId();
const input = ref(null);

onMounted(() => {
  if (props.focus){
    input.value.focus();
  }
});
</script>

<template>
  <div class="relative my-6">
    <input
      ref="input"
      :type="type"
      :id="`minput-${id}`"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
      class="block border w-full p-3 rounded-lg peer outline-none focus:border-black dark:bg-gray-900 dark:border-gray-500 dark:focus:border-primary-500"
      :disabled="disabled"
    />
    <label
      :for="`minput-${id}`"
      class="absolute top-[-.7em] left-2 px-1 bg-white cursor-text transition-all text-[0.7rem] text-gray-600 peer-focus:top-[-.7em] peer-focus:text-[0.7rem] peer-focus:text-black peer-placeholder-shown:top-[1em] peer-placeholder-shown:text-[1em] dark:bg-gray-900 dark:text-gray-500 dark:peer-focus:text-primary-500"
    >
      {{ label }}
    </label>
  </div>
</template>
