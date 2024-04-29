import { Event } from "../model/Event.js";

export const starterPack = [
  new Event(
    1,
    "I was born in a circus in Vietnam, I have a natural talent as a developer.",
    0
  ),
  new Event(2, "My birthday is February 5, 2024 I am an Aquarius.", 0),
  new Event(3, "Graduation Ceremony", 0),
  new Event(4, "My mother is NgoLinh, a female comedian", 0),
  new Event(5, "My father is SinhHung, is a comedy king of Ha Nam.", 0),
];

export const randomEvent = [
  new Event(
    6,
    "Your parents went on a trip leaving you home alone and you are hungry: \n- Drink water that falls on the floor to prevent hunger (-4 health, +1 Smarts, +1 Happiness)",
  28,
    { health: -40, smart: 1, happy: 1, look: +0 }  // Example effects on stats
  ),
  new Event(
    7,
    "Crying waiting for parents to come home (- 2 health, - 2 Smart, - 1 Happiness)",
  28,
    { health: -20, smart: -2, happy: -1, look: +0 }
  ),
];
