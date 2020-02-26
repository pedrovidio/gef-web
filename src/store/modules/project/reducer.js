export default function project(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_PROJECT':
      return [action.product];
    default:
      return state;
  }
}
