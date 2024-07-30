<template>
  <div>
        <div class="upload-section">
            <input @change="handleFileUpload" type="file" multiple>
        </div>
        <div class="upload-container">
            <div v-for="image in uploadedImages" :key="image.id" class="uploaded-img">
                <img :src="image.src" alt="Image">
            </div>
        </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid'
import { VueDraggableNext } from 'vue-draggable-next';

//intitialize uploaded images

const uploadedImages = ref([])

//Handle file uploads

const handleFileUpload = (event) => {
    const files = event.target.files
    if(files.length) {
        Array.from(files).forEach((file)=>{
            const reader = new FileReader()
            reader.onload = (e) => {
                uploadedImages.value.push({
                    id: uuidv4(),
                    src: e.target.result
                })
            }
            reader.readAsDataURL(file)
        })
    }
}

//Handle file drops

const handleFileDrop = (event) => {
    const files = event.dataTransfer.files
    if(files.length) {
        Array.from(files).forEach((file) => {
            const reader = new FileReader()
            reader.onload = (e) => {
                uploadedImages.value.push({
                    id: uuidv4(),
                    src: e.target.result
                })
            }
            reader.readAsDataURL(file)
        })
    }
}

</script>

<style>

.upload-section{
    display: flex;
    padding-left: 50px;
    padding-top: 50px;
}

.uploaded-img{
    display: inline-block;
}
.uploaded-img img{
    width: 50px;
    height: 50px;
}

</style>