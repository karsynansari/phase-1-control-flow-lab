// function scuberGreetingForFeet(someValue) {
//   if (someValue <= 400) {
//     return "This one is on me!";
//   } else if (someValue >= 2000 && someValue < 2500) {
//     return "I will gladly take your thirty bucks.";
//   } else if (someValue >= 2500) {
//     return "No can do.";
//   }
// }

// function ternaryCheckCity(city) {
//   return city == "NYC" ? "Ok, sounds good." : "No go.";
// }

// function switchOnCharmFromTip(tip) {
//   switch (tip) {
//     case "generous":
//       return "Thank you so much.";
//     case "not as generous":
//       return "Thank you.";
//     default:
//       return "Bye.";
//   }
// }

function scuberGreetingForFeet(rideLength) {
  if (rideLength <= 400) {
    return "This one is on me!";
  } else if (rideLength > 2000 && rideLength < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (rideLength > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(destination) {
  return destination === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
