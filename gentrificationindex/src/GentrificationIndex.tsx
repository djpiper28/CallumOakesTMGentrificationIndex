import { use_state } from "react"
import { GoogleApiWrapper } from 'google-maps-react';

const default_places: str[] = [
  "Winchester",
  "Reading",
  "Nottingham",
  "Basingstoke",
  "Yorkshire",
  "Portsmouth",
  "Aberdeen",
  "Dundee",
  "Taunton",
  "Hull",
  "Glasgow"
];

function getRandomCity(): str {
  return default_places[Math.floor(Math.random() * default_places.length)];
}

function GentrificationIndex() {
    let city = getRandomCity();

    return <div className="flex flex-col space-y-2">
      <p className="text-xl">Enter a City:</p>
      <input type="text"
        placeholder={city}
        className="w-full text-xl bg-slate-100 text-black rounded-xl p-2"/>
    </div>
};

export default GentrificationIndex({
    apiKey: ""
  });
