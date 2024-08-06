<template>
    <div class="tierlist-container mx-auto p-4 max-w-screen-md">
      <h1 class="text-center font-bold text-xl mb-4">Tier List</h1>
      
      <!-- Tier list sections -->
      <div class="tiers-container space-y-2 px-32">
        <div v-for="tier in tiers" :key="tier.id" class="tier bg-gray-100 border rounded-lg p-2">
          <h2 class="text-base font-semibold text-gray-800 mb-2">{{ tier.name }}</h2>
          <draggable
            v-model="tier.image"
            :options="dragOptions"
            group="tierlist"
            class="flex items-start"
          >
            <template #item="{ element }">
              <div class="tierlist-image overflow-hidden">
                <img :src="element.src" alt="Tier Image" class="object-cover h-16 w-16">
              </div>
            </template>
          </draggable>
        </div>
      </div>
      
      <!-- File upload section -->
      <div class="upload-section mt-2 text-center px-32">
        <label class="block text-sm font-medium mb-2">Upload Images:</label>
        <input type="file" @change="handleFileUpload" multiple class="bg-gray-200 p-1 border rounded-md cursor-pointer w-full max-w-xs mx-auto">
      </div>
  
      <!-- Uploaded images section -->
      <div class="uploaded-images overflow-x-auto -mt-5">
        <draggable
          v-model="uploadedImages"
          :options="dragOptions"
          group="tierlist"
          class="flex flex-nowrap space-x-2"
        >
          <template #item="{ element }">
            <div class="uploaded-img flex-shrink-0 px-32">
              <img :src="element.src" alt="Uploaded Image" class="h-16 w-16 object-cover cursor-pointer">
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { v4 as uuidv4 } from 'uuid';
  import draggable from 'vuedraggable';
  
  // Initialize tiers
  const tiers = ref([
    { id: uuidv4(), name: 'S', image: [] },
    { id: uuidv4(), name: 'A', image: [] },
    { id: uuidv4(), name: 'B', image: [] },
    { id: uuidv4(), name: 'C', image: [] },
    { id: uuidv4(), name: 'D', image: [] },
    { id: uuidv4(), name: 'E', image: [] },
    { id: uuidv4(), name: 'F', image: [] },
  ]);
  
  const uploadedImages = ref([]);
  
  const dragOptions = {
    group: {
      name: 'tierlist',
      pull: 'clone',
      put: true,
    },
    disabled: false,
    fallbackOnBody: true,
    swap: true,
  };
  
  // Handle file uploads
  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files.length) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          uploadedImages.value.push({
            id: uuidv4(),
            src: e.target.result,
          });
        };
        reader.readAsDataURL(file);
      });
    }
  };
  </script>
  
  <style scoped>
  /* Optional styling for responsiveness */
  .tierlist-container {
    max-width: 100vw; /* Fit within the viewport width */
    max-height: 100vh; /* Fit within the viewport height */
    overflow: auto; /* Allow scrolling if needed */
  }
  
  .tierlist-container img {
    max-width: 100%; /* Ensure images don't overflow */
  }
  
  .upload-section input {
    max-width: 100%; /* Ensure input fits within container */
  }
  
  .uploaded-images {
    max-width: 100%; /* Ensure container fits within viewport */
  }
  </style>
  