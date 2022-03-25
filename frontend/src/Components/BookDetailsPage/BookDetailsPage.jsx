import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { NotFound } from "../NotFound/NotFound";

export const BookDetailsPage = () => {
  

  const { id } = useParams();
  const [book, setBook] = useState({
    title:"",
    imageUrl:"",
    description:"",
    reviews:[""],
    author:"",
    price:0,
    section:"0",
    isbnNumber:0,
    id:0
}); 

  useEffect(() => {  
      // axios.get(`http://localhost:8080/books/${id}`).then((res) => setBook(res.data)); 
      axios.get(`http://localhost:2345/books/${id}`).then((res) => setBook(res.data)); 

  }, [id]); 


  

  if(book.title.length===0)return <NotFound/>

  return (
    <>
      <div className="bookContainer" style={{textAlign: 'center'}}>
        <h2 className="title">{book.title}</h2>
        <img className="image" src={book.imageUrl} alt="#" />
        <div className="author">{book.author}</div>
        <div className="description">{book.description}</div>
        <div className="price">{book.price}</div>
        <div className="section">{book.section}</div>
        <div className="isbnNumber">{book.isbnNumber}</div>
        <ul className="reviews">
          {book.reviews.map((rev, i) => (
            <li key={i}>{rev}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
