import React, { Component } from 'react';
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from 'react-bootstrap'; 

class Gift extends Component {
  constructor() {
    super();

    this.state = { person: '', present: '' };
  }

  render() {
    return (
      <div className='gift'>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              className='input-person'
              onChange={e => this.setState({ person: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Present</ControlLabel>
            <FormControl
              className='input-present'
              onChange={e => this.setState({ present: e.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          className='btn-remove'
          bsStyle='danger'
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          やめる
        </Button>
      </div>
    );
  }
}

export default Gift;