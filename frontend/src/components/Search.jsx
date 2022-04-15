import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../features/post/postSlice";
import SearchSuggestion from "./SearchSuggestion";

const Search = () => {
  const [query, setQuery] = useState("");
  const [target, setTarget] = useState("");
  const [results, setResults] = useState([]);
  const posts = useSelector(selectPosts);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    if (query.length > 3) {
      const data = posts.filter(
        (item) =>
          item.body.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
          item.title.toLowerCase().indexOf(query.toLowerCase()) > -1
      );

      data.length > 0 && setResults(data);
    } else {
      setResults([]);
    }
  };

  const handleSelect = (e) => {
    e.keyCode === 13 && setQuery(e.target.innerText);
    setQuery(e.target.innerText);
  };

  return (
    <div>
      <h1>Search Component</h1>
      <div>
        <input
          style={{ width: "600px", padding: "10px 20px" }}
          type="text"
          value={query}
          onChange={handleSearch}
        />
      </div>
      <div>
        {results.length > 0 && (
          <SearchSuggestion results={results} handleSelect={handleSelect} />
        )}
      </div>
    </div>
  );
};

export default Search;

// /** Search product by name, description, barcode, ...

//     @params {string} query -
//     @params {object} filters - Targeting variantss, price ranges, tags, ...
//   */
//   .get( '/search', checkFormSchema( searchSchema ), async ( req, res ) => {

//       const
//       { query, filters } = req.query,
//       matcher = { $regex: String( query ).replace(/\s+/g,'|'), $options: 'i' },
//       $or = []

//       // User's personal information
//       $or.push({ 'name': matcher })
//       $or.push({ 'description': matcher })
//       $or.push({ 'SKU': matcher })
//       $or.push({ 'barcode': matcher })

//       // Deep search fields
//       $or.push({ 'categories': { $elemMatch: matcher } })

//       // TODO: Apply filters: variants, prices, ...

//       const results = await req.dp.product.find( { $or }, { desc: true, exclude: [ '_id' ] } )

//       res.json({ error: false, status: 'PRODUCT::SEARCH', results })
//   } )
