<script setup>
import { useField } from 'vee-validate';
import { ref, toRef } from 'vue';
import { generateId } from '../../utils';
import RLabel from './RLabel.vue';

const props = defineProps({
  name: { type: String },
  label: { type: String },
  modelValue: {},
  value: {},
  size: { type: String, default: 'md' },
  placeholder: { type: String },

  // RInput
  type: {
    type: String
  },

  // RSelect
  options: {
    type: Array
  }
});

const SIZES = {
  md: 'text-base',
  lg: 'text-lg'
};

const emit = defineEmits(['input', 'update:modelValue']);

const labelRef = generateId().toString();
const name = props.name ? toRef(props, 'name') : ref(labelRef);
const {
  value: inputValue,
  handleChange,
  handleBlur
} = useField(name, [], {
  initialValue: props.modelValue || props.value
});

const onInput = (value) => {
  handleChange(value);
  emit('input', value);
  emit('update:modelValue', value);
};
</script>

<template>
  <div>
    <RLabel :name="labelRef" :label="label" :class="SIZES[size]" />

    <slot
      v-bind="{
        ...props,
        name,
        value: inputValue,
        labelRef,
        onInput,
        onBlur: handleBlur
      }"
    ></slot>
  </div>
</template>
