import Head from 'next/head'
import React from "react";
import { Grid, Card, Icon, Image } from "semantic-ui-react";
import "isomorphic-fetch";

const CardGrid = props =>
  <div>
    {/* Example with Grid and Card */}
    <Grid relaxed columns={4}>
      {props.posts.map((post, index) =>
        <Grid.Column key={index}>
          <Card>
            <Image src="https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg" />
            <Card.Content>
              <Card.Header>
                {post.title}
              </Card.Header>
              <Card.Meta>
                <span className="date">
                  Post id: {post.id}
                </span>
              </Card.Meta>
              <Card.Description>
                {post.body}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="linkify" />
                {post.url}
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
      )}
    </Grid>

  </div>;

CardGrid.getInitialProps = async ({ req }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await res.json();
  return { posts: json };
};

export default CardGrid;
