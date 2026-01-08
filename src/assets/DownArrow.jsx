const DownArrow = ({ size = 60, color = "#fff", strokeWidth = 6 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 8V44"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />
      <path
        d="M16 32L32 48L48 32"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

export default DownArrow;
