import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import { uploadPlugin } from '../assets/uploadAdapter';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Col,
  Row,
  Input,
  Container,
} from 'reactstrap';
import Post from '../Components&sections/Articles/Post';
export default function Test() {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Container className="container-article">
        <Row className="header align-items-center">
          <Col xs="auto" className="">
            <img
              src="https://social.webestica.com/assets/images/avatar/03.jpg"
              alt="phot"
            />
          </Col>
          <Col>
            <Input
              placeholder="Write your Artical"
              className="write-articel-input"
              onFocus={() => {
                document.activeElement.blur();
                setIsOpen(true);
              }}
            />
          </Col>
        </Row>
        {/* here posts */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/* end posts */}

        <Modal
          size="lg"
          scrollable
          isOpen={isOpen}
          toggle={function noRefCheck() {}}
        >
          <ModalHeader
            close={
              <button
                className="close"
                style={{
                  background: 'transparent',
                  fontSize: '30px',
                  border: 'none',
                }}
                onClick={() => setIsOpen(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            }
            toggle={function noRefCheck() {}}
          >
            Write your articles
          </ModalHeader>{' '}
          <FormGroup row className="mx-auto my-auto mt-2">
            <Col sm={12}>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="key words"
                type="email"
              />
            </Col>
          </FormGroup>
          <ModalBody>
            <Wrapper className="App">
              <CKEditor
                scrollable
                config={{
                  extraPlugins: [uploadPlugin],
                }}
                editor={ClassicEditor}
                onReady={(editor) => {}}
                onBlur={(event, editor) => {}}
                onFocus={(event, editor) => {}}
                onChange={(event, editor) => {
                  handleChange(editor.getData());
                }}
              />
            </Wrapper>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={function noRefCheck() {}}>
              Post
            </Button>{' '}
            <Button
              color="danger"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #eff2f6;
  padding: 20px;
  .header {
    img {
      width: 40px;
      height: 40px;
      padding: 1px;
      border-radius: 50%;
    }
  }
`;
