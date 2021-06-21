const prod = process.env.NODE_ENV === "production";

export default {
  url: prod ? 'https://genivaldo.herokuapp.com' : 'http://localhost:3001',
}
