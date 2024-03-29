import CourseBody from "../../components/course/CourseBody";

const data = {
  title: "Python Project",
  subTitle: "Make Begineer to Advance Level Projects",
  imageUrl:
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
  detail:
    "It’s a 30 days program with 30 projects which we are going to discuss on call from scratch. You will be coding along with us during the live session.",
  requirements: [
    `Python programming and technical knowledge required.`,
    `A computer with internet connection.`,
    `No paid tools are required as the tools required for this course are free.`,
    ` Passion and curiosity to learn something new and do hand-on projects live`,
  ],
  description:
    "If you're new to Python and eager to join us, consider taking a beginner's Python course or exploring introductory Python resources to build the necessary foundation. This prior knowledge will enhance your experience and enable you to tackle the 30 projects with confidence.",
  isDetailedSyllabus: false,
  syllabus: [
    "Rock, Paper, Scissors Game",
    "Password Generator",
    "QR Code Encoder/Decoder",
    "Tic-Tac-Toe Game",
    "Sudoku Solver",
    "Guess the Number Game (Computer)",
    "Guess the Number Game (User)",
    "Hangman",
    "Snake Game",
    "Minesweeper",
    "Binary Search Project",
    "Photo Manipulation in Python",
    "Connect Four Game",
    "Tetris",
    "Online Multiplayer Game",
    "Pong",
    "Markov Chain Text Composer",
    "Countdown Timer",
    "Web Scraping Program",
    "Bulk File Renamer",
    "Weather Program",
    "Code a Discord Bot with Python - Host for Free in the Cloud",
    "Space Invaders Game",
    "Draw Chessboard using Turtle",
    "Automate Google Search",
    "Automate Birthday Mail",
    "Color Game using Tkinter",
    "Create Digital Clock using Turtle",
    "Extract Frames using OpenCV",
    "Invisible Cloak",
  ],
};

const PythonProject = () => <CourseBody data={data} />;

export default PythonProject;
