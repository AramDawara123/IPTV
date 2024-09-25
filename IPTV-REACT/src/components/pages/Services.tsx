import React from "react";


const getData = () => {
  fetch('data.json')
}

console.log(getData);


export const Services: React.FC = () => {
  return (
    <>
      <h1>Services</h1>
        <div className="intropage-service">
        <p>we have movies, shows and series that we provide you can search any movie, serie or show</p>
        </div>
      <br/>
      <div className="example">
        <p></p>
      </div>
      <br/>
    </>
  );
};