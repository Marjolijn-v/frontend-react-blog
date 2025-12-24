
import textarea from "../components/textarea/textarea.jsx";

function ReadTime() {
    const calculateReadTime= textarea.length / 100 * 0.3;

    return (
        Math.round(calculateReadTime)
    );
}

export default ReadTime