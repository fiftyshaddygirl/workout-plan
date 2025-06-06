function displayWorkout(response) {
  let aiWorkoutPlan = document.querySelector("#workout-plan");
  aiWorkoutPlan.innerHTML = response.data.answer;
}

function workoutPlan(event) {
  event.preventDefault();
  let instruction = document.querySelector("#user-instruction");
  aiWorkoutPlan = `Generating ${instruction.value} workout plan. Please wait . . .`;

  new Typewriter("#workout-plan", {
    strings: aiWorkoutPlan,
    autoStart: true,
    cursor: null,
    delay: 25,
  });
  let apiKey = "940836f57095o1a5bt3c042d91bb08f9";
  let context =
    "You are a knowledgeable personal trainer that love to help other to build muscle in basic HTML and separate line by <br> and make sure to follow user instruction";
  let prompt = `user instruction : display workout for ${instruction.value} and repetition in precise with no explanation. always add title at the begining`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayWorkout);
  console.log("Calling API data");
}

let form = document.querySelector("#plan-form");
form.addEventListener("submit", workoutPlan);
