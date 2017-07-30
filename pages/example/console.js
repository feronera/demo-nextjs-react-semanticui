import Head from 'next/head'
import React from "react";
import { Grid, Card, Icon, Image } from "semantic-ui-react";
import "isomorphic-fetch";

const Console = props =>
  <div>
    {/* Example for Console.log here */}
    {console.log(props)}
  </div>;

Console.getInitialProps = async ({ req }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await res.json();
  return { posts: json };
};

export default Console;
