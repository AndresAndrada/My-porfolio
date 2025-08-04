import { FaArrowAltCircleRight } from "react-icons/fa";

export default function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick}>
            <FaArrowAltCircleRight size={"20px"} color="#2563eb" cursor="pointer" />
        </div>
    );
}