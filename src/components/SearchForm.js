function SearchForm({setSearchInput, handleSubmit}) {
    return ( 
    <form onSubmit={(e) => handleSubmit(e)}>
        <input 
        type="text" placeholder="Living water"
        onChange={(e) => setSearchInput(e.target.value)}
        
        />
        <button type="submit">Submit</button>
    
    </form> 
    );
}

export default SearchForm;