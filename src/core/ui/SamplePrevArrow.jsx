import { FaArrowCircleLeft } from "react-icons/fa";

export default function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} style={{ display: "flex", alignItems: "center" }}>
      <FaArrowCircleLeft size="20px"
        color="rgba(204, 156, 58, 1)"
        cursor="pointer" />
    </div>
  );
}