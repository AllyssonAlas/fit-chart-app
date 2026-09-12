# Fit Chart App

## Introduction

**Fit Chart** is a study case split into three parts: this React Native app, a Node.js backend, and a React.js web app. Together they form a system to help gyms, instructors, and members with their daily workout routine. The focus is on **architecture**: the same layered design is reused across mobile, backend, and web, with clear boundaries and dependency rules.

Benefits of this architecture:

- **Modularity**: Layers are loosely coupled, so code in each layer can be reused across projects (e.g. domain logic shared between app and web).
- **Testability**: Separation of concerns makes unit and integration tests straightforward, with support for high coverage.
- **Maintainability**: A clear structure and consistent patterns make the codebase easier to navigate and change.

## About This App

The app was created to serve as the user interface for gym members, designed to offer a quick and focused experience. It was built with React Native using the Expo bare-minimum template—a choice made with a long-term view, where ongoing maintenance of both Android and iOS native code and integration with third-party packages is expected.

## Built With

- [React Native](https://reactnative.dev/) – Mobile UI framework
- [Expo](https://expo.dev/) – Build, tooling, and dev experience (bare workflow)
- [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript
- [React Navigation](https://reactnavigation.org/) – Native stack navigation (Login, SignUp, Home)
- [Axios](https://axios-http.com/) – HTTP client for the Fit Chart API
- [Unistyles](https://reactnative-unistyles.vercel.app/) – Styling
- [Biome](https://biomejs.dev/) – Linting and formatting
- [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/) – Unit and component tests

## Getting Started

You need a working React Native/Node.js environment and the **Fit Chart REST API** running (see [Fit Chart API](https://github.com/AllyssonAlas/fit-chart-api)).

### Prerequisites

1. Set up and run the [Fit Chart REST API](https://github.com/AllyssonAlas/fit-chart-api).

### Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/AllyssonAlas/fit-chart-app.git
   cd fit-chart-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **iOS only – install CocoaPods**
   ```sh
   cd ios
   pod install
   cd ..
   ```

4. **Environment**
   Create a `.env` file in the project root with your Fit Chart API base URL, for example:
   ```
   API_URL=http://localhost:8080
   ```
   (If you have an `.env.example` in the repo, you can copy from that.)

5. **Run the app**
   - **Android**
     ```sh
     npx expo run:android --variant release
     ```
   - **iOS**
     - Open `ios/fitchartapp.xcworkspace` in Xcode.
     - Select your scheme and set it to a production (release) build if desired.
     - Run on a simulator or device.

For local development you can use `npx expo run:android` or `npx expo run:ios` without the release variant.
