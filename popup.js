// Open options page when settings icon is clicked
document.getElementById("settingsIcon").addEventListener("click", () => {
  chrome.runtime.openOptionsPage();
});

// Format time based on date and offset (mirrors React code)
function formatTime(date, offset) {
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const newDate = new Date(utc + 3600000 * offset);
  return newDate.toLocaleTimeString("en-US", { hour12: false });
}

// Update all time displays every second
function updateTimes() {
  const now = new Date();
  const timezones = document.querySelectorAll(".timezone");
  timezones.forEach((tz) => {
    const offset = parseFloat(tz.getAttribute("data-offset"));
    const timeElement = tz.querySelector(".time");
    timeElement.textContent = formatTime(now, offset);
  });
}

// Run updates every second and initialize immediately
setInterval(updateTimes, 1000);
updateTimes();
