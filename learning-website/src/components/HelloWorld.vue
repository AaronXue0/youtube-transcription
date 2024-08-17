<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-center fill-height mx-auto"
      max-width="900"
    >
      <h1>YouTube URL to Scripts Converter</h1>

      <v-row
        align="center"
        class="mb-4"
      >
        <v-col cols="8">
          <form
            @submit.prevent="downloadMP3"
            class="form"
          >
            <v-text-field
              label="Enter YouTube URL"
              variant="outlined"
              v-model="youtubeUrl"
              :disabled="isLoading"
              required
            />
          </form>
        </v-col>
        <v-col cols="4">
          <v-btn
            type="submit"
            class="button"
            :loading="isLoading"
            :disabled="isLoading"
            @click="downloadMP3"
          >
            <template v-if="isLoading">
              <v-progress-circular
                indeterminate
                color="white"
                size="20"
              ></v-progress-circular>
            </template>
            <template v-else>
              Convert
            </template>
          </v-btn>
        </v-col>
      </v-row>

      <div v-if="audioSrc">
        <v-divider class="mb-4"></v-divider>

        <v-row
          justify="start"
          align="start"
          class="mb-4"
        >
          <v-col
            cols="12"
            class="text-center"
          >
            <div
              v-if="audioSrc"
              class="player"
            >
              <h2 class="text-left">{{ videoTitle }}</h2>
              <YouTube
                :src="audioSrc"
                @ready="onReady"
                ref="youtube"
              />
            </div>
            <div
              v-if="errorMessage"
              class="error-message"
            >
              <p>{{ errorMessage }}</p>
            </div>
          </v-col>
        </v-row>

        <v-divider class="mb-4"></v-divider>

        <div v-if="audioSrc">
          <Transcription
            :audioSrc="audioSrc"
            :transcription="transcription"
          />
        </div>
      </div>
    </v-responsive>
  </v-container>
</template>

<script>
import axios from "axios";
import Transcription from "@/components/Transcription.vue";

import YouTube from "vue3-youtube";

export default {
  components: {
    Transcription,
    YouTube,
  },
  data() {
    return {
      youtubeUrl: "https://www.youtube.com/watch?v=WLCw46JqbLk",
      audioSrc: null,
      videoTitle: null,
      transcription: null,
      errorMessage: null,
      isLoading: false,
    };
  },
  computed: {
    youtubeEmbedUrl() {
      let videoId = "";
      if (this.youtubeUrl.includes("v=")) {
        videoId = this.youtubeUrl.split("v=")[1];
      } else if (this.youtubeUrl.includes("youtu.be/")) {
        videoId = this.youtubeUrl.split("youtu.be/")[1];
      }
      const ampersandPosition = videoId.indexOf("&");
      if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }
      return `${videoId}`;
    },
  },

  methods: {
    async downloadMP3() {
      this.isLoading = true;
      try {
        this.errorMessage = null;
        this.audioSrc = null;
        this.videoTitle = null; // 重置標題

        const response = await axios.post("http://localhost:3000/download", {
          url: this.youtubeUrl,
        });

        if (response.data) {
          console.log(response.data.title);
          console.log(response.data.audioSrc);

          this.audioSrc = response.data.audioSrc;
          this.transcription = response.data.transcription;
          this.videoTitle = response.data.title; // 假設後端回傳的標題為 'title'
        } else {
          throw new Error("Invalid response format");
        }
      } catch (error) {
        console.error("Error downloading MP3:", error);
        this.errorMessage = "Failed to download MP3. Please try again.";
      } finally {
        this.isLoading = false;
      }
    },
    onReady() {
      this.$refs.youtube.playVideo();
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 1rem;
  font-size: 14px;
}
.player {
  margin-top: 1.5rem;
}
audio {
  width: 100%;
  margin-top: 1rem;
}
</style>
