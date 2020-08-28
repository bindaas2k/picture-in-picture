const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    // const constraints = { audio: true, video: { width: 640, height: 320 } };
    // const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch error
    console.log("woops, error here", error);
  }
}

// Event Listener
button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;

  // Start picture in picture
  await videoElement.requestPictureInPicture();

  // Reset button
  button.disabled = false;
});

// On load
selectMediaStream();
