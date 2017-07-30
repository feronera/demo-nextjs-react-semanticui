import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import "isomorphic-fetch";
import VoucherList from "../components/voucher/voucherList";
import mockData from "../mocks/voucher/data.json";

const Test = props => (
	<Card>
    <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>
        {props.title}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          jghfjkhgjkfdshgjkfhdjh
        </span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

Test.getInitialProps = async ({ req }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const json = await res.json();
	console.log(json)
  return json
};

export default Test;
