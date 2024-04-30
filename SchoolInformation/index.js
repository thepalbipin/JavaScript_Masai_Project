const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};


// Problem 10: countCalculation [1]

/* Extract the mathTeachersCount,historyTeachersCount, mathStudentsCount, and historyStudentsCount using multilevel destructuring.
define a countCalculation function that takes input as school 
countCalculation return an object with mathTeachersCount,historyTeachersCount, mathStudentsCount, and historyStudentsCount */

function countCalculation(school) {
  
  const { math, history } = school.departments;

  return {
    mathTeachersCount: math.teachers,
    historyTeachersCount: history.teachers,
    mathStudentsCount: math.students,
    historyStudentsCount: history.students,
  };
}

const result = countCalculation(school);
console.log(result);


// Problem 11: findTopStudent [1]

/* findTopStudent that takes a course name as a parameter and finds the student with the highest score in that course using multilevel destructuring.
define a findTopStudent function that takes input as school (Object) courseName (String)
findTopStudent return a string as {topstudent object} */

function findTopStudent(school, courseName) {

  const { students } = school;
  const course = courseName.toLowerCase();

  return students.reduce((topStudentScores, currentStudentScores) => {
    
    const { scores } = currentStudentScores;
    const currentScore = scores[course];

    return !topStudentScores || currentScore > topStudentScores.scores[course] ? currentStudentScores : topStudentScores;
    
  }, null);
}

const topMathStudent = findTopStudent(school, "math");
console.log(`Top Math Student: ${JSON.stringify(topMathStudent)}`);


// Problem 12: addNewDept [1]

/* Use the spread operator to add new departments
define an addNewDept function that takes input as school (Object) newDepartment (object)
addNewDept return a school object with an updated department. */

function addNewDept(school, newDepartment) {

  const updatedSchool = { ...school };

  updatedSchool.departments = {
    ...updatedSchool.departments,
    ...newDepartment,
  };

  return updatedSchool;
}

const newArtDepartment = {
  art: { teachers: 2, students: 50 },
};

const updatedSchool = addNewDept(school, newArtDepartment);
console.log(updatedSchool);

// Problem 13: highestStudentCountDepartment[1]

/* highestStudentCountDepartment that returns the department (name) with the highest number of students.
define a highestStudentCountDepartment function that takes input as school (Object)
highestStudentCountDepartment return string as ${highest count dept} */

/* function highestStudentCountDepartment(school) {
  const deptEntries = Object.entries(school.departments);

  const highestCountDept = deptEntries.reduce((maxDept, [deptName, deptInfo]) => {
    const currentStudentCount = deptInfo.students;
    return !maxDept || currentStudentCount > maxDept.studentCount ? { deptName, studentCount: currentStudentCount } : maxDept;
  }, null);

  return highestCountDept ? `${highestCountDept.deptName} Department` : "No departments found in the school.";
} */


function highestStudentCountDepartment(school) {
  
  const highestCountDept = Object.entries(school.departments).reduce((maxDept, [deptName, deptInfo]) => {
    return !maxDept || deptInfo.students > maxDept.students ? deptName : maxDept;
  }, null);

  // Returning department name or a message if none found
  return highestCountDept ? `${highestCountDept} Department` : "No departments found in the school.";
}

const highestDept = highestStudentCountDepartment(school);
console.log(highestDept);


// Problem 14: Greeting Message [1]

/* creating a JavaScript function to generate a personalized greeting message.
create a function generateGreeting that generates a greeting message for a given name and language.
The function should have a default parameter for the language, which is set to English.
Define a function generateGreeting that takes parameters name and language (default parameter: 'English').
Create an object greetings that contains greeting messages for different languages. Include at least English, Spanish, and French.
The function should return a formatted greeting message based on the provided name and language.
define a generateGreeting function that takes input as name language (Default English) generateGreeting return string as follow */

const greetings = {
  "English": "Hello, {}",
  "Spanish": "Hola, {}",
  "French": "Bonjour, {}",
};

function generateGreeting(name, language = "English") {

  const greetingTemplate = greetings[language.toUpperCase()] || greetings["English"];

  return greetingTemplate.format(name);
}

// Example usage
console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish")); 
console.log(generateGreeting("Charlie", "French"));
console.log(generateGreeting("Diana", "German"));
