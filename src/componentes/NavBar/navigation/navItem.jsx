import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavItem({
  children,
  route,
  selectColor = "text-complementary",
  unSelectColor = "text-white",
}) {
  const location = useLocation();
  return (
    <div>
      <Link
        to={route}
        className={`${location.pathname === route ? "underline" : "none"} ${location.pathname === route ? selectColor : unSelectColor
          } `}
      >
        {children}
      </Link>
    </div>
  );
}
