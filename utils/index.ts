export const getInitials = (name: string) => {
  const initials = name
    ?.split(" ")
    ?.map((word) => word[0])
    ?.join("");
  return initials;
};

export const getRandomColor = (): string => {
  // Generate random values for red, green, and blue components
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert the values to hexadecimal and format the color string
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  // Combine the hexadecimal values to form a color string in the format "#RRGGBB"
  const color = `#${hexR}${hexG}${hexB}`;

  return color;
};

export * from "./notify";
