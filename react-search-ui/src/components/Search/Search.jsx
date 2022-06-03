// import React from 'react';
// import algoliasearch from 'algoliasearch/lite';
// import './Search.css';
// import {
//   InstantSearch,
//   SearchBox,
//   PoweredBy,
//   Hits,
//   connectHighlight,
// } from 'react-instantsearch-hooks-web';

// const searchClient = algoliasearch(
//   process.env.REACT_APP_ALOGLIA_APP_ID,
//   process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY
// );

// function Search() {
//   return (
//     <InstantSearch searchClient={searchClient} indexName='users'>
//       <SearchBox autoFocus placeholder='type..' />
//       <PoweredBy />
//       <Hits hitComponent={Hit} />
//     </InstantSearch>
//   );
// }

// const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
//   const parsedHit = highlight({
//     highlightProperty: '_highlightResult',
//     attribute,
//     hit,
//   });

//   return (
//     <div>
//       <h3>{hit.username}</h3>
//       <img src={hit.avatar} alt={hit.username} />
//       {parsedHit.map((part) =>
//         part.isHighlighted ? <mark>{part.value}</mark> : part.value
//       )}
//     </div>
//   );
// });

// const Hit = ({ hit }) => (
//   <p>
//     <CustomHighlight attribute='bio' hit={hit} />
//   </p>
// );

// export default Search;
