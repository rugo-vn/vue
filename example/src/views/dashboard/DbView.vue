<script setup>
import { inject, ref } from "vue";
import { MButton, MPanel } from "@rugo-vn/vue";

const db = inject("mdb");
const mNoti = inject('mnoti');
const step = ref(1);

const initDb = async () => {
  mNoti.push('success', "Start init...");
  await db.init("demo", 2, {
    messages: "++id,name,content",
  });
  mNoti.push('success', "...init done!");
  step.value = 2;
};

const cleanDb = async () => {
  mNoti.push('success', "Start clean...");
  await db.clearDB();
  mNoti.push('success', "...clean done!");
  step.value = 3;
};

const importDb = async () => {
  mNoti.push('success', "Start import...");
  await db.importDB(
    '{"messages":[{"name":"mintailor","content":"Hello from import.","id":1}]}'
  );
  mNoti.push('success', "...import done!");
  step.value = 4;
};

const writeDb = async () => {
  mNoti.push('success', "Start write...");
  await db.create("messages", { name: "mintailor", content: "A new content" });
  mNoti.push('success', "...write done!");
  step.value = 5;
};

const exportDb = async () => {
  mNoti.push('success', "Start export...");
  const json = await db.exportDB();
  mNoti.push('success', "...export done!");
  mNoti.push('success', `Result: ${json}`);
  step.value = 6;
};

const deleteDb = async () => {
  mNoti.push('success', "Start delete...");
  await db.deleteDB();
  mNoti.push('success', "...delete done!");
  step.value = 1;
};
</script>

<template>
  <h1 class="text-3xl mt-4 font-semibold">Database</h1>

  <MPanel>
    <div class="mb-4">
      <span class="inline-block w-12">Step 1:</span>
      <MButton
        class="ml-4"
        variant="primary"
        @click="initDb"
        :disabled="step !== 1"
        >Init Database</MButton
      >
    </div>

    <div class="mb-4">
      <span class="inline-block w-12">Step 2:</span>
      <MButton
        class="ml-4"
        variant="primary"
        @click="cleanDb"
        :disabled="step !== 2"
        >Clean Db</MButton
      >
    </div>

    <div class="mb-4">
      <span class="inline-block w-12">Step 3:</span>
      <MButton
        class="ml-4"
        variant="primary"
        @click="importDb"
        :disabled="step !== 3"
        >Import from text</MButton
      >
    </div>

    <div class="mb-4">
      <span class="inline-block w-12">Step 4:</span>
      <MButton
        class="ml-4"
        variant="primary"
        @click="writeDb"
        :disabled="step !== 4"
        >Write to Db</MButton
      >
    </div>

    <div class="mb-4">
      <span class="inline-block w-12">Step 5:</span>
      <MButton
        class="ml-4"
        variant="primary"
        @click="exportDb"
        :disabled="step !== 5"
        >Export Db</MButton
      >
    </div>

    <div class="mb-4">
      <span class="inline-block w-12">Step 6:</span>
      <MButton
        class="ml-4"
        variant="primary"
        @click="deleteDb"
        :disabled="step !== 6"
        >Delete Db</MButton
      >
    </div>
  </MPanel>
</template>
