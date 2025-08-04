import { FaArrowCircleLeft } from "react-icons/fa";

export default function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <FaArrowCircleLeft size="20px" color="#2563eb" cursor="pointer" />
    </div>
  );
}