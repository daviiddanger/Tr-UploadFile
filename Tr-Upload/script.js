const dropzoneBox = document.getElementsByClassName("dropzone-box")[0];
const inputFiles= document.querySelectorAll(".dropzone-area input[type='file']");
const inputElement = inputFiles[0];
const dropzoneElement = inputElement.closest(".dropzone-area");
inputElement.addEventListener("change",(e)=>{
    if(inputElement.files.length){
        updateDropzoneFileList(dropzoneElement, inputElement.files[0]);
    }
});

dropzoneElement.addEventListener("drop",(e)=>{
    e.preventDefault();
    if(e.dataTransfer.files.length){
        inputElement.files = e.dataTransfer.files;
        updateDropzoneFileList(dropzoneElement, e.dataTransfer.files[0]);
    }
});

const updateDropzoneFileList = (dropzoneElement,file)=>{
    let dropzoneFileMessage = dropzoneElement.querySelector(".message");
    dropzoneFileMessage.innerHTML = `${file.name}, ${file.size}bytes`;
};

dropzoneBox.addEventListener("reset", (e)=>{
    let dropzoneFileMessage = dropzoneElement.querySelector(".message");
    dropzoneFileMessage.innerHTML = `Ningun archivo cargado`;
});

dropzoneBox.addEventListener("submit", (e)=>{
    e.preventDefault();
    const myFiled = document.getElementById("upload-file");
    console.log(myFiled.files[0]);
})