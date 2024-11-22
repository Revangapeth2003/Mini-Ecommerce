import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searches = () => {
  const [keyword, setKeyword] = useState();

  const navigate = useNavigate();

  const searchHandler = () => {
    navigate("/search?keyword=" + keyword);
  };

  return (
    <div class="input-group">
      <input
        type="text"
        id="search_field"
        onChange={(e) => setKeyword(e.target.value)}
        onBlur={searchHandler}
        class="form-control"
        placeholder="Enter Product Name ..."
      />
      <div class="input-group-append">
        <button id="search_btn" class="btn" onClick={searchHandler}>
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Searches;
