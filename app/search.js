import './search.css';
let Search = () => {
    return (
        <div className="search_header">
            <input type="text" className="search_input" placeholder="Search" />
            <button>Go</button>
        </div>
    );
}

export default Search;
