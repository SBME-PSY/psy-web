import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, Label, Input, Form, Button, Row, Col } from 'reactstrap';
import { FaPaperPlane, FaPlus, FaTrash } from 'react-icons/fa';

function AddTest() {
  const [scores, setScores] = useState([
    {
      min: '',
      max: '',
      result: { en: '', ar: '' },
      description: { en: '', ar: '' },
    },
  ]);
  const [inputFields, setInputFields] = useState({
    description: { ar: '', en: '' },
    title: { ar: '', en: '' },
    category: '',
    rules: { ar: '', en: '' },
    questions: [
      {
        body: { ar: '', en: '' },
        answers: [
          {
            body: { ar: '', en: '' },
            weight: '',
          },
        ],
      },
    ],
  });

  const addQuestion = () => {
    const values = { ...inputFields };
    values.questions.push({
      body: { ar: '', en: '' },
      answers: [
        {
          body: { ar: '', en: '' },
          weight: '',
        },
      ],
    });
    setInputFields(values);
  };

  const addAnswer = (qIndex) => {
    const values = { ...inputFields };
    values.questions[qIndex].answers.push({
      body: { ar: '', en: '' },
      weight: '',
    });
    setInputFields(values);
  };

  const removeQuestion = (qindex) => {
    const values = { ...inputFields };
    if (values.questions.length === 1) {
      return;
    } else {
      values.questions.splice(qindex, 1);
      setInputFields(values);
    }
  };

  const removeAnswer = (qIndex, aIndex) => {
    const values = { ...inputFields };
    if (values.questions[qIndex].answers.length === 1) {
      return;
    } else {
      values.questions[qIndex].answers.splice(aIndex, 1);
      setInputFields(values);
    }
  };

  const handleChangeQuestion = (qIndex, e) => {
    const values = { ...inputFields };
    switch (e.target.name) {
      case 'body-ar':
        values.questions[qIndex].body.ar = e.target.value;
        break;
      case 'body-en':
        values.questions[qIndex].body.en = e.target.value;
        break;
      default:
        values.questions[qIndex][e.target.name] = e.target.value;
    }
    setInputFields(values);
  };

  const handleAnswerChange = (qIndex, aIndex, e) => {
    const values = { ...inputFields };
    switch (e.target.name) {
      case 'answer-ar':
        values.questions[qIndex].answers[aIndex].body.ar = e.target.value;
        break;
      case 'answer-en':
        values.questions[qIndex].answers[aIndex].body.en = e.target.value;
        break;
      default:
        values.questions[qIndex].answers[aIndex][e.target.name] =
          e.target.value;
    }
    setInputFields(values);
  };

  const handleInputFieldChange = (e) => {
    const values = { ...inputFields };
    switch (e.target.name) {
      case 'title-ar':
        values.title.ar = e.target.value;
        break;
      case 'title-en':
        values.title.en = e.target.value;
        break;
      case 'description-ar':
        values.description.ar = e.target.value;
        break;
      case 'description-en':
        values.description.en = e.target.value;
        break;
      case 'rules-ar':
        values.rules.ar = e.target.value;
        break;
      case 'rules-en':
        values.rules.en = e.target.value;
        break;
      default:
        values[e.target.name] = e.target.value;
    }
    setInputFields(values);
  };

  const addScore = () => {
    setScores([
      ...scores,
      {
        min: '',
        max: '',
        result: { en: '', ar: '' },
        description: { en: '', ar: '' },
      },
    ]);
  };

  const removeScore = (sIndex) => {
    const values = [...scores];
    if (values.length === 1) {
      return;
    } else {
      values.splice(sIndex, 1);
    }
  };

  const handleScoreChange = (sIndex, e) => {
    const values = [...scores];
    switch (e.target.name) {
      case 'result-ar':
        values[sIndex].result.ar = e.target.value;
        break;
      case 'result-en':
        values[sIndex].result.en = e.target.value;
        break;
      case 'description-ar':
        values[sIndex].description.ar = e.target.value;
        break;
      case 'description-en':
        values[sIndex].description.en = e.target.value;
        break;
      default:
        values[sIndex][e.target.name] = e.target.value;
    }
    setScores(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let test = { ...inputFields };
    test.scores = scores;
    console.log(test);
  };

  return (
    <Form id="testForm" className="px-4 my-3">
      <h3>Fill the form to add your test</h3>
      <>
        <FormGroup>
          <Row className="my-2">
            <Col sm={12} md={1}>
              <Label className="mt-2">Title in Arabic</Label>
            </Col>
            <Col sm={12} md={11}>
              <Input
                required
                onChange={(e) => {
                  handleInputFieldChange(e);
                }}
                placeholder="title-ar"
                type="text"
                name="title-ar"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={1}>
              <Label className="mt-2">Title in English</Label>
            </Col>
            <Col sm={12} md={11}>
              <Input
                required
                onChange={(e) => {
                  handleInputFieldChange(e);
                }}
                placeholder="title-en"
                type="text"
                name="title-en"
              />
            </Col>
          </Row>
          <Row className="my-2">
            <Col sm={12} md={1}>
              <Label className="mt-2">Description in Arabic</Label>
            </Col>
            <Col sm={12} md={11}>
              <Input
                required
                onChange={(e) => {
                  handleInputFieldChange(e);
                }}
                placeholder="description-ar"
                type="text"
                name="description-ar"
              />
            </Col>
          </Row>
          <Row className="my-2">
            <Col sm={12} md={1}>
              <Label className="mt-2">Description in English</Label>
            </Col>
            <Col sm={12} md={11}>
              <Input
                required
                onChange={(e) => {
                  handleInputFieldChange(e);
                }}
                placeholder="description-en"
                type="text"
                name="description-en"
              />
            </Col>
          </Row>
          <Row className="my-2">
            <Col sm={12} md={1}>
              <Label className="mt-2">Category</Label>
            </Col>
            <Col sm={12} md={11}>
              <Input
                required
                onChange={(e) => {
                  handleInputFieldChange(e);
                }}
                placeholder="category"
                type="text"
                name="category"
              />
            </Col>
          </Row>
          <Row className="my-2">
            <Col sm={12} md={1}>
              <Label className="mt-2">Rules in Arabic</Label>
            </Col>
            <Col sm={12} md={11}>
              <Input
                required
                onChange={(e) => {
                  handleInputFieldChange(e);
                }}
                type="textarea"
                name="rules-ar"
                placeholder="rules-ar"
              />
            </Col>
          </Row>
          <Row className="my-2">
            <Col sm={12} md={1}>
              <Label className="mt-2">Rules in English</Label>
            </Col>
            <Col sm={12} md={11}>
              <Input
                required
                onChange={(e) => {
                  handleInputFieldChange(e);
                }}
                type="textarea"
                name="rules-en"
                placeholder="rules-en"
              />
            </Col>
          </Row>
          {inputFields.questions.map((question, i) => (
            <div
              key={i}
              className="border p-4 rounded border-2 border-dark my-3"
            >
              <Row className="my-2">
                <Col sm={12} md={1}>
                  <Label className="mt-2">Body in Arabic</Label>
                </Col>
                <Col sm={12} md={11}>
                  <Input
                    required
                    onChange={(e) => {
                      handleChangeQuestion(i, e);
                    }}
                    placeholder="body-ar"
                    type="text"
                    name="body-ar"
                  />
                </Col>
              </Row>
              <Row className="my-2">
                <Col sm={12} md={1}>
                  <Label className="mt-2">Body in English</Label>
                </Col>
                <Col sm={12} md={11}>
                  <Input
                    required
                    onChange={(e) => {
                      handleChangeQuestion(i, e);
                    }}
                    placeholder="body-en"
                    type="text"
                    name="body-en"
                  />
                </Col>
              </Row>
              <h5>Answer(s) for question no {i + 1}</h5>
              {question.answers.map((answer, j) => (
                <>
                  <div
                    key={j}
                    className="border p-4 rounded border-2 border-dark my-3"
                  >
                    <Row className="my-2">
                      <Col sm={12} md={1}>
                        <Label className="mt-2">Answer in Arabic</Label>
                      </Col>
                      <Col sm={12} md={11}>
                        <Input
                          required
                          onChange={(e) => {
                            handleAnswerChange(i, j, e);
                          }}
                          placeholder="answer-ar"
                          type="text"
                          name="answer-ar"
                        />
                      </Col>
                    </Row>
                    <Row className="my-2">
                      <Col sm={12} md={1}>
                        <Label className="mt-2">Answer in English</Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <Input
                          required
                          onChange={(e) => {
                            handleAnswerChange(i, j, e);
                          }}
                          placeholder="answer-en"
                          type="text"
                          name="answer-en"
                        />
                      </Col>
                      <Col sm={12} md={5}>
                        <Input
                          required
                          onChange={(e) => {
                            handleAnswerChange(i, j, e);
                          }}
                          placeholder="Answer Weight"
                          type="number"
                          name="weight"
                        />
                      </Col>
                    </Row>
                    <Button
                      className="mt-3 mx-2 btn-success"
                      onClick={() => {
                        addAnswer(i);
                      }}
                    >
                      Add Answer <FaPlus />
                    </Button>
                    <Button
                      className="mt-3 mx-2 btn-danger"
                      onClick={() => {
                        removeAnswer(i, j);
                      }}
                    >
                      Delete Answer <FaTrash />
                    </Button>
                  </div>
                </>
              ))}
              <Button
                className="mt-3 mx-2 btn-success"
                onClick={() => {
                  addQuestion();
                }}
              >
                Add new question
                <FaPlus />
              </Button>
              <Button
                className="mt-3 mx-2 btn-danger"
                onClick={() => {
                  removeQuestion(i);
                }}
              >
                Delete question
                <FaTrash />
              </Button>
            </div>
          ))}
        </FormGroup>
        <h3>Please enter the test scores</h3>
        <FormGroup>
          {scores.map((score, index) => (
            <div
              key={index}
              className="border p-4 rounded border-2 border-dark my-3"
            >
              <Row className="my-2">
                <Col sm={12} md={2}>
                  <Label className="mt-2">Minimum Score</Label>
                </Col>
                <Col sm={12} md={4}>
                  <Input
                    required
                    onChange={(e) => {
                      handleScoreChange(index, e);
                    }}
                    placeholder="min score"
                    type="number"
                    name="min"
                  />
                </Col>
                <Col sm={12} md={2}>
                  <Label className="mt-2">Maximum Score</Label>
                </Col>
                <Col sm={12} md={4}>
                  <Input
                    required
                    onChange={(e) => {
                      handleScoreChange(index, e);
                    }}
                    placeholder="max score"
                    type="number"
                    name="max"
                  />
                </Col>
              </Row>
              <Row className="my-2">
                <Col sm={12} md={1}>
                  <Label className="mt-2">Result in Arabic</Label>
                </Col>
                <Col sm={12} md={5}>
                  <Input
                    required
                    onChange={(e) => {
                      handleScoreChange(index, e);
                    }}
                    placeholder="result-ar"
                    type="text"
                    name="result-ar"
                  />
                </Col>
                <Col sm={12} md={1}>
                  <Label className="mt-2">Result in English</Label>
                </Col>
                <Col sm={12} md={5}>
                  <Input
                    required
                    onChange={(e) => {
                      handleScoreChange(index, e);
                    }}
                    placeholder="result-en"
                    type="text"
                    name="result-en"
                  />
                </Col>
              </Row>
              <Row className="my-2">
                <Col sm={12} md={1}>
                  <Label className="mt-2">Description in Arabic</Label>
                </Col>
                <Col sm={12} md={5}>
                  <Input
                    required
                    onChange={(e) => {
                      handleScoreChange(index, e);
                    }}
                    placeholder="description-ar"
                    type="text"
                    name="description-ar"
                  />
                </Col>
                <Col sm={12} md={1}>
                  <Label className="mt-2">Description in English</Label>
                </Col>
                <Col sm={12} md={5}>
                  <Input
                    required
                    onChange={(e) => {
                      handleScoreChange(index, e);
                    }}
                    placeholder="description-en"
                    type="text"
                    name="description-en"
                  />
                </Col>
              </Row>
              <Button
                className="mt-3 mx-2 btn-success"
                onClick={() => {
                  addScore();
                }}
              >
                Add new score
                <FaPlus />
              </Button>
              <Button
                className="mt-3 mx-2 btn-danger"
                onClick={() => {
                  removeScore(index);
                }}
              >
                Delete score
                <FaTrash />
              </Button>
            </div>
          ))}
        </FormGroup>
      </>
      <Button type="submit" onClick={handleSubmit}>
        Submit <FaPaperPlane />
      </Button>
    </Form>
  );
}

export default AddTest;
