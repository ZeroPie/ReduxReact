/**
  Action Creators

  These fire events which the reducer will handle
  We will later call these functions from inside our component

  Later these functions get bound to 'dispatch' fires the actual event
  Right now they just return an object

  It's a code convention to use all capitals and snake case for the event names
  We use const to store the name of the event so it is immutable

*/

export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index // ES5 would be index: index 
  };
}

/*
  Comments
*/

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
