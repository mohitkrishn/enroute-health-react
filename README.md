/* eslint-disable no-unused-vars */
import navFont_smooth from "../assets/fonts/navlink-fonts.ttf";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ children, delay, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ delay, duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMobileMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    open: {
      width: "300px",
      height: "auto",
      borderRadius: "25px",
      backgroundColor: "rgb(24 24 27)",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    closed: {
      height: "50px",
      width: "235px",
      borderRadius: "50px",
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const links = [
    { name: "Optimize", path: "/optimize" },
    { name: "Services", path: "/services" },
    { name: "Testing", path: "/testing" },
    { name: "Our process", path: "/process" },
    { name: "Our membership", path: "/membership" },
  ];

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden md:flex fixed top-0 left-0 w-full z-40 px-12 py-6 items-center justify-between bg-zinc-900/60 backdrop-blur-xl">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="30"
            fill="none"
            viewBox="0 0 100 27"
          >
            <path
              fill="#fff"
              d="M45.9 0h2.126v4.064h4.37V0h2.125v10.003h-2.125V5.891h-4.37v4.112H45.9V0Zm10.448 0h7.231v1.73h-5.113v2.369h4.418v1.73h-4.418v2.444h5.21v1.73h-7.328V0ZM67.83 0h2.709l3.418 9.795v.208H71.81l-.778-2.362h-3.751l-.771 2.362h-2.098v-.208L67.83 0Zm.007 5.87h2.646l-1.27-3.876H69.1L67.837 5.87ZM75.125 0h2.14v8.176h4.939v1.827h-7.079V0Zm6.119 0h8.878v1.8h-3.369v8.203h-2.14V1.8h-3.369V0ZM91.38 0h2.125v4.064h4.37V0H100v10.003h-2.126V5.891h-4.37v4.112H91.38V0ZM23.026 9.617c-2.32 0-4.255.291-5.802.874-1.507.583-2.565 1.42-3.176 2.51h17.651c-.61-1.115-1.67-1.952-3.176-2.51-1.506-.583-3.339-.874-5.497-.874Zm.306 16.656c-4.764 0-8.897-.43-12.4-1.293-3.5-.861-6.209-2.091-8.122-3.688C.937 19.669 0 17.729 0 15.473c0-2.282.937-4.221 2.81-5.818 1.913-1.623 4.6-2.853 8.062-3.69 3.502-.861 7.614-1.292 12.337-1.292 7.085 0 12.623.988 16.613 2.966 4.032 1.952 6.047 4.893 6.047 8.823v.494H13.56c.448 1.445 1.548 2.51 3.298 3.195 1.751.659 3.93.989 6.536.989 1.873 0 3.522-.178 4.947-.533 1.425-.38 2.463-.925 3.115-1.635h13.803c-1.14 2.383-3.664 4.196-7.573 5.438-3.91 1.242-8.694 1.863-14.353 1.863Z"
            />
          </svg>
        </NavLink>

        {/* Links */}
        <div className="flex items-center gap-10">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-lg transition ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`
              }
              style={{ fontFamily: "NavSmooth" }}
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/waitlist"
            className="ml-6 px-6 py-2 rounded-full bg-white text-zinc-900 font-semibold hover:bg-zinc-200 transition"
            style={{ fontFamily: "NavSmooth" }}
          >
            Join waitlist
          </NavLink>
        </div>
      </div>

      {/* ================= MOBILE NAVBAR ================= */}
      <div className="fixed w-full z-40 px-6 py-5 flex justify-center md:hidden">
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          style={{ willChange: "transform, width, height, border-radius" }}
          className="px-4 py-2.5 bg-zinc-900/50 backdrop-blur-xl rounded-full flex flex-col"
        >
          {/* Header */}
          <div className="w-full flex items-center justify-between">
            <NavLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="27"
                fill="none"
                viewBox="0 0 100 27"
              >
                <path
                  fill="#fff"
                  d="M45.9 0h2.126v4.064h4.37V0h2.125v10.003h-2.125V5.891h-4.37v4.112H45.9V0Zm10.448 0h7.231v1.73h-5.113v2.369h4.418v1.73h-4.418v2.444h5.21v1.73h-7.328V0ZM67.83 0h2.709l3.418 9.795v.208H71.81l-.778-2.362h-3.751l-.771 2.362h-2.098v-.208L67.83 0Zm.007 5.87h2.646l-1.27-3.876H69.1L67.837 5.87ZM75.125 0h2.14v8.176h4.939v1.827h-7.079V0Zm6.119 0h8.878v1.8h-3.369v8.203h-2.14V1.8h-3.369V0ZM91.38 0h2.125v4.064h4.37V0H100v10.003h-2.126V5.891h-4.37v4.112H91.38V0ZM23.026 9.617c-2.32 0-4.255.291-5.802.874-1.507.583-2.565 1.42-3.176 2.51h17.651c-.61-1.115-1.67-1.952-3.176-2.51-1.506-.583-3.339-.874-5.497-.874Zm.306 16.656c-4.764 0-8.897-.43-12.4-1.293-3.5-.861-6.209-2.091-8.122-3.688C.937 19.669 0 17.729 0 15.473c0-2.282.937-4.221 2.81-5.818 1.913-1.623 4.6-2.853 8.062-3.69 3.502-.861 7.614-1.292 12.337-1.292 7.085 0 12.623.988 16.613 2.966 4.032 1.952 6.047 4.893 6.047 8.823v.494H13.56c.448 1.445 1.548 2.51 3.298 3.195 1.751.659 3.93.989 6.536.989 1.873 0 3.522-.178 4.947-.533 1.425-.38 2.463-.925 3.115-1.635h13.803c-1.14 2.383-3.664 4.196-7.573 5.438-3.91 1.242-8.694 1.863-14.353 1.863Z"
                />
              </svg>
            </NavLink>

            <div ref={menuRef} onClick={handleMobileMenu}>
              {isOpen ? (
                <X color="white" size={25} />
              ) : (
                <Menu color="white" size={22} />
              )}
            </div>
          </div>

          {/* Menu Links */}
          <AnimatePresence>
            {isOpen && (
              <motion.div className="pt-6 flex flex-col gap-3 items-center">
                {links.map((item, i) => (
                  <MenuItem key={item.name} delay={0.2 + i * 0.05}>
                    <NavLink
                      to={item.path}
                      className="text-[1.7rem] text-white"
                      style={{ fontFamily: "NavSmooth" }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </MenuItem>
                ))}

                <MenuItem
                  delay={0.55}
                  className="mt-6 w-full bg-white text-zinc-900 rounded-full py-3 text-center"
                >
                  <NavLink
                    to="/waitlist"
                    className="font-semibold"
                    style={{ fontFamily: "NavSmooth" }}
                    onClick={() => setIsOpen(false)}
                  >
                    Join waitlist
                  </NavLink>
                </MenuItem>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
