import { handleResponse, handleError } from "./apiUtils";

const apiUrl = process.env.REACT_APP_API_URL + "/authors/";

export function getAuthors() {
  return fetch(apiUrl)
    .then(handleResponse)
    .catch(handleError);
}

interface Author {
  id: number;
  name: string;
}

export function saveAuthor(author: Author) {
  return fetch(apiUrl + (author.id || ""), {
    method: author.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(author)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteAuthor(authorId: number) {
  return fetch(apiUrl + authorId, { 
    method: "DELETE" 
  })
    .then(handleResponse)
    .catch(handleError);
}

