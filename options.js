function loadTimeZones() {
  chrome.storage.sync.get("timeZones", function (data) {
    const timeZones = data.timeZones || [
      { tz: "UTC", label: "UTC" },
      { tz: "America/New_York", label: "New York" },
      { tz: "Asia/Shanghai", label: "China" },
    ];
    const list = document.getElementById("timeZoneList");
    list.innerHTML = "";

    timeZones.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.label} (${item.tz})`;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.onclick = () => removeTimeZone(index);
      li.appendChild(removeButton);

      if (index > 0) {
        const upButton = document.createElement("button");
        upButton.textContent = "Up";
        upButton.onclick = () => moveTimeZone(index, index - 1);
        li.appendChild(upButton);
      }

      if (index < timeZones.length - 1) {
        const downButton = document.createElement("button");
        downButton.textContent = "Down";
        downButton.onclick = () => moveTimeZone(index, index + 1);
        li.appendChild(downButton);
      }

      list.appendChild(li);
    });
  });
}

function addTimeZone() {
  const tzInput = document.getElementById("newTimeZone");
  const labelInput = document.getElementById("newLabel");
  const tz = tzInput.value.trim();
  const label = labelInput.value.trim() || tz;

  if (tz && isValidTimeZone(tz)) {
    chrome.storage.sync.get("timeZones", function (data) {
      const timeZones = data.timeZones || [];
      timeZones.push({ tz, label });
      chrome.storage.sync.set({ timeZones }, loadTimeZones);
    });
    tzInput.value = "";
    labelInput.value = "";
  } else {
    alert("Invalid time zone. Please enter a valid IANA time zone name.");
  }
}

function removeTimeZone(index) {
  chrome.storage.sync.get("timeZones", function (data) {
    const timeZones = data.timeZones || [];
    timeZones.splice(index, 1);
    chrome.storage.sync.set({ timeZones }, loadTimeZones);
  });
}

function moveTimeZone(fromIndex, toIndex) {
  chrome.storage.sync.get("timeZones", function (data) {
    const timeZones = data.timeZones || [];
    if (
      fromIndex >= 0 &&
      fromIndex < timeZones.length &&
      toIndex >= 0 &&
      toIndex < timeZones.length
    ) {
      const [item] = timeZones.splice(fromIndex, 1);
      timeZones.splice(toIndex, 0, item);
      chrome.storage.sync.set({ timeZones }, loadTimeZones);
    }
  });
}

function isValidTimeZone(tz) {
  try {
    Intl.DateTimeFormat(undefined, { timeZone: tz });
    return true;
  } catch (ex) {
    return false;
  }
}

document.getElementById("addButton").onclick = addTimeZone;
loadTimeZones();
