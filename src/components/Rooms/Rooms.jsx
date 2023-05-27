import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Loader from "../Shared/loader";
import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import Heading from "../Heading/Heading";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    setLoading(true);
    fetch("./rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          setRooms(data);
        }

        setLoading(false);
      })
      .catch((err) => console.log(er));
  }, [category]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
    {
        rooms && rooms.length >0 ? <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 gap-8">
        {rooms.map((room, i) => (
          <Card key={i} room={room} />
        ))}
      </div>: <div className="pt-12">
        <Heading title={"No rooms available in this category"} subtitle={"Please select other category"} center={true}/>
      </div>
    }
    </>
  );
};

export default Rooms;
