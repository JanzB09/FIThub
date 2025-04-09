const workouts = [
    "Push-ups",
    "Squats",
    "Planks",
    "Jumping Jacks",
    "Burpees",
  ];
  
  window.onload = () => {
    const workoutList = document.getElementById("workout-list");
    workouts.forEach(workout => {
      const li = document.createElement("li");
      li.textContent = workout;
      workoutList.appendChild(li);
    });
  
    const form = document.getElementById("signup-form");
    const message = document.getElementById("message");
  
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      message.textContent = `Thank you for signing up, ${name}!`;
      form.reset();
    });
  };
  