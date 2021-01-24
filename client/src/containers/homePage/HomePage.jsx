import React from "react";
import style from "./HomePage.module.css";
import Header from "../../components/Header/Header";
import BookList from "../../components/BookList/BookList";

/**
 * Home page
 * Displays the Book list from book list component
 */
function HomePage() {
  return (
    <div className={style.wrpr}>
      <Header />
      <BookList />
    </div>
  );
}

export default HomePage;
