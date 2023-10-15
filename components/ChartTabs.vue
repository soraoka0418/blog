<script setup lang="ts">
defineProps<{
  // title: string;
}>();

const tab = ref("option-1");
</script>

<template>
  <v-card>
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" direction="vertical" color="primary">
        <v-tab value="option-1">
          <v-icon start> mdi-account </v-icon>
          Frontend
        </v-tab>
        <v-tab value="option-2">
          <v-icon start> mdi-lock </v-icon>
          Backend
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="option-1">
          <v-card flat>
            <v-card-text> Skill list </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-2">
          <v-card flat>
            <v-card-text> Skill list </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>
