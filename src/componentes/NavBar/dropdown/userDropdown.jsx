import UserCircle from "../../../assets/svg/user-circle.svg";
// import logoutIcon from "@/assets/icons/logout.svg";
import NavItem from "../navigation/navItem";
// import type { UserState } from "@/types/index";
// import { useBoundStore } from "@/store/index";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
// import { getLocalStorage } from "@/modules/auth/utils/getLocalStorage";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function UserDropdown() {
  // const navigate = useNavigae()
  // const { Authenticated, User } = useBoundStore((state: UserState) => state);
  // const localStorage = getLocalStorage("Parse/023/currentUser");
  // const { userlogout } = useLogout();
  const authenticated = true;
  return (
    <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button">
        <img src={UserCircle} alt="icon search" className="" />
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content mt-8 z-[100] p-2 shadow bg-primary rounded-box w-52"
      >
        {authenticated ? (
          <>
            <li>
              <NavItem route="/profile">
                <div className="flex gap-3 ">
                  <h3 className=" text-[16px] font-medium text-white">
                    Perfil de usuario
                  </h3>
                  <img
                    src={UserCircle}
                    alt="icon search"
                    className="w-6 h-6 "
                  />
                </div>
              </NavItem>
            </li>
            <li>
              <button type="button">
                <h3 className=" text-[16px] font-medium text-white mr-6">
                  Cerrar Sesion
                </h3>
                {/* <img
                  src={logoutIcon}
                  alt="Cerrar Sesion icon"
                  className="w-[25px] text-white"
                /> */}
                <ArrowLeftStartOnRectangleIcon className="size-6 text-white cursor-pointer" />
              </button>
            </li>{" "}
          </>
        ) : (
          <li>
            <Link to={"/sign-in"}>
              <button type="button">
                <h3 className=" text-[16px] font-medium text-white mr-6">
                  Iniciar Sesion
                </h3>
                <ArrowLeftEndOnRectangleIcon className="size-6 text-white cursor-pointer" />
              </button>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
