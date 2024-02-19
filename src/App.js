
import './App.css';
import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import useAxios from './hooks/useAxios';
import SearchResults from './components/SearchResults';

// https://api.biblia.com/v1/bible/search/kjv1900?query=fruit%20of%20knowledge&key=c33ece0aed3f65615b0d5f31f1039662
//bibleAPI
// // input: Any biblical

// https://bible-api.com/Isiah 32:2
// bible-api:
// // Input: book/chapter
//  // output: verses

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [setUrl, data, loading, setLoading, error] = useAxios()
 
  function handleSubmit(e){
    e.preventDefault()
    console.log(searchInput)
    setUrl(`https://api.biblia.com/v1/bible/search/kjv1900?query=${searchInput}&key=c33ece0aed3f65615b0d5f31f1039662`)
    setLoading(true)
  }

  return (
    <div className="App">
      <h1>A Bible Search App!</h1>
      <SearchForm setSearchInput={setSearchInput}
      handleSubmit={handleSubmit}
      />
      {!loading && data && <SearchResults results={data.results} />} 
      {/* Search Form */}
      {/* 
       Search Results
       > passage
        */}


    </div>
  );
}

export default App;
