import React from "react";
// import { Suspense } from "react";
import "../CSS/Service.css";

const getData = async () => {
  try {
    const response = await fetch('/mock.json');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}



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

getData();