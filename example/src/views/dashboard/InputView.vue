<script setup>
import { MPanel, MButton, MInput } from '@rugo-vn/vue';
</script>

<template>
  <h1 class="mt-4 text-3xl font-semibold">Input</h1>

  <MPanel>
    <h2 class="text-xl mb-2">Simple</h2>

    <MInput label="Email" />
  </MPanel>

  <MPanel>
    <h2 class="text-xl mb-2">Form</h2>

    <MInput label="Email" type="email" />
    <MInput label="Password" type="password" />

    <MButton variant="primary" @click="signIn">Sign In</MButton>
  </MPanel>
</template>
