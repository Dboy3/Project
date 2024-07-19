import React, { useState, useCallback, useEffect, useRef } from "react";

// useRef -> kisi bhi cheese ka reference le ne ke liye kaam aata hai
// useEffect -> jab system chalega toh andar ki cheese chalegi
// useCallback() -> optimisation , cache

function PasswordGen() {
  const [len, setLen] = useState(8);
  const [nums, setNums] = useState(false);
  const [chars, setChars] = useState(false);
  const [pass, setPass] = useState("");
  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    // need of reference
    passwordRef.current?.select();
    // copy to window
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  //   setPass is also a dependices here
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (nums) str += "0123456789";
    if (chars) str += "!@#$%^&*(){}[]~`+_-/|";

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPass(pass);
  }, [len, nums, chars, setPass]);

  useEffect(() => {
    passGenerator();
  }, [len, chars, nums, passGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-md bg-gray-600 m-10 p-2 text-black">
      <h1 className="text-center font-bold">Password Gen</h1>
      <div className="flex shadow-md rounded-lg gap-1 p-1 m-2 bg-gray-400">
        <input
          type="text"
          value={pass}
          className="outline-none w-full rounded-md p-1 m-1"
          placeholder="password"
          readOnly
          ref={passwordRef}
        ></input>

        <button
          onClick={copyPassword}
          className="bg-blue-500 rounded-md p-1 m-1 hover:text-white hover:bg-blue-700"
        >
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-1">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            id="passShow"
            min={6}
            max={20}
            value={len}
            className="cursor-pointer"
            onChange={(e) => {
              setLen(e.target.value);
            }}
          ></input>
          <label htmlFor="passShow" className="font-semibold p-1 text-blue-400">
            Length : {len}
          </label>
        </div>

        <div className="mx-2 my-1">
          <input
            className="p-1 m-1 "
            type="checkbox"
            defaultChecked={nums}
            id="numInput"
            onChange={() => {
              setNums(!nums);
            }}
          />
          <label className="font-semibold p-1 text-blue-400" htmlFor="numInput">
            Numbers
          </label>
        </div>

        <div className="mx-2 my-1">
          <input
            className="p-1 m-1 "
            type="checkbox"
            defaultChecked={chars}
            id="charInput"
            onChange={() => {
              setChars(!chars);
            }}
          />
          <label
            className="font-semibold p-1 text-blue-400"
            htmlFor="charInput"
          >
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGen;
