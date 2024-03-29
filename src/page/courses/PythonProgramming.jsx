import CourseBody from "../../components/course/CourseBody";

const data = {
  title: "Python Programming",
  subTitle: "Beginner to Master",
  imageUrl:
    "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
  detail:
    "Welcome to the Python course online for beginners, designed to help you kickstart your programming journey. This comprehensive Python course offers essential topics like basic Python, data structures, object-oriented programming, and more. You'll gain the knowledge and confidence to start working on live projects, which will be discussed during this course",
  requirements: [
    "A computer with internet access",
    "Basic understanding of programming concepts (not mandatory)",
  ],
  description:
    "This Python course is designed for beginners to masters and covers a wide range of essential topics, including Python fundamentals, data structures, object-oriented programming, and more. You will gain the knowledge and confidence to start working on real-world projects as part of this comprehensive course.",
  isDetailedSyllabus: true,
  syllabus: [
    {
      title: "Introduction & Python Installation and Setups",
      topics: ["Install Python", "Install VScode IDE ", "Install Pycharm IDE "],
    },
    {
      title: "Fundamentals Of Python",

      topics: [
        "Hello! World",
        "Variables",
        "Memory",
        "Python Comments",
        "Data Types in Python",
        "Input Function",
      ],
    },
    {
      title: "Operators In Python",
      topics: ["Python Operators and Expressions"],
    },
    {
      title: "Control Flows",
      topics: [
        "Syntax of if else",
        "Nested if else",
        "If elif & else",
        "Challenge: Print Largest",
        "Challenge: Grading System",
        "Challenge: Aging System",
        "Challenge: Cricket System",
      ],
    },
    {
      title: "Loops In Python",
      topics: [
        "Intro to Python Loops",
        "While loop",
        "Print Numbers using Python loop",
        "Print Even Numbers in Given Range",
        "Print Sum of Numbers in given Range",
        "Range Function",
        "Iterator, Iterable & Iteration",
        "For loop in Python",
        "Print Multiplication table",
        "Print Pattern -1",
        "Print Pattern - 2",
        "Break Continue & Pass Statements",
      ],
    },
    {
      title: "Strings In Python",
      topics: [
        "Strings in Python",
        "ord & chr in Python",
        "Indexing in Strings",
        "Accessing a character in string",
        "String Slicing",
        "String Methods part 1",
        "String Methods part 2",
        "String Formatting",
        "String Concatenation",
        "Challenge: Print Vowels",
        "Challenge: Check Palindrome",
      ],
    },
    {
      title: "Lists",
      topics: [
        "Intro to DataStructures in Python",
        "Introduction to Lists in Python",
        "List Slicing",
        "List Operations",
        "Append vs Extend in lists",
        "Heterogeneous lists",
        "2-D Lists",
        "Iteration in 2D List",
        "List Comprehension",
        "Challenge: Find total population",
      ],
    },
    {
      title: "Tuples",
      topics: [
        "Intro to Tuples in Python",
        "Creating a tuple",
        "Mutability in tuples",
        "Tuple unpacking",
        "Tuple Operations",
      ],
    },
    {
      title: "Dictionary",
      topics: [
        "Introduction to Dictionary",
        "Creating Dictionary",
        "Accessing Data in Dictionary",
        "Updating dictionary",
        "Deletion Operations in Dictionary",
        "Iteration in Dictionary",
        "More Dictionary Methods",
        "Challenge: Find Frequency of Characters in a String",
      ],
    },
    {
      title: "Sets",
      topics: [
        "Intro to Sets in Python",
        "Update & Delete Operations",
        "Intersection",
        "Union",
        "Difference",
        "Challenge: Find Unique words",
      ],
    },
    {
      title: "Functions",
      topics: [
        "Functions Introduction",
        "Defining a Function",
        "Docstrings",
        "Parameter & Arguments",
        "Return",
        "Returning Multiple values",
        "Scope of a Variable",
        "Lambda Function",
        "Challenge: Print Even Numbers",
        "Challenge: Return List with Unique Numbers",
        "Arguments vs Parameters in Functions",
        "Positional Arguments",
        "Default Arguments",
        "Default follows non-default",
        "Arbitrary Arguments",
        "Keyword Arguments",
      ],
    },
    {
      title: "OOP In Python",
      topics: [
        "Intro to OOPS in Python",
        "Class & Object in Python",
        "Class Constructor",
        "Class Methods",
        "Class Variables",
        "Adding more methods in Class",
        "Inheritance introduction",
        "Inheritance Code",
        "Adding Attributes in Derived Class",
        "Adding Methods in Derived Class",
        "Polymorphism in Python",
        "Operator Level Polymorphism",
        "Function level Polymorphism",
      ],
    },
    {
      title: "File Handling In Python",
      topics: [
        "Intro to File-Handling in Python",
        "File Operations in Python",
        "with open",
        "Writing a file",
        "Reading a file",
        "Handling Binary File",
        "Appending in a File",
      ],
    },
    {
      title: "Error & Exception Handling",
      topics: [
        "Intro to Errors & Exception in Python",
        "Try & except",
        "Except block",
        "Finally in Python",
      ],
    },
  ],
};

const PythonProgramming = () => <CourseBody data={data} />;

export default PythonProgramming;
