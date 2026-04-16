# 🏃 ScoutIQ — Athlete Discovery App

A React Native (Expo) application built for scouts to discover athletes, evaluate profiles, and manage a shortlist for trials.

---

## 🚀 Setup Instructions

```bash
# Clone the repo
git clone <your-repo-link>

# Navigate into project
cd ScoutIQ

# Install dependencies
npm install

# Start the app
npx expo start
```

📱 Run on:

* Expo Go (Android / iOS)
* Emulator / Simulator

---

## ✨ Features

### 🔍 Athlete Discovery Feed

* Scrollable list of athletes using `FlatList`
* Displays: name, sport, position, age, and score
* Filter athletes by sport using dropdown chips
* Real-time search with **debounced input (300ms)**
* Dynamic result count display

---

### 👤 Athlete Profile Screen

* Detailed athlete stats (speed, stamina, accuracy)
* **Readiness Score** with custom-built progress bar
* Add / Remove athlete from shortlist
* Clean navigation without stale state

---

### ⭐ Shortlist Management

* Save athletes to shortlist
* Persistent storage using **AsyncStorage**
* Remove athletes from shortlist
* Displays:

  * Total shortlisted athletes
  * Average score
* Handles empty state gracefully

---

### 🧭 Navigation

* Bottom Tab Navigation:

  * Discover
  * Shortlist
* Stack Navigation inside Discover:

  * Discover → Profile

---

## 🧠 Key Decisions

* Used **React Navigation** instead of Expo Router for better control and alignment with assignment requirements.
* Implemented **Context API** for global shortlist state management (simple and scalable).
* Built **custom progress bar** instead of using external libraries to meet constraints.
* Implemented **debounce manually** for search optimization and performance.
* Prioritized **clean architecture and maintainability** over adding unnecessary complexity.

---

## ⚠️ What’s Incomplete / Trade-offs

* Swipe-to-delete in shortlist not implemented (used button for simplicity)
* UI animations kept minimal to focus on core functionality
* Limited dataset (mock JSON) instead of dynamic API

---

## 🔮 If I Had More Time

* Add smooth animations (e.g., chip transitions, progress bar animation)
* Implement swipe gestures for shortlist removal
* Improve UI polish (shadows, typography, spacing consistency)
* Add sorting (e.g., highest score first)

---

## 🛠 Tech Stack

* React Native (Expo)
* TypeScript
* React Navigation
* AsyncStorage

---

## 🤖 AI Tools Used

* ChatGPT (for architecture guidance and debugging support)

---

## 📌 Final Notes

The focus of this project was on **clean code, reliable functionality, and thoughtful product decisions** rather than overengineering features.

---

## 📷 Demo (Optional)

*Add screenshots or screen recordings here if available*

---

## 📬 Submission

Submitted as part of the ScoutIQ React Native Intern Assignment.
