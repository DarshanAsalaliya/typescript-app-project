export const ApiUrl = Object.freeze({
  mainUrl: 'https://reqres.in/api/',
  header: {
    'Content-Type': 'application/json',
  },
});

export const EndPoint = {
  login: '/login',
  users: '/users?page=',
  register: '/register',
  allUser: '/users?page=1&per_page=12',
};

export const SuccessResponse = [200, 201, 204];
