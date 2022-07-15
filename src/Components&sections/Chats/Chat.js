import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSend } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function Chat() {
  const dispatch = useDispatch();
  const { id: roomId } = useParams();
  const { socket, user, messages } = useSelector((store) => store);
  const [message, setMessage] = useState('');
  const handelClick = () => {
    const messageData = {
      message,
      picture: user.picture,
      sentBy: user.name,
    };
    socket.emit('sentMessage', messageData, roomId);
    messageData['myMessage'] = true;
    dispatch({ type: 'UPDATE_MESSAGES', pyload: messageData });
    setMessage('');
  };
  useEffect(() => {
    return dispatch({ type: 'ClEARE_MESSAGES', pyload: '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
      <main>
        <section className="container">
          {messages.length === 0 ? (
            <div>No message yet</div>
          ) : (
            messages.map((chatMessage, index) => {
              return (
                <article
                  key={index}
                  className={chatMessage.myMessage ? '' : 'message1'}
                >
                  <img src={chatMessage.picture} alt="k" cl />
                  <div>{chatMessage.message}</div>
                </article>
              );
            })
          )}

          <div className="footer-send">
            <textarea
              placeholder="write a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handelClick}>
              <AiOutlineSend />
            </button>
          </div>
        </section>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  main {
    position: sticky;
    top: 0;
    height: 100vh;
    section {
      padding: 15px;
      color: black;
      width: 300px;
      z-index: 10;
      background: rgb(226 232 240);
      height: 100vh;
      left: 20px;
      overflow: auto;

      article {
        margin-top: 20px;
        text-align: left;
        display: flex;
        img {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          margin: 1px 5px;
        }
        div {
          border-radius: 5px;
          background-color: white;
          display: inline-block;
          padding: 10px;
        }
      }
      .message1 {
        text-align: right;

        justify-content: flex-end;
        div {
          background: #6495ad;
          color: white;
        }
        img {
          order: 2;
        }
      }
      .footer-send {
        position: fixed;
        bottom: 20px;
        display: grid;
        grid-template-columns: 1fr auto;
        button {
          background-color: transparent;
          color: #6495ad;
          border: none;
          width: 20px;
        }
        textarea {
          padding: 5px;
          border-radius: 10px;
          overflow: auto;
        }
      }
    }
  }
`;
export default Chat;
