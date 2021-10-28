// import React from 'react';
// import { BlogSearchStyled } from './BlogSearchStyled';
// import ChipInput from 'material-ui-chip-input';
// import PrimaryButton from '../../Button/PrimaryButton';
// import { useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';
// // import { getPostsBySearch } from '../../../actions/post';
// import { useHistory, useLocation } from 'react-router';
// // HOOK BELOW
// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }
// const BlogSearch = () => {
//   // Maning the search input
//   const [search, setSearch] = useState('');
//   const query = useQuery();
//   const dispatch = useDispatch();
//   const searchQuery = query.get('searchQuery');
//   const history = useHistory();
//   // The search post function is to search for posts on
//   const searchPost = () => {
//     // if there is a search term or there are tags
//     if (search.trim()) {
//       // dispatch an action
//       // /For the tags below
//       // [europe, usa] => "europe,usa"
//       dispatch(getPostsBySearch({ search }));
//       history.push(`/posts/search?searchQuery=${search || 'none '}}`);
//     } else {
//       history.push('/');
//     }
//   };
//   const handleKeyPress = (e) => {
//     if (e.keyCode === 13) {
//       searchPost();
//     }
//   };
//   return (
//     <BlogSearchStyled>
//       {/* <ChipInput
//         style={{ margin: "10px 0" }}
//         // value={tags}
//         // onAdd={handleAdd}
//         // onDelete={handleDelete}
//         label="Search Tags"
//         variant="outlined"
//       /> */}
//       <div className="blog-search-container-fields-content-input">
//         <label htmlFor="tags">Search Posts</label>
//         <input
//           name="search"
//           type="text"
//           onKeyPress={handleKeyPress}
//           placeholder="Search posts via title"
//           // value={form.fullName}
//           //   required
//         />
//       </div>
//       <PrimaryButton onClick={searchPost} name={'Search'} />
//     </BlogSearchStyled>
//   );
// };

// export default BlogSearch;
