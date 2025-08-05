import { FaArrowAltCircleRight } from "react-icons/fa";

export default function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick}>
            <FaArrowAltCircleRight size={"20px"} color="rgba(204, 156, 58, 1)" cursor="pointer" />
        </div>
    );
}