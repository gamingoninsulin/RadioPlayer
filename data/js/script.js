var selectedStation = null;
var audioPlayer = document.querySelector(".audio-player");
var nowPlayingText = document.querySelector(".now-playing");
var stationGrid = document.querySelector(".station-grid");

function playStation(station) {
  selectedStation = station;
  if (station.name) {
    nowPlayingText.textContent = "Now Playing: " + station.name;
  } else {
    // Handle cases where station.name is missing
    console.error("Missing station name");
  }

  audioPlayer.onerror = function handleAudioError(error) {
    nowPlayingText.textContent = "Error: Failed to play station.";
    console.error("Audio playback error:", error); // Log the error for debugging
  };
  audioPlayer.src = station.url;
  audioPlayer.load();
  audioPlayer.play();
}

// Get the station list container element
var stationGrid = document.querySelector(".station-grid");

stations.forEach(function (station, index) {
  var stationItem = document.createElement("div");
  stationItem.classList.add("station-item");
  stationItem.dataset.stationIndex = index;

  var stationImage = document.createElement("img"); // Ensure this is inside the loop
  stationImage.classList.add("station-image");
  stationImage.src = station.logo; // Replace with your logo paths

  var stationName = document.createElement("span");
  stationName.classList.add("station-name");
  stationName.textContent = station.name;

  stationItem.appendChild(stationImage);
  stationItem.appendChild(stationName);

  stationGrid.appendChild(stationItem);

  stationItem.addEventListener("click", function () {
    playStation(station);
  });
});
