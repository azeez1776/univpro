import React from 'react';
import './Body.css';
import { Container, Button } from 'react-bootstrap'




function Body() {



  return (
    <div className="body">
      <Container fluid="md">
        <Button style={{ position: 'absolute', top: '200px', left: '700px' }}>Fetch From API</Button>
      </Container>
    </div>
  );
}

export default Body;
