import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./detailChar.css";

const DetailChar = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getOneChar = async () => {
    const response = await axios.get(
      `https://thronesapi.com/api/v2/Characters/${id}`
    );
    setData(response.data);
    console.log(response.data);
    try {
      setData(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOneChar();
  }, []);

  return (
    <div className="infoOneChar">
      <div>
        <h1>{data.title}</h1>
        <h2>Name: {data.fullName}</h2>
        <h2>Family: {data.family}</h2>
        <img className="imgOneChar" src={data.imageUrl} alt="" />
      </div>
      <button className="button">
        <a className="a-button" href="/">
          Назад
        </a>
      </button>
    </div>
  );
};

export default DetailChar;
