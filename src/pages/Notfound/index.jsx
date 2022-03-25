import { Link } from "react-router-dom";

const NotFound = () => {
    console.log("reload notfound");

    return (
        <div className="basic-container">
            <h2>Page Not Found</h2>
            <Link to="/" >
                <button className="btn-return">
                    Kembali ke Dashboard
                </button>
            </Link>
        </div>
    );
}

export default NotFound;