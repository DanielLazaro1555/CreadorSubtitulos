document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const videoElement = document.getElementById("video");
        const objectURL = URL.createObjectURL(file);
        videoElement.src = objectURL;
        videoElement.load();

        // Inicia Plyr en el video
        new Plyr(videoElement);
    }
});
