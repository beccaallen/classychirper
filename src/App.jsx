import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import moment from 'moment'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: " ",
      chirp: " ",
      chirps: [],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        chirps: [
          ...this.state.chirps,
          { id: uuidv4(), username: "Adele", chirp: "...hello it's me" },
          {
            id: uuidv4(),
            username: "Adele",
            chirp: "i've been rolling in the deep",
          },
          {
            id: uuidv4(),
            username: "Adele",
            chirp: "go easy on me...",
          },
        ],
      });
    }, 1000);
  }

  handleChirp(e) {
    e.preventDefault();
    console.log(this);
    console.log(this.state.task);
    this.setState({
      username: " ",
      chirp: " ",
      chirps: [
        ...this.state.chirps,
        {
          id: uuidv4(),
          username: this.state.username,
          chirp: this.state.chirp,
        },
      ],
    });
  }

  render() {
    return (
      <main className="container">
        <div className="row my-4">
          <h1 className="text-info">Chirper</h1>
        </div>
        <section className="row d-flex justify-content-between">
          <div className="col-4">
            <div className="mb-3 ">
              <div className="input-group">
                <div class="input-group-prepend">
                  <span className="input-group-text h-100" id="basic-addon1">
                    <AiOutlineUser />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="usernameFormInput"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-3">
              <div className="input-group">
                <div class="input-group-prepend">
                  <span className="input-group-text h-100" id="basic-addon1">
                    <FiMessageCircle />
                  </span>
                </div>
                <textarea
                  className="form-control"
                  id="chirp"
                  cols="30"
                  rows="5"
                  value={this.state.chirp}
                  onChange={(e) => this.setState({ chirp: e.target.value })}
                  style={{ resize: "none" }}
                ></textarea>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-info"
              onClick={(e) => this.handleChirp(e)}
              style={{ color: "white" }}
            >
              Chirp It!
            </button>
          </div>
          <div className="col-7 bg-info">
            <ul className="list-group">
              {this.state.chirps.map((chirp) => (
                <div className="bg-white p-3 chirpBox m-3">
                  <div className="d-flex w-100">
                    <h5 className="mb-1"> @{chirp.username}</h5>
                  </div>
                  <p className="mb-1">{chirp.chirp}</p>
                  <small className="text-muted">{moment().format('LT')}</small>
                </div>
              ))}
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
