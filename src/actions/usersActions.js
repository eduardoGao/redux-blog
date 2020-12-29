export const getAllUsers = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  dispatch({
    type: 'get_users',
    payload: data
  })
}