
#### About the Game

### Objective:
The objective of the "Guess the Number" game is for the player to guess a randomly generated number within a specified range. The game provides feedback on each guess, helping the player adjust their approach until they identify the correct number.


### How It Works:

#### **1. Setting Up the Game:**
The computer generates a random number based on a size chosen by the player. The player can select a number size of 3, 4, or 5 digits.
Each digit in this number is randomly chosen, with a restriction that the first digit cannot be 0 (ensuring it isn’t inadvertently shortened by leading zeros).
The game is designed to work with only positive integers.

#### **2. Making a Guess:**
The player attempts to guess the number by entering a number of the same length as the generated number (either 3, 4, or 5 digits).
With each guess, the program compares the player’s input to the actual number and provides feedback to help guide future guesses.

#### **3. Feedback System:**
After each guess, the program gives feedback using two indicators:

- **Hits (Correct Digits in Correct Position):**
The count of digits that match exactly in both value and position with the target number.

- **Misses (Correct Digits in Incorrect Position):**
The count of digits that are correct in value but positioned incorrectly within the guess.
Using this feedback, the player can adjust their next guess, homing in on the correct number gradually.

#### **4. Winning the Game:**
The game continues until the player’s guess matches the generated number exactly, meaning all digits are correct and in the correct position (full B score).
At this point, the player wins, and the game ends.


![alt text](<screenshot1.png>)


### Game Rules:


#### **1. First-Digit Rule:**
The first digit of both the generated number and each player’s guess cannot be 0, ensuring a non-zero starting point for each attempt.

#### **2. Integer-Only Rule:**
All digits involved in the guesses and generated numbers are restricted to integers only, with no decimal or fractional values allowed.
This game structure allows for a fun and engaging experience as the player analyses feedback and makes strategic guesses until they successfully match the target number.


![alt text](<screenshot2.png>)


________________________________________


## DEVELOPMENT PROCESS

### 1. Key Features Implemented

#### **Random Number Generation:**
Ensured the generated number is unique, non-duplicate, and starts with a non-zero digit.

#### **User Input Validation:**
Restricted input to integers with the correct number of digits.
Prevented duplicate guesses by comparing new inputs to previously submitted guesses.
Checked for unique digits in the user's guess to maintain validity.

#### **Feedback Mechanism:**
Provided detailed feedback on each guess:
- Hits (B): Correct digits in the correct positions.
- Misses (G): Correct digits in incorrect positions.
- Feedback displayed in a visually appealing list with color-coded indicators.

#### **Game Interaction:**
"Give Up" Button: Enabled after 5 attempts, revealing the target number if the user chooses to quit.
Restart Game Option: Reset all game parameters and allowed the user to begin a new game.
Keyboard Support: Allowed users to submit their guesses by pressing the "Enter" key.

#### **Iteration Counter:**
Displayed the total number of attempts upon successful completion or when the user gave up.

#### **Game Rules and Introduction Page:**
Added a separate introduction page with game instructions, improving clarity for first-time users.


### **2. Design Approach**
Used React functional components with hooks like useState for state management.
Utilized Bootstrap for responsive design and styled components to create an aesthetically pleasing and user-friendly interface.
Incorporated feedback sections with color-coded styles (green for Hits, orange for Misses) for better user experience.

### **3. Challenges and Solutions**

- **Preventing Duplicate Numbers:**
Solution: Implemented a Set to ensure unique digits during random number generation and validated user input.

- **Duplicate Guesses:**
Solution: Maintained a record of previous guesses and cross-checked new guesses before processing.

- **Making the UI Interactive and Accessible:**
Solution: Integrated Bootstrap for styling and ensured keyboard accessibility for guess submission.

### 4. Future Improvements
- Add a timer feature to track how long users take to solve the puzzle.
- Add a feature to eliminate those values if user gets 0 Hits and 0 Misses.
- Include difficulty levels (e.g., Easy, Medium, Hard) with varying rules or digit lengths.
- Add animations or sound effects for enhanced user engagement.
- Store game progress locally so users can resume later.


This project is a practical example of how React.js can be used to build an interactive application with dynamic user feedback and robust input handling. It combines logic, design, and user experience seamlessly.





---------------------------

## **INSTALLATION**

Follow these steps to clone the repository and run the project locally on your machine.

### **Prerequisites**

Ensure you have the following installed on your system:
- **Node.js** (v16 or later)
- **npm** (Node Package Manager, comes with Node.js)
- A **code editor** like Visual Studio Code (optional)


### **Steps to Run the Project**

1. **Install Dependencies**  
   Install the required dependencies by running:
   ```bash 
   npm install


2. **Start the Development Server**  
   To start the project, run the following command:
   ```bash
   npm start


### License
This project is licensed under the MIT License.