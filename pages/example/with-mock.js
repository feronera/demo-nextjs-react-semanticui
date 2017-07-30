import Head from "next/head";
import React from "react";

import mockData from "../../mocks/example/data.json";

const WithMock = props =>
  <div>
    {console.log(props.posts.title)}
    {props.posts.title}
  </div>;

WithMock.getInitialProps = async ({ req }) => {
  return { posts: mockData };
};

export default WithMock;
