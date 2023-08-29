const humanizeTime = (minutes) => {
  const humanHours = Math.trunc(minutes / 60);
  const humanMinutes = minutes % 60;
  return `${humanHours > 0 ? ` ${humanHours}ч` : ""}${
    humanMinutes ? ` ${humanMinutes}м` : ""
  }`;
};

export default humanizeTime;
