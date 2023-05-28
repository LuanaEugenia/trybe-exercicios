import "../css/style.css";

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from '../utils/updateUI';

const usersSelect = document.querySelector('#users-select');
const relatedPosts = document.querySelector('#related-posts-section');

// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
const USERS_API = 'https://dummyjson.com/users';
fetch(USERS_API)
  .then(response => response.json())
  .then(data => fillUsersSelect(data.users));

usersSelect.addEventListener('change', (event) => {
  clearPageData();
  const userId = event.target.value;

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
  fetch(`https://dummyjson.com/posts/user/${userId}`)
    .then(response => response.json())
    .then(data => fillPosts(data.posts));
});
