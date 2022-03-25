import { BookCard } from "../BookCard/BookCard";
import styled from "styled-components";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import {useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => fetchAllBooks(),[]) 


  function fetchAllBooks(){
    // axios.get("http://localhost:8080/books").then((res) =>setBooks([...res.data]))
    axios.get("http://localhost:2345/books/").then((res) =>setBooks([...res.data]))

  }
 
  function handleSort(nameBy,order){
    console.log(nameBy,order);
    if(nameBy==='title' && order===1) setBooks((prev)=> [...prev.sort((a,b)=>a.title>b.title?1:-1)])
    else if(nameBy==='title' && order===-1) setBooks((prev)=> [...prev.sort((a,b)=>a.title>b.title?-1:1)])
    else if(nameBy==='price' && order===1) setBooks((prev)=> [...prev.sort((a,b)=>a.price>b.price?1:-1)])
    else if(nameBy==='price' && order===-1) setBooks((prev)=> [...prev.sort((a,b)=>a.price>b.price?-1:1)])
  }

  const Main = styled.div` 
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:1rem;
    color:red;
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={handleSort}
      />

      <Main className="mainContainer">
        {books.map(el=><BookCard key={el._id} id={el._id} title={el.title} imageUrl={el.imageUrl} price={el.price}/>)}
      </Main>
    </div>
  );
};
