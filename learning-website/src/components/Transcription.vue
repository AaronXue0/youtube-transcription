<template>
  <div>
    <v-row justify="start">
      <v-col cols="12">
        <h2>Transcription:</h2>
        <div
          v-if="transcription"
          class="transcription mt-4"
        >
          <p>{{ transcription }}</p>
        </div>
        <div
          v-if="errorMessage"
          class="error-message"
        >
          <p>{{ errorMessage }}</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    transcription: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      errorMessage: null,
    };
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 1rem;
  font-size: 14px;
}
.transcription {
  margin-top: 1.5rem;
}
</style>
