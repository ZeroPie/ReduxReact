export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index // ES5 would be index: index 
  };
}

export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author, // same as author: author
    comment // same as comment: comment
  };
}

export function removeComment(postId, index){
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId
  };
}
