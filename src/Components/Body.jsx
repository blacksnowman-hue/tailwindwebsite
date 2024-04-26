import React from "react";

export const Body = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          src="./assets/Blue-Shape.svg"
          alt="1st"
          className="-rotate-45 h-64"
        />
        <img
          src="./assets/Pink-Shape.svg"
          alt="2st"
          className="absolute -rotate-[30deg] h-64"
        />
        <img
          src="./assets/Purple-Shape.svg"
          alt="3st"
          className="absolute -rotate-[15deg] h-64"
        />
        <img
          src="./assets/Hero-Model.png"
          alt="hero"
          className="absolute h-64"
        />
      </div>

      <div>
        <h1 className="text-5xl font-bold font-playfair leading-tight">Host your website in less than 5 Minutes</h1>
        <p className="font-lato text-gray-400 ">
          With Hoster , get your website up and running in no less than 5
          minutes with most competitive pricing packages available online
        </p>
        <form action="" className="flex flex-col gap-4">
          <input className="rounded-md px-4 py-3 placeholder:text-gray-400"type="email" placeholder="Enter email address" />
          <button>Join Waitlist </button>
        </form>
      </div>
      <div>
        <img src="./assets/Checkmark.svg" alt="check" />
        <p>No spam , ever. Unsubscribe anytime</p>
      </div>
    </div>
  );
};