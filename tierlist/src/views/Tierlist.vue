<template>
  
</template>

<script setup>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid'


//Initialize tiers
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

//Track the image being dragged
const draggedImage = ref(null)

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




</script>

<style>
.main-content {
    margin: 100px auto;
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
    margin: 5px;
}
.uploaded-img img{
	border: 1px solid #666;
	height: 80px;
    width: 80px;
    object-fit: cover;
}

.upload-container {
    margin: 20px auto;
    border: 2px solid black;
    height: 320px;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 10px;
}

.tierlist {
margin: -100px 150px -20px;
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
    padding: 5px;
    box-sizing: border-box;
}

.tierlist div:last-child {
	border-bottom-width: 1px !important;
}

.tierlist div.row:hover {
	background-color: #666;
}

.tierlist span.header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 20px;
    font-family: sans-serif;
    border: 0;
    background-color: rb(255, 102, 102);
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
    align-content: flex-start;
    gap: 5px;
    justify-content: left;
    pointer-events: none;
    height: fit-content;
    margin-top: 10px;
}

span.item{
    pointer-events: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
}

span.item img {
    border: 1px solid #666;
    height: 80px;
    width: 80px;
    object-fit: cover;
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
  /* Style for tier containers */
  .items {
    display: flex;
    flex-wrap: wrap;
  }

.item {
    width: 80px; /* Adjust size as needed */
    height: 80px; /* Adjust size as needed */
    margin: 3px;
    display: inline-block;
  }
  
  .item img {
    width: 100%; /* Fit the image within the container */
    height: 100%; /* Fit the image within the container */
    object-fit: cover; /* Maintain aspect ratio and cover the container */
  }
</style>