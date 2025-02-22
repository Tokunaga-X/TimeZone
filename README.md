# World Clock Chrome Extension

[中文](./README_CN.md)

A simple Chrome extension that displays current time across multiple time zones.

## Features

- Real-time display of multiple time zones
- Customizable time zones (add, remove, and reorder)
- Support for all IANA time zones
- Keyboard shortcut (Ctrl+Shift+X) to open clock interface
- Clean and intuitive user interface

## Local Installation

1. **Download the Code**

   - Download all code to a local folder

2. **Prepare File Structure**

   ```
   your-extension-folder/
   ├── manifest.json
   ├── popup.html
   ├── popup.js
   ├── options.html
   ├── options.js
   ├── background.js
   └── images/
       ├── icon16.png
       ├── icon32.png
       ├── icon64.png
       ├── icon128.png
       └── settings.png
   ```

3. **Load in Chrome**
   - Open Chrome browser
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked"
   - Select the folder containing extension files

## Usage

1. **View Times**

   - Click the extension icon in Chrome toolbar
   - Or use shortcut `Ctrl+Shift+X`

2. **Manage Time Zones**

   - Click the settings icon to access options page
   - In the options page you can:
     - Add new time zones
     - Remove existing time zones
     - Adjust time zone order

3. **Add New Time Zone**
   - Enter IANA time zone name (e.g., "America/New_York")
   - Optionally add a custom label
   - Click "Add" button

## Notes

- Ensure all icon files are present in the images folder
- Time zone names must use standard IANA format
- Extension requires "storage" permission to save settings

## Tech Stack

- HTML
- CSS
- JavaScript
- Chrome Extension API

## Developer Info

Author: Tokunaga-X
Homepage: https://github.com/Tokunaga-X/TimeZone
