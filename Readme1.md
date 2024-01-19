# AI ML Powered chatbot on Namami Gange

## Description
Join us in revolutionizing Namami Gange! This project is a crucial part of the Namami Gange initiative, blending the power of the Rasa framework and a user-friendly React app to create an intelligent chatbot system. By harnessing the prowess of GPT-4-Free, our goal is to enhance Namami Gange's outreach by providing an interactive and informative conversational interface. Imagine chatting with an AI assistant dedicated to answering queries and guiding you through the Namami Gange project.

## Table of Contents

- [Overview](#Overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)

## Overview

Provide a brief overview of your project, including its purpose and key features. Mention the technologies used, such as Rasa framework, React app, and the G4F repository.

## Prerequisites
- Ensure you have Python 3.8 installed
- Additionally, Node.js and npm need to be installed


## Installation

# Rasa Installation Guide

This guide provides step-by-step instructions for installing Rasa without using a conda environment. You will use Python's virtual environments to set up and install Rasa on your system.

## Prerequisites

- Python (Make sure you have Python installed on your system. You can download the latest version from the [official Python website](https://www.python.org/)).

## Installation Steps

### 1. Create a Virtual Environment

Open a terminal or command prompt and navigate to the directory where you want to create your virtual environment. Run the following commands:

#### On Windows:

```bash
python -m venv venv
```

This will create a virtual environment named "venv" in the current directory.

### 2. Activate the Virtual Environment

Activate the virtual environment using the appropriate command for your operating system:

#### On Windows:

```bash
venv\Scripts\activate
```

After activation, your command prompt or terminal should show the virtual environment's name.

### 3. Install Rasa

With the virtual environment activated, install Rasa using the following command:

```bash
pip install rasa
```

This will install the latest version of Rasa and its dependencies within the virtual environment.

### 4. Verify Installation

Verify the installation by checking the Rasa version:

```bash
rasa --version
```

This command should display the installed Rasa version.




These steps assume you have Python 3.8 already installed on your system. Adjust the Python version accordingly if needed. 

Remember, using a virtual environment is a good practice to isolate project dependencies. Adjustments might be necessary based on your specific project setup or any specific libraries you're using.

# React App
Make sure to have Node.js and my-react-app installed beforehand.
```bash
# Navigate to the React app directory
cd my-react-app
# Install dependencies
npm install
```
# G4F
Follow the instructions on the https://github.com/xtekky/gpt4free/blob/main/README.md to clone and setup the repository needed for the chatbot.

## Usage
### Setting Up Rasa
1. Train the Rasa chatbot:
    ```bash
    rasa train
    ```
2. Start the Rasa server:
    ```bash
    rasa run -m models --enable-api --cors "*" --debug
    ```
3. Running the actions:
   Navigate to the rasa-env directory and then run rasa bot.
    ```bash
    cd rasa-env
    rasa run actions 
    ```
### Running the React App
1. Start the React app:
    ```bash
    # Navigate to the React app directory
    cd react_app
    # Run the app
    npm start
    ```

## Configuration
- **Rasa Configuration**: Find configuration files for Rasa NLU and Core in the `rasa_chatbot` directory.
- **React App Configuration**: Configuration files for the React app can be found in the `my-react-app` directory.


## Acknowledgements
- [Rasa](https://rasa.com/): The brain behind conversational AI.
- [React](https://reactjs.org/): Creates the interactive chat interface.
- [GPT-4-Free](link-to-gpt4-repository): Powers realistic and engaging conversations.

---


