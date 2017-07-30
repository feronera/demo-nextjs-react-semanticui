import Head from "next/head";
import React from "react";
import ExampleButton from "../../components/Example/ExampleButton"

import mockData from "../../mocks/example/data.json";

const WithComponent = props =>
  <div>
    <ExampleButton></ExampleButton>
  </div>;

export default WithComponent;
