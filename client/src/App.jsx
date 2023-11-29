import { 
  ApolloClient, 
  ApolloProvider, 
  InMemoryCache,
  createHttpLink 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

import auth from './utils/auth';



const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



// console.log(auth)

function App() {

  //   const [user, setUser] = useState(null);
  
  //   useQuery(() => {
  //     // Fetch user data from the API
  //     axios.get('/api/user').then((response) => {
  //       setUser(response.data);
  //     });
  //   }, []);
  window.user = "HI"
  window.profile = "HI again"

  let path = window.location.pathname;
  
  useEffect(() => {
    if (
      auth.loggedIn() === false &&
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/signup" &&
      window.location.pathname !== "/"
    ) {
      window.location.replace("/login");
    }
  }, []);


  return (
    <ApolloProvider client={client}>

        <Outlet  />
  
    </ApolloProvider>
  );
}

export default App;
