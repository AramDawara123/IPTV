import React from "react";
import { Suspense } from "react";

const getData = () => {
  fetch('data.json')
}

console.log(getData);

// const searchbar = () => {
//   <div className="search" onSubmit={searchbar}>
//       <label>
//         Search movies:
//         <input value={query} onChange={e => setQuery(e.target.value)} />
//       </label>
//       <Suspense fallback={<h2>Loading...</h2>}>
//         <SearchResults query={query} />
//       </Suspense>
//   </div>
// }

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