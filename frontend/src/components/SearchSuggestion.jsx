const SearchSuggestion = ({ results, handleSelect }) => {
  return (
    <div
      style={{
        background: "#f1f1f1",
        padding: "20px",
        width: "600px",
        margin: "0 auto",
        boxShadow: "20px 10px  20px rgba(0, 0, 0, 0.3)",
        textAlign: "left",
      }}
    >
      <h1>Search Results</h1>

      {results.length > 0 &&
        results.map((item) => (
          <h3 onClick={handleSelect} key={item?.id}>
            {item?.id}. {item?.title}
          </h3>
        ))}
    </div>
  );
};

export default SearchSuggestion;
