export const ADD_COMMENT = 'ADD_COMMENT';
export const CHANGE_NAME = "CHANGE_NAME";

export const addComment = (author, comment) => ({
    type: ADD_COMMENT,
    author,
    comment
});

export const changeName = (firstName, lastName) => ({
    type: CHANGE_NAME,
    firstName,
    lastName
});


