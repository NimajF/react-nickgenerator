const messages = [
    "Such an original name",
    "Meeeeh",
    "Xbox's standard...",
    "Keep trying",
    "Not as cool as mine",
    "Original",
    "COOOL!",
    "Beastmode",
    "Another one?",
    "RD-D2",
    "Best nickname omg",
    "Try again",
    "Sweeet",
    "Masterpiece",
    "Just epic!",
    "Hmmm...",
  ];

export function randomMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}