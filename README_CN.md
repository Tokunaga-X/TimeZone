# World Clock Chrome Extension

这是一个简单的 Chrome 扩展，可以显示多个时区的当前时间。

## 功能特点

- 显示多个时区的实时时间
- 可自定义添加、删除和排序时区
- 支持所有 IANA 标准时区
- 快捷键支持（Ctrl+Shift+X）打开时钟界面
- 简洁的用户界面

## 本地安装步骤

1. **下载代码**

   - 将所有代码下载到本地文件夹中

2. **准备文件结构**

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

3. **在 Chrome 中加载扩展**
   - 打开 Chrome 浏览器
   - 访问 `chrome://extensions/`
   - 在右上角启用"开发者模式"
   - 点击"加载已解压的扩展程序"
   - 选择包含扩展文件的文件夹

## 使用方法

1. **查看时间**

   - 点击 Chrome 工具栏中的扩展图标
   - 或使用快捷键 `Ctrl+Shift+X`

2. **管理时区**

   - 点击设置图标进入选项页面
   - 在选项页面可以：
     - 添加新时区
     - 删除现有时区
     - 调整时区顺序

3. **添加新时区**
   - 在选项页面输入 IANA 时区名称（如 "America/New_York"）
   - 可选择添加自定义标签
   - 点击"Add"按钮添加

## 注意事项

- 确保提供的所有图标文件都存在于 images 文件夹中
- 时区名称必须使用标准的 IANA 时区格式
- 扩展需要"storage"权限来保存时区设置

## 技术栈

- HTML
- CSS
- JavaScript
- Chrome Extension API

## 开发者信息

作者: Tokunaga-X
项目主页: https://github.com/Tokunaga-X/TimeZone
