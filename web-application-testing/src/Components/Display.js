import React from 'react';
import styled from 'styled-components';
import { Table } from 'semantic-ui-react';

const DisplayBoard = styled.div`
  width: 60%;
`;

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      batting: 0, // 0 for team 1, 1 for team2. Flippable boolean
      balls: 0,
      strikes: 0,
      hits: 0
    };
  }

  render() {
    return (
        <div>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Ball</Table.HeaderCell>
                <Table.HeaderCell>Strike</Table.HeaderCell>
                <Table.HeaderCell>Hit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{this.state.balls}</Table.Cell>
                <Table.Cell>{this.state.strikes}</Table.Cell>
                <Table.Cell>{this.state.hits}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
    );
  }


  addBall() {
    if(this.state.balls + 1 >= 4) this.setState({balls: 0, strikes: 0});
    else this.setState({balls: this.state.balls + 1});
  }

  addStrike() {
    if(this.state.strikes + 1 >= 3) this.setState({balls: 0, strikes: 0});
    else this.setState({strikes: this.state.strikes + 1});
  }

  addFoul() {
    if(this.state.strikes < 2) this.setState({strikes: this.state.strikes + 1});
  }

  addHit() {
    this.setState({hits: this.state.hits + 1, balls: 0, strikes: 0});
  }
}