import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <Form className='contact-form'>
        <h1 className='d-flex pt-4 justify-content-center'>Contact Us</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='p-3'></Form.Label>
            <Form.Control type="name" placeholder="Name" />
            <br />
            <br />
            <Form.Control type="email" placeholder="Name@example.com" />
            <br />
            <br />
            <Form.Control type="phone" placeholder="Phone" />
      </Form.Group>
      <Form.Group className="mb-3" placeholder="Comments">
            <br />
            <br />
        <Form.Control as="textarea" rows={3} placeholder='Comments'/>
            <br />
        <Button className="d-flex justify-content-center" variant="primary">Submit</Button>{' '}
        </Form.Group>
    </Form>
  );
}

export default Contact;