import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoData } from "../../Data/logoData";
function LogOut() {
    const { logout, logoutImg } = logoData;
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/singup");
        }
    }, []);
    const logOut = () => {
        axios
            .post(
                "https://web-production-3ca4c.up.railway.app/api/logout",
                {},
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                localStorage.removeItem("token");
                navigate("/singup");
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="d-flex align-items-center justify-content-center bg-Linen">
            <button
                className="bg-Linen  border-0 color-dark  fw-medium fs-6 line-height"
                onClick={logOut}
            >
                {logout}
                <img className="ps-4" src={logoutImg} alt="" />
            </button>
        </div>
    );
}
export default LogOut;
