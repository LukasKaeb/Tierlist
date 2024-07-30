<template>
  <div class="main-content">
    <!-- Tierlist display -->
    <div class="tierlist">
        <!-- S Tier -->
        <div class="row droppable">
            <span class="header" style="background-color: rgb(255, 102, 102);">
                <label for="input-tier-0" type="text" style="display: inline;">S</label>
                <input id="input-tier-0" type="text" style="display: none;">
            </span>
            <span class="items"></span>
            <div class="row-buttons">
              <input type="button" value="+" title="Add row above"> 
              <input type="button" value="-" title="Remove row"> 
              <input type="button" value="+" title="Add row below"> 
            </div>
        </div>
        <!-- A Tier -->
        <div class="row droppable">
            <span class="header" style="background-color: rgb(240, 167, 49);">
                <label for="input-tier-1">A</label>
                <input id="input-tier-1" type="text">
            </span>
            <span class="items"></span>
            <div class="row-buttons">
              <input type="button" value="+" title="Add row above"> 
              <input type="button" value="-" title="Remove row"> 
              <input type="button" value="+" title="Add row below"> 
            </div>
        </div>
        <!-- B Tier -->
        <div class="row droppable">
            <span class="header" style="background-color: rgb(244, 217, 91);">
                <label for="input-tier-2">B</label>
                <input id="input-tier-2" type="text">
            </span>
            <span class="items"></span>
            <div class="row-buttons">
              <input type="button" value="+" title="Add row above"> 
              <input type="button" value="-" title="Remove row"> 
              <input type="button" value="+" title="Add row below"> 
            </div>
        </div>
        <!-- C Tier -->
        <div class="row droppable">
            <span class="header" style="background-color: rgb(102, 255, 10);">
                <label for="input-tier-3">C</label>
                <input id="input-tier-3" type="text">
            </span>
            <span class="items"></span>
            <div class="row-buttons">
              <input type="button" value="+" title="Add row above"> 
              <input type="button" value="-" title="Remove row"> 
              <input type="button" value="+" title="Add row below"> 
            </div>
        </div>
        <!-- D Tier -->
        <div class="row droppable">
            <span class="header" style="background-color: rgb(88, 200, 244);">
                <label for="input-tier-4">D</label>
                <input id="input-tier-4" type="text">
            </span>
            <span class="items"></span>
            <div class="row-buttons">
              <input type="button" value="+" title="Add row above"> 
              <input type="button" value="-" title="Remove row"> 
              <input type="button" value="+" title="Add row below"> 
            </div>
        </div>
        <!-- E Tier -->
        <div class="row droppable">
            <span class="header" style="background-color: rgb(91, 118, 244);">
                <label for="input-tier-5">E</label>
                <input id="input-tier-5" type="text">
            </span>
            <span class="items"></span>
            <div class="row-buttons">
              <input type="button" value="+" title="Add row above"> 
              <input type="button" value="-" title="Remove row"> 
              <input type="button" value="+" title="Add row below"> 
            </div>
        </div>
        <!-- F Tier -->
        <div class="row droppable">
            <span class="header" style="background-color: rgb(244, 91, 237);">
                <label for="input-tier-6">F</label>
                <input id="input-tier-6" type="text">
            </span>
            <span class="items"></span>
            <div class="row-buttons">
              <input type="button" value="+" title="Add row above"> 
              <input type="button" value="-" title="Remove row"> 
              <input type="button" value="+" title="Add row below"> 
            </div>
        </div>
    </div>

    
    <!-- Upload section -->
        <div class="upload-section">
            <input @change="handleFileUpload" type="file" multiple>
        </div>
        <div class="upload-container">
            <div v-for="image in uploadedImages" :key="image.id" class="uploaded-img" draggable="true">
                <img :src="image.src" alt="Image">
            </div>
        </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid'
import { VueDraggableNext } from 'vue-draggable-next';

const tiers = ref([
    {id: uuidv4(), name: 'S', image: [] },
    {id: uuidv4(), name: 'A', image: [] },
    {id: uuidv4(), name: 'B', image: [] },
    {id: uuidv4(), name: 'C', image: [] },
    {id: uuidv4(), name: 'D', image: [] },
    {id: uuidv4(), name: 'E', image: [] },
    {id: uuidv4(), name: 'F', image: [] },
])

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
.main-content {
    margin: 100px;
}

.upload-section{
    margin: 0px 150px;
    align-items: center;
    display: flex;
    padding-left: 50px;
    padding-top: 50px;
}

.uploaded-img{
    display: inline-block;
    align-content: left;
}
.uploaded-img img{
    display: flex;
	border: 1px solid #666;
	height: 80px;
    width: 80px;
	overflow-y: auto;
	flex-wrap: wrap;
	flex-grow: 1;
	width: 100%;
	align-content: flex-start;
}

.upload-container {
    margin: 0px 150px;
    border: 2px solid black;
    height: 320px;
    width: 80%;
}

.tierlist {
    margin-top: -100px;
    margin-bottom: -20px;
    margin-left: 150px;
    margin-right: 150px;
}

.tierlist span {
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	flex-flow: row;
	font-size: 20px;
	font-family: sans-serif;
	border: 0;
	padding: 10px;
}

.tierlist div.row {
	border: 1px solid #666;
	border-top-width: 1px;
	border-right-width: 1px;
	display: flex;
	user-select: none;
}

.tierlist div:last-child {
	border-bottom-width: 1px !important;
}

.tierlist div.row:hover {
	background-color: #666;
}

span.header {
    justify-content: center;
    align-self: stretch;
    cursor: pointer;
}
span.header label{
    cursor: pointer;
}

span.header input[type=text] {
    display: none;
    height: 50px;
    font-size: 50px;
    text-align: center;
}

span.items{
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: left;
    pointer-events: none;
    height: fit-content;
}

span.item{
    pointer-events: auto;
}

.row-buttons {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-evenly;
	opacity: 0.2;
	transition: 200ms linear;
}

.row-buttons:hover {
	opacity: 1;
	transition: 200ms linear;
}


</style>