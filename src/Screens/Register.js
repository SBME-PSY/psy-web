import React from 'react';
import axios from 'axios';

function Register(props) {
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById('formId');
    const formData = new FormData(form);
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:3001/psy/users/logIn',
      data: {
        email: formData.get('email'),
        password: formData.get('password'),
        role: formData.get('role'),
      },
    })
      .then((res) => {
        const token = res.data.token;
        setCookie('jwt', token, 90);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form id="formId" onSubmit={handelSubmit}>
        <label>email</label>
        <input name="email" type="email" required /> <br />
        <label>password</label>
        <input name="password" type="password" required />
        <br />
        <label>user</label>
        <input type="radio" name="role" value="user" />
        <label>doctor</label>
        <input type="radio" name="role" value="doctor" />
        <br />
        <button type="submit" onClick={handelSubmit}>
          submit
        </button>
      </form>
    </>
  );
}

export default Register;
