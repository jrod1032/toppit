import React from 'react';
import {Card, Button, Icon} from 'semantic-ui-react';

class Topic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      upvotes: this.props.topic.upvotes,
      upvoteState: false
    }
  } 

  increaseUpvoteCount (topic) {
    //if neutral state
    var plusOrMinusCount = 0
    if (!this.state.upVoteState) {
      plusOrMinusCount = 1;
    } else {
      plusOrMinusCount = -1;
     }
    // http PUT request to server to increase/decrease upvote count
    //use axios
    this.setState({
      upvotes: topic.upvotes++
    })
  }

  renderTopicDetailedView () {
    //react router something?
    console.log('clicked Topic! Goes to topicView page');
  }  

  render() {
    return (
      <Card fluid>
        <Card.Content header={this.props.topic.description} />
        <Card.Content description={this.props.topic.description} />
        <Card.Content extra>
          <Button
            content='UpVote'
            icon='heart'
            label={{ as: 'a', basic: true, content: this.props.topic.votes || 0}}
            labelPosition='right'
          />
          <Icon name='comments' />
          {this.props.topic.comments || 0} comments
        </Card.Content>
      </Card>
    );
  }  
}

export default Topic;