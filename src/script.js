function displayWorkout(response) {
  console.log(response.data);
  let aiWorkoutPlan = document.querySelector("#workout-plan");
  aiWorkoutPlan.innerHTML = response.data.answer;
}

function workoutPlan(event) {
  event.preventDefault();
  let instruction = document.querySelector("#user-instruction");
  console.log(instruction.value);

  let apiKey = "940836f57095o1a5bt3c042d91bb08f9";
  let context =
    "You are a knowledgeable personal trainer that love to help other to get fit in basic HTML value and separate line by <br> and make sure to follow user instruction";
  let prompt = `user instruction : display workout for ${instruction.value} in precise with no explanation. always add title at the begining`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayWorkout);
  console.log("Calling API data");
}

let form = document.querySelector("#plan-form");
form.addEventListener("submit", workoutPlan);
