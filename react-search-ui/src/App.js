import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  PoweredBy,
  Hits,
  Highlight,
} from 'react-instantsearch-hooks-web';


//algolia credentials
const searchClient = algoliasearch(
  process.env.REACT_APP_ALOGLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY
);


function Hit ({ hit }) {
  return (
    <article>
      <h3>{hit.username}</h3>
      <img src={hit.avatar} alt={hit.username} />
      <p>
        <Highlight attribute="username" hit={hit} />
      </p>
    </article>
  );
}

//Handle no results



//Handle empty query


const App = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName='users' >

      <h3 style={{ margin:"auto",textAlign:"center", width:"40%",marginTop:"100px", marginBottom:"10px"}} >Algolia Firebase Search</h3>

      <SearchBox autoFocus placeholder='Search...' style={{marginTop:"1px",  margin:"auto", width:"40%"}} />

      <PoweredBy  style={{justifyContent:"right", margin:"auto", width:"40%"}} />


<Hits hitComponent={Hit} />

     
    </InstantSearch>
  );
}


export default App;
