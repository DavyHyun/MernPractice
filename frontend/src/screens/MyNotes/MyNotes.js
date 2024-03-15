import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link, useNavigate } from "react-router-dom";
// import ReactMarkdown from "react-markdown";

import { useDispatch, useSelector } from "react-redux";
// import { deleteNoteAction, listNotes } from "../../actions/notesActions";
// import Loading from "../../components/Loading";
// import ErrorMessage from "../../components/ErrorMessage";

function MyNotes() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  //   const noteList = useSelector((state) => state.noteList);
  //   const { loading, error, notes } = noteList;

  //   // const filteredNotes = notes.filter((note) =>
  //   //   note.title.toLowerCase().includes(search.toLowerCase())
  //   // );

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //   const noteDelete = useSelector((state) => state.noteDelete);
  //   const {
  //     loading: loadingDelete,
  //     error: errorDelete,
  //     success: successDelete,
  //   } = noteDelete;

  //   const noteCreate = useSelector((state) => state.noteCreate);
  //   const { success: successCreate } = noteCreate;

  //   const noteUpdate = useSelector((state) => state.noteUpdate);
  //   const { success: successUpdate } = noteUpdate;

  useEffect(() => {
    // dispatch(listNotes());
    if (!userInfo) {
      nav("/");
    }
  }, [dispatch, userInfo]);
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    fetch("http://localhost:3001/api/notes")
      .then((r) => r.json())
      .then((data) => {
        setNotes(data);
      });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      //   dispatch(deleteNoteAction(id));
    }
  };

  return (
    <MainScreen title="Welcome back David Hyun">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="md">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion defaultActiveKey={["0"]} key={note._id}>
          <Accordion.Item eventkey="0">
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Button as={Card.Text} variant="link">
                    {note.title}
                  </Accordion.Button>
                </span>
                <div>
                  <Button href={`/note/${note.id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={deleteHandler}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse>
                <Card.Body>
                  <h4>
                    <Badge bg="success" text="light">
                      Category - {note.category}{" "}
                    </Badge>
                  </h4>

                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Creater on - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
}

export default MyNotes;
