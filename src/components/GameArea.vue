<!-- GameArea.vue -->
<template>
  <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 space-y-4">
    <!-- Current Word -->
    <div class="text-center mb-4">
      <h2 class="text-xl font-semibold">
        Current Word:
        <span class="text-blue-600">{{ currentWord }}</span>
      </h2>
    </div>

    <!-- Input for New Word -->
    <el-input
      v-model="newWord"
      placeholder="Enter your word here..."
      class="w-full"
      size="large"
      clearable
    ></el-input>

    <!-- Submit and Hint Buttons -->
    <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
      <el-button
        type="primary"
        class="flex-1"
        @click="submitWord"
        :disabled="!newWord"
        >Submit</el-button
      >

      <el-button
        type="warning"
        class="flex-1"
        @click="getHint"
        :disabled="hintUsed"
        >Hint</el-button
      >
    </div>

    <!-- Word History -->
    <div class="mt-6">
      <h3 class="text-lg font-semibold mb-2">Word History:</h3>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li v-for="word in wordHistory" :key="word">{{ word }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentWord: 'Start',
      newWord: '',
      wordHistory: ['Start'],
      hintUsed: false,
    }
  },
  methods: {
    submitWord() {
      if (this.newWord) {
        this.wordHistory.push(this.newWord)
        this.currentWord = this.newWord
        this.newWord = ''
        this.hintUsed = false
      }
    },
    getHint() {
      // Placeholder hint logic, replace with real hint fetching
      this.newWord = 'HintWord'
      this.hintUsed = true
    },
  },
}
</script>

<style scoped>
.el-input {
  margin-bottom: 1rem;
}
</style>
