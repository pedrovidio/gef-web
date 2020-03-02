export default function buyProject(state = [], action) {
  console.log(action.product);
  switch (action.type) {
    case 'BUY_PROJECT':
      return [action.product];
    default:
      return state;
  }
}
