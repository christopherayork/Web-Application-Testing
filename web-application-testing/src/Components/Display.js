import React from 'react';
import styled from 'styled-components';
import { Table } from 'semantic-ui-react';

const DisplayBoard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <DisplayBoard>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Ball</Table.HeaderCell>
                <Table.HeaderCell>Strike</Table.HeaderCell>
                <Table.HeaderCell>Hits</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell id='balls'>{this.props.balls}</Table.Cell>
                <Table.Cell id='strikes'>{this.props.strikes}</Table.Cell>
                <Table.Cell id='hits'>{this.props.hits}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </DisplayBoard>
    );
  }
}