import Head from 'next/head'
import React from "react";
import { Image } from "semantic-ui-react";
import "isomorphic-fetch";

const Console = props =>
  <div>
    <div>Static image file from directory static/images</div>
    <img src='/static/images/sample-image.jpeg' />

    <div>Static image with SematicUI-React Image component</div>
    <Image src='/static/images/sample-image.jpeg' size='medium' shape='circular' bordered />

    <div>Static CSS from directory static/css and fontface from static/font</div>
    <link rel='stylesheet' href='/static/css/test-css.css' />
    <div className="testcss">Here is static CSS and Static Font Face!!!</div>

  </div>;

Console.getInitialProps = async ({ req }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await res.json();
  return { posts: json };
};

export default Console;
