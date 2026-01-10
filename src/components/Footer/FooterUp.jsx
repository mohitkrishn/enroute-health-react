import React from "react";
import enroute from "/src/assets/enroute.svg";
import { MoveRight } from "lucide-react";


const FooterUp = () => {
  return (
    <section className="w-full h-[59%] flex  justify-between text-white" >
      <div className="w-1/2 flex flex-col justify-center items-start uppercase font-bold gap-5  ">
        <div >
          <h1 className="text-2xl">© 2020—2025</h1>
          <h1 className="text-3xl tracking-tighter leading-[1]">enroute labs.</h1>
        </div>
        <ul className=" flex flex-col tracking-tight text-[1.1rem]">
          <li className="flex gap-2">Instagram <MoveRight height={20}/></li>
          <li className="flex gap-2">Facebook<MoveRight height={20}/></li>
          <li className="flex gap-2">Spotify<MoveRight height={20}/></li>
        </ul>
      </div>

      <div className=" w-1/2 flex flex-col justify-center items-end gap-15">
        <div>
        <img src={enroute} alt="" />
        </div>
        <ul className="flex gap-5 text-[.9rem] font-medium uppercase">
            <li>terms & condictions</li>
            <li>cookies policy</li>
            <li>privacy policy</li>
        </ul>
      </div>
    </section>
  );
};

export default FooterUp;
