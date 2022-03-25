import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import { NotFound } from "../NotFound/NotFound";

export const Section = () => {
  const { section } = useParams();
  const [sectionBooks, setSectionBooks] = useState([]);

  // useEffect(
  //   () =>{
  //     axios
  //       .get("http://localhost:8080/books")
  //       .then((res) =>
  //         setSectionBooks([...res.data.filter((el) => el.section === section)])
  //       )},
  //   [section]
  // );

  useEffect(
    () =>{
      axios
        .get(`http://localhost:2345/books?section=${section}`)
        .then((res) =>
          setSectionBooks([...res.data])
        )},
    [section]
  );

  function handleSort(nameBy, order) {
    console.log(nameBy, order);
    if (nameBy === "title" && order === 1)
      setSectionBooks((prev) => [
        ...prev.sort((a, b) => (a.title > b.title ? 1 : -1)),
      ]);
    else if (nameBy === "title" && order === -1)
      setSectionBooks((prev) => [
        ...prev.sort((a, b) => (a.title > b.title ? -1 : 1)),
      ]);
    else if (nameBy === "price" && order === 1)
      setSectionBooks((prev) => [
        ...prev.sort((a, b) => (a.price > b.price ? 1 : -1)),
      ]);
    else if (nameBy === "price" && order === -1)
      setSectionBooks((prev) => [
        ...prev.sort((a, b) => (a.price > b.price ? -1 : 1)),
      ]);
  }

  const Main = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    color: red;
  `;
  if (sectionBooks.length === 0) return <NotFound />;
  return (
    <>
      <h2 style={{ textAlign: "center" }}>{section.toUpperCase()}</h2>
      <SortAndFilterButtons handleSort={handleSort} />

      <Main className="sectionContainer">
        {sectionBooks.map((el) => (
          <BookCard
            key={el._id}
            id={el._id}
            title={el.title}
            imageUrl={el.imageUrl}
            price={el.price}
          />
        ))}
      </Main>
    </>
  );
};
