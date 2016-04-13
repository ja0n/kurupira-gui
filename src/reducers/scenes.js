
const ADD_SCENE = 'ADD_SCENE';
const DELETE_SCENE = 'DELETE_SCENE';
const SELECT_SCENE = 'SELECT_SCENE';
const LOAD_SCENES = 'LOAD_SCENES';

const initialState = {
  data: [
    require('json!../model.json'),
  ],
  selectedIndex: 0,
};


export default function scenes(state = initialState, action) {
  
  switch (action.type) {
    case ADD_SCENE:
      return { ...state, data: [...scenes, action.scene] };

    default:
      return state;
  }
  return state;
};
