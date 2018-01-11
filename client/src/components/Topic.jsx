import React from 'react';
import {Card, Button, Icon} from 'semantic-ui-react';
import http from 'axios';

class Topic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      upvotes: this.props.topic.upvotes,
      upvoteState: false
    }
  } 

  handleClick() {
    var newUpvoteState = false
    if (!this.state.upvoteState) {
      newUpvoteState = true
    }
    this.setState({
      upvoteState: newUpvoteState
    })
    this.props.upVote(this.props.topic._id)
  }

  renderTopicDetailedView () {
    //react router something?
    console.log('clicked Topic! Goes to topicView page');
  }  

  render() {
    var upvoteStateColor = 'blue';
     if (!this.state.upvoteState) {
      upvoteStateColor = 'grey';
     }

    return (
      <Card fluid>
        <Card.Content header={this.props.topic.headline} />
        <Card.Content description={this.props.topic.description} />
        <Card.Content extra>
          <Button
            color={upvoteStateColor} 
            content="UpVote"
            icon='heart'
            label={{ as: 'a', basic: true, content: this.state.upvotes || 0}}
            labelPosition='right'
            onClick={ this.handleClick.bind(this)}
          />
          <Icon name='comments' />
          {this.props.topic.comments || 0} comments
        </Card.Content>
      </Card>
    );
  }  
}

export default Topic;