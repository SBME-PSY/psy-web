import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Col,
  Input,
  Button,
} from 'reactstrap';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { uploadPlugin } from '../../assets/uploadAdapter';
import { useSelector, useDispatch } from 'react-redux';

function WriteArticles(props) {
  const { isOpen, setIsOpen } = props;
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const userId = useSelector((state) => state.user._id);
  const dispatch = useDispatch();

  const handleclick = () => {
    axios({
      method: 'POST',
      url: '/psy/articles',
      data: {
        title: title,
        body: text,
        author: userId,
      },
    })
      .then((res) => {
        setIsOpen(false);
      })
      .catch((err) => {
        dispatch({ type: 'UPDATE_ERR', pyload: err.response.data.message });
      });
  };
  return (
    <div>
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
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Col>
        </FormGroup>
        <ModalBody>
          <div className="App">
            <CKEditor
              scrollable
              config={{
                extraPlugins: [uploadPlugin],
              }}
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setText(data);
              }}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleclick}>
            Post
          </Button>
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
    </div>
  );
}

export default WriteArticles;
