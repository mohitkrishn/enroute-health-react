const LeftArrow = ({ size = 60, color = "#fff", strokeWidth = 6 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Horizontal line */}
      <path
        d="M90 32H20"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />

      {/* Arrow head */}
      <path
        d="M32 16L16 32L32 48"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

export default LeftArrow;
