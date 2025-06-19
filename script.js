function isWithin7Days(currentDate, nextDate) {
  const msIn7Days = 7 * 24 * 60 * 60 * 1000;
  const diff = nextDate - currentDate;
  console.log("Current date:", currentDate);
  console.log("Next release date:", nextDate);
  console.log("Difference in milliseconds:", diff);
  console.log("Difference in days:", diff / (1000 * 60 * 60 * 24));
  return diff >= 0 && diff <= msIn7Days;
}

async function loadJSONFile(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
}

async function showAnswer() {
  const resultDiv = document.getElementById("result");
  const currentDate = new Date();

  try {
    const scheduleSrc = 'https://raw.githubusercontent.com/EdYuTo/edyuto.github.io/resources/schedule/schedule.json';
    const jsonData = await loadJSONFile(scheduleSrc);
    const nextReleaseTimestamp = jsonData['timestamp'] * 1000;
    const nextReleaseDate = new Date(nextReleaseTimestamp);

    if (isWithin7Days(currentDate, nextReleaseDate)) {
      resultDiv.textContent = "No";
      resultDiv.classList.add("no");

      const chapterDiv = document.createElement("div");
      chapterDiv.id = "chapter";
      chapterDiv.textContent = "Current Chapter: " + jsonData['chapter'];
      resultDiv.appendChild(chapterDiv);
    } else {
      resultDiv.textContent = "Yes";
      resultDiv.classList.add("yes");
    }
  } catch (error) {
    console.error("Error loading schedule:", error);
    resultDiv.textContent = "??";
    resultDiv.classList.add("yes");
  }

  resultDiv.style.display = "block";
}

window.onload = function () {
  showAnswer();
};
