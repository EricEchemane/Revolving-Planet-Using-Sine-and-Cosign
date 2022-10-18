// result.Y = (int)Math.Round(centerPoint.Y + distance * Math.Sin(angle));
const getY = (centerPoint, distance, angle) => {
    return Math.round(centerPoint.Y + distance * Math.sin(angle));
};
const y = getY(
    { X: 50, Y: 50 },
    50,
    45
);

console.log(y);