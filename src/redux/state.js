import rerenderEntireTree from "../render";

let state = {
  contantPage: {
posts:[
   {
    id:1,
    message: "Hello,Chief!!",
    likesCount: 2,
    text: "like",
  },
   {
    id:2,
    message: "How are you?",
    likesCount: 4,
    text: "like"
  },
   {
    id:3,
    message: "WHAT???",
    likesCount: 3,
    text: "like",
  },
]
  },
  messagePage: {
dialogs:[
    { id: 1, name: "Max" },
    { id: 2, name: "John" },
    { id: 3, name: "Mary" },
    { id: 4, name: "Sara" },
    ],
messages:[
  { id: 1, message: "Hello" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Nice to meet you))" },
  { id: 4, message: "Great!!" },
    ]
    }  
}
export let addPost = (postMessage) => {
  let newPost = {
    id: 4,
    message: postMessage,
    likesCount: 0,
    text: "like",
  };
  state.contantPage.posts.push(newPost);
  rerenderEntireTree(state);
  }
export default state