const BlogToogle = ({ activeOption, setActiveOption }) => {
  const handleOptionChange = (option) => {
    setActiveOption(option);
  };
  return (
    <div className="px-2 py-2 bg-transparent border border-[#2E2E2E] rounded-full w-fit">
      <button
        className={`toggle-button mr-2 font-schibsted ${
          activeOption === "monthly" ? "active" : ""
        }`}
        onClick={() => handleOptionChange("monthly")}
      >
        Monthly
      </button>
      <button
        className={`toggle-button font-schibsted ${
          activeOption === "yearly" ? "active" : ""
        }`}
        onClick={() => handleOptionChange("yearly")}
      >
        Yearly
      </button>
    </div>
  );
};

export default BlogToogle;
