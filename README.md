# BMI Calculator with SpreadsheetWeb API

A responsive Body Mass Index (BMI) Calculator built using HTML, CSS, and JavaScript, integrated with SpreadsheetWeb API.

## 🚀 Quick Start

### 1. Configure API Connection

Open `script.js` and locate the following section:

```js
const API_URL = "https://YOUR-SERVER-DOMAIN/api/calculations/calculatesinglesimple";
const WORKSPACE_ID = "YOUR_WORKSPACEID";
const APPLICATION_ID = "YOUR-APPLICATIONID";
```

Replace:

- `API_URL` with your own SpreadsheetWeb private server address.
- `WORKSPACE_ID` and `APPLICATION_ID` with the correct values from your SpreadsheetWeb Hub.

> 🔐 Note: Each server has its own URL. Do not use the demo domain in production.

---

### 2. Host on Your Domain

Upload the files to a private domain (e.g., `https://tools.yourcompany.com/bmi`).  
Do not use localhost unless it’s added to the allowed list in SpreadsheetWeb.

---

### 3. SpreadsheetWeb Application Setup

- ✅ Enable "Allow Anonymous Access"
- ✅ Whitelist your domain under **Allowed Domains**

---

## 🗂 Files

```
index.html   - UI layout
style.css    - Styling
script.js    - Logic and API integration
README.md    - Documentation
```

---

## 📸 Screenshot

![BMI Calculator UI](https://github.com/SpreadsheetWeb/bmi-calculator-custom-page/blob/main/bmi-calculator-screenshot.png?raw=true)

---

## ✅ Benefits

- No backend needed
- Secure and configurable
- Reusable with different SpreadsheetWeb apps

---

## 📜 License

MIT

---

## 🔗 Resources

- [SpreadsheetWeb](https://www.spreadsheetweb.com)
- [Documentation](https://support.spreadsheetweb.com)
