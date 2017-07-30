import Head from 'next/head'
import React from "react";
import { Table, Header, Rating, Icon } from "semantic-ui-react";
import "isomorphic-fetch";

const SemanticUiTable = props =>
  <div>
    {/* {props.posts} */}
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>User Id</Table.HeaderCell>
          <Table.HeaderCell>Post id</Table.HeaderCell>
          <Table.HeaderCell>Efficacy</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Content</Table.HeaderCell>
          <Table.HeaderCell>Link</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.posts.map((post, index) =>
          <Table.Row key={index}>
            <Table.Cell>
              <Header as='h2' textAlign='center'>{post.userId}</Header>
            </Table.Cell>
            <Table.Cell singleLine>{post.id}</Table.Cell>
            <Table.Cell>
              <Rating icon='star' defaultRating={3} maxRating={3} />
            </Table.Cell>
            <Table.Cell textAlign='left'>
              {post.title}
            </Table.Cell>
            <Table.Cell>
              {post.body}
            </Table.Cell>
            <Table.Cell>
              <a href={post.url}>
                <Icon name="linkify" />
                {post.url}
              </a>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  </div>;

SemanticUiTable.getInitialProps = async ({ req }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await res.json();
  return { posts: json };
};

export default SemanticUiTable;
