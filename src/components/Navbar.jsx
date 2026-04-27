import React from "react";
import { Link } from "react-router-dom";

const menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Smartphone",
    link: "/smartphone",
  },
  {
    name: "Laptop",
    link: "/laptop",
  },
  {
    name: "Audio",
    link: "/audio",
  },
  {
    name: "Gaming",
    link: "/gaming",
  },
];

export const Navbar = ({ toogle }) => {
  return (
    <nav>
      <div>
        <ul
          className={`${toogle ? "top-21" : "-translate-y-[150%] opacity-0"} flex gap-4 p-4 absolute flex-col md:flex-row md:static md:translate-y-0 md:opacity-100 bg-foreign w-full left-0 transtion duration-500 ease-in-out `}
        >
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="focus:text-accent active:text-accent"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
