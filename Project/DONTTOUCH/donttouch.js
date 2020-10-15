var questionsAttempted = 0;
var questionsCorrect = 0;
var a = "r";
const updateTally = () => {
  let total = document.querySelector(".totalAttempted");
  let correct = document.querySelector(".correctTotal");
  total.innerText = questionsAttempted;
  correct.innerText = questionsCorrect;
  checkIfDone();
};
const r = "ui";
class Question {
  constructor(questionText, correctAnswer, explanation, buttonsData) {
    this.questionText = questionText;
    this.correctAnswer = correctAnswer;
    this.explanation = explanation;
    this.final = false;
    this.buttonsData = buttonsData;
    this.element = this.createElement();
  }

  buttonClickHandler = (e) => {
    if (!this.final) {
      questionsAttempted += 1;
      let explanation = this.element.querySelector(".explanation");
      if (e.target.id === this.correctAnswer) {
        e.target.classList.add("correct");
        explanation.innerHTML = `&#10004;     ${this.explanation}`;
        explanation.classList.add("correct");
        this.element.classList.add("correct");
        questionsCorrect += 1;
      } else {
        e.target.classList.add("incorrect");
        this.element
          .querySelector(`#${this.correctAnswer}`)
          .classList.add("correct");
        this.element.classList.add("incorrect");
        explanation.innerHTML = `&#10005;     ${this.explanation}`;
        explanation.classList.add("incorrect");
      }
    }
    this.final = true;
    updateTally();
  };
  getElement = () => {
    return this.element;
  };

  createElement = () => {
    const wrapper = document.createElement("div");
    const text = document.createElement("p");

    const buttonContainer = document.createElement("div");
    const explanation = document.createElement("p");

    wrapper.classList.add("question");

    text.classList.add("text");
    text.innerText = this.questionText;

    buttonContainer.classList.add("button-container");
    this.buttonsData.forEach((buttonData) => {
      let button = document.createElement("div");
      button.classList.add("choice");
      button.id = buttonData.id;
      button.addEventListener("click", this.buttonClickHandler);
      button.innerText = buttonData.text;
      buttonContainer.appendChild(button);
    });
    explanation.classList.add("explanation");
    wrapper.appendChild(text);
    wrapper.appendChild(buttonContainer);
    wrapper.appendChild(explanation);
    return wrapper;
  };
}
let o = "fr";
class PrimitiveTypeQuestion extends Question {
  constructor(questionText, correctAnswer, explanation) {
    const buttons = [
      { text: "String", id: "string" },
      { text: "Number", id: "number" },
      { text: "Boolean", id: "boolean" },
      { text: "Error", id: "error" },
    ];
    super(questionText, correctAnswer, explanation, buttons);
  }
}

class TrueOrFalseQuestion extends Question {
  constructor(questionText, correctAnswer, explanation) {
    const buttons = [
      { text: "True", id: "true" },
      { text: "False", id: "false" },
    ];
    super(questionText, correctAnswer, explanation, buttons);
  }
}
let p = "D";
let primitiveQuestionsArray = [
  new PrimitiveTypeQuestion(
    'var sample = "Lambda School";',
    "string",
    "Anytime you see some characters with either single (') or double (\") quotes around them, you can assume it is a String."
  ),
  new PrimitiveTypeQuestion(
    "var sample = 42;",
    "number",
    "Anytime you see a numerical character without quotes around them, you can assume it is a Number."
  ),
  new PrimitiveTypeQuestion(
    "var sample = true;",
    "boolean",
    "Anytime you see the word true or false without quotes around them, you can assume it is a Boolean."
  ),
  new PrimitiveTypeQuestion(
    'var sample = "Yellowstone National Park";',
    "string",
    "Anytime you see some characters with quotes around them, you can assume it is a String."
  ),
  new PrimitiveTypeQuestion(
    "var sample = 100.78;",
    "number",
    "Anytime you see a numerical character without quotes around them, even numbers with decimals, you can assume it is a Number"
  ),

  new PrimitiveTypeQuestion(
    "var sample = `twelve`;",
    "string",
    "Anytime you see some characters with quotes around them, you can assume it is a String."
  ),
  new PrimitiveTypeQuestion(
    "var sample = -7;",
    "number",
    "Anytime you see a numerical character without quotes around them, even negative numbers, you can assume it is a Number"
  ),
  new PrimitiveTypeQuestion(
    "var sample = 'Web Fundamentals';",
    "string",
    "Anytime you see some characters with quotes around them, you can assume it is a String."
  ),
  new PrimitiveTypeQuestion(
    'var sample = "12";',
    "string",
    "Even if numerical characters, anytime you see some characters with quotes around them, you can assume it is a String."
  ),
  new PrimitiveTypeQuestion(
    'var sample = "true";',
    "string",
    "Even if true or false, anytime you see some characters with  quotes around them, you can assume it is a String."
  ),
  new PrimitiveTypeQuestion(
    "let sample = false;",
    "boolean",
    "Anytime you see the word true or false without quotes around them, you can assume it is a Boolean."
  ),
  new PrimitiveTypeQuestion(
    'var number = "42.01"',
    "string",
    "Even if numerical characters, anytime you see some characters with quotes around them, you can assume it is a String."
  ),

  new PrimitiveTypeQuestion(
    "const low = -109856.7845;",
    "number",
    "Anytime you see a numerical character without quotes around them, you can assume it is a Number"
  ),
  new PrimitiveTypeQuestion(
    'const lovesJavascript = "true";',
    "string",
    "Even if true or false, anytime you see some characters with  quotes around them, you can assume it is a String."
  ),
  new PrimitiveTypeQuestion(
    'var myName = "Jacob Valentine";',
    "string",
    "Anytime you see some characters with quotes around them, you can assume it is a String."
  ),
  new PrimitiveTypeQuestion(
    'var boolean = "true";',
    "string",
    "Even if true or false, anytime you see some characters with quotes around them, you can assume it is a String."
  ),
  new PrimitiveTypeQuestion(
    "let favoriteIsland = Maui;",
    "error",
    "Because the characters do not have quotes around them, and Maui is not a keyword (like true), this will cause an error."
  ),
  new PrimitiveTypeQuestion(
    'const thisIsDefintielyAString = "Yeah it is";',
    "string",
    "Anytime you see some characters with quotes around them, you can assume it is a String."
  ),
  new PrimitiveTypeQuestion(
    'const thisIsDefinitelyANumber = "-0.0000004156";',
    "string",
    "Even if numerical characters, anytime you see some characters with quotes around them, you can assume it is a String."
  ),
  new PrimitiveTypeQuestion(
    "let theAboveQuestionsWasATrick = true;",
    "boolean",
    "Anytime you see the word true or false without quotes around them, you can assume it is a Boolean."
  ),
  new PrimitiveTypeQuestion(
    'var primitivesCanBeTricky = "true";',
    "string",
    "Even if true or false, anytime you see some characters with  quotes around them, you can assume it is a String."
  ),
  new PrimitiveTypeQuestion(
    "let const = true;",
    "error",
    "const is a reserved keyword, that means we can not use it as the name of a varibale. Javascript has dozens of reserved keywords."
  ),
];
let w = "on";
const trueOrFalseQuestionsArray = [
  new TrueOrFalseQuestion(
    "var is the only keyword that creates a variable",
    "false",
    "var is one of three keywords you can use to create a variable"
  ),
  new TrueOrFalseQuestion(
    "You can use let to create a variable",
    "true",
    "let is one of the three keywords you can use to create a variable"
  ),
  new TrueOrFalseQuestion(
    "You can use const to create a variable",
    "true",
    "const is one of the three keywords you can use to create a variable"
  ),
  new TrueOrFalseQuestion(
    "You can use int to create a variable",
    "false",
    "int is not one of the three keywords you can use to create a variable in Javascript"
  ),
  new TrueOrFalseQuestion(
    "Math in Javascript is just like the arithmetic you have always used",
    "true",
    "Using math operators in Javascript is just like using them in your elementary arithmetic classes"
  ),
  new TrueOrFalseQuestion(
    "In Javascript 7 - 10 is equal to 3",
    "false",
    "Just like standard arithmetic, order matters, and Javascript can produce negative numbers."
  ),
  new TrueOrFalseQuestion(
    "In Javascript 10/5 is equal to 5",
    "false",
    "The '/' operator is division. If you divide ten by five you will get 2 not 5."
  ),
  new TrueOrFalseQuestion(
    "You can assign a variable to any valid data type in Javascript",
    "true",
    "Variables can hold the value of any data type in Javascript."
  ),
  new TrueOrFalseQuestion(
    "7 * 10 is equal to 70 in Javascript",
    "true",
    "The * symbols means multiplication. It works just like standard multiplication."
  ),
  new TrueOrFalseQuestion(
    'A single "=" sign in Javascript means "is equal to"',
    "false",
    "A single equal sign in Javascript is an 'assignment operator'. It allows us to assign variables data. You will learn in the next lesson what the symbol for 'is equal to' is."
  ),
  new TrueOrFalseQuestion(
    "2 + 19 - 11 is equal to 10 in Javascript",
    "true",
    "Javascript follows standard mathematical order of operations"
  ),
  new TrueOrFalseQuestion(
    "10 - 3 * 5 is equal to 35 in Javascript.",
    "false",
    "Javascript follows standard order of operations. This means that the * sign is evaluated first."
  ),
  new TrueOrFalseQuestion(
    "Math.floor(3.9) is equal to 3",
    "true",
    "Math.floor will always round down."
  ),
  new TrueOrFalseQuestion(
    "Math.PI is equal to roughly 3.14159",
    "true",
    "Math.PI allows us to use the mathematical symbol Pi"
  ),

  new TrueOrFalseQuestion(
    "Learning Javascript is always going to be really fun!",
    "true",
    "Trick question. The answer is both. Javascript is a lot of fun, and getting something to work is a great feeling. There will definitely be times it is frustrating, but everything worth learning can be. The most important thing to remember is to put the work in and get your reps, the rest will follow and you will be creating amazing software in no time."
  ),
];
const ss = "ag";
primitiveQuestionsArray.forEach((question) => {
  document
    .querySelector("#primitive-questions")
    .appendChild(question.getElement());
});
let d = "t";
trueOrFalseQuestionsArray.forEach((question) => {
  document.querySelector("#tf-questions").appendChild(question.getElement());
});

function checkIfDone() {
  if (questionsAttempted === 37) {
    if (questionsCorrect > 34) {
      let password = document.querySelector(".passwordContainer");
      let passwordSpan = document.createElement("span");
      password.innerText = "The Password: ";
      passwordSpan.innerText = `${p}${a}${ss}${w}${o}${r}${d}`;
      password.appendChild(passwordSpan);
      alert(
        "Congratulations, you have completed the exercise. Find your password at the bottom right side of the screen."
      );
    } else {
      alert(
        "You Have Completed the quiz, but you did not pass. Read the explanations on the questions your got wrong, hit Refresh on your browser, and try again!"
      );
    }
  }
}
