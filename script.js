window.onload = function () {
  // Selecting the clock hands and other elements from the DOM
  const hourHand = document.querySelector(".hourHand");
  const minuteHand = document.querySelector(".minuteHand");
  const secondHand = document.querySelector(".secondHand");
  const time = document.querySelector(".date");
  const clock = document.querySelector(".clock");
  const audio = document.querySelector(".audio");

  // Function to update the clock hands and display the date
  function setDate() {
    const today = new Date();

    // Updating the second hand rotation based on the current second
    const second = today.getSeconds();
    const secondDeg = (second / 60) * 360 + 360;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    // Playing audio if needed
    audio.play();

    // Updating the minute hand rotation based on the current minute
    const minute = today.getMinutes();
    const minuteDeg = (minute / 60) * 360;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

    // Updating the hour hand rotation based on the current hour
    const hour = today.getHours();
    const hourDeg = (hour / 12) * 360;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    // Displaying the current date in the format "dd/mm/yyy"
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are zero-based so added one
    const year = today.getFullYear();

    time.innerHTML = `<span><strong>${(day < 10 ? "0" : "") + day}/</strong>${
      (month < 10 ? "0" : "") + month
    }/${year}</span>`;
  }

  // Calling the setDate function every second to keep the clock updated
  setInterval(setDate, 1000);
};
