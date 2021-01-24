import React, { useState } from "react";
import style from "./Header.module.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchBooks } from "../../redux/actions/headerAction";

/**
 * From header component we search for the books
 * @param {*} props
 */
function Header(props) {
  const [searchString, setSearchString] = useState("");

  const onSearchHandle = () => {
    props.searchBooks(searchString);
  };

  const onClearSearch = e => {
    setSearchString("");
  };

  return (
    <AppBar className={style.appBar}>
      <Toolbar>
        <Typography variant="h6">The Books</Typography>
        <div className={style.search}>
          <div className={style.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            className={style.searchInput}
            placeholder={`Search books`}
            inputProps={{ "aria-label": "search" }}
            value={searchString}
            onChange={e => setSearchString(e.target.value)}
          />
        </div>
        <Button onClick={onSearchHandle} style={{ color: "#ffffff" }}>
          Search
        </Button>
        <Button
          onClick={onClearSearch}
          style={{ width: "160px", color: "#ffffff" }}
        >
          Clear search
        </Button>
        <Link to="/cart">
          <Button onClick={onClearSearch} style={{ color: "#ffffff" }}>
            Cart
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = { searchBooks: PropTypes.func.isRequired };

export default connect(null, { searchBooks })(Header);
