import React, { useEffect } from 'react';
import { useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Button, Container, Input } from 'reactstrap';
import sky from '../assets/Img/sky.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Article() {
  const userId = useSelector((state) => state.user._id);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getData = () => {
    axios({
      method: 'GET',
      url: '/psy/articles',
    })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

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
        navigate('/');
      })
      .catch((err) => {
        dispatch({ type: 'UPDATE_ERR', pyload: err.response.data.message });
      });
  };

  return (
    <div
      id="my-article"
      className="d-flex flex-1"
      style={{
        backgroundImage: `url(${sky})`,
      }}
    >
      <Container id="Article">
        <div id="headr" className="d-flex justify-content-center ">
          <Input
            type="text"
            name=""
            placeholder="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="editor">
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData();
              setText(data);
            }}
          />
        </div>

        <Button
          color="success"
          className="mt-3 w-25 rounded-pill "
          onClick={handleclick}
        >
          POST
        </Button>
      </Container>
    </div>
  );
}

export default Article;
