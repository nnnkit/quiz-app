import React from "react";
import { Switch, Route, Link } from "react-router-dom";

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizId: null,
      quizData: null,
      userData: null,
      options: null,
      score: 0,
      currentQuestionIndex: 0,
      done: false,
      userAnswer: null,
      error: null,
    };
  }

  getOptions = () => {
    let optionsArray = [
      ...this.state.quizData[`${this.state.currentQuestionIndex}`]
        .incorrect_answers,
    ];
    optionsArray.push(
      this.state.quizData[`${this.state.currentQuestionIndex}`].correct_answer
    );

    optionsArray.sort(() => Math.random() - 0.5);

    return optionsArray;
  };

  handleClick = (e) => {
    if (e.target.dataset.id === "next") {
      if (this.state.currentQuestionIndex < 9) {
        if (this.state.done) {
          this.setState(
            (prevState) => {
              return {
                currentQuestionIndex: prevState.currentQuestionIndex + 1,
                done: false,
              };
            },
            () => {
              this.setState({
                options: this.getOptions(),
              });
            }
          );
        } else {
          this.setState({
            error: "Select an option to proceed...",
          });
        }
      }
      else{
        //   ispe kal kaam karunga
      }
    } else {
      this.setState((prevValue) => {
        if (e.target.innerText === prevValue.userAnswer) {
          return {
            done: !prevValue.done,
            userAnswer: null,
          };
        } else {
          return {
            done: true,
            userAnswer: e.target.innerText,
            error: null,
          };
        }
      });
    }
  };

  componentDidMount() {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${this.props.match.params.id}&type=multiple`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState(
          {
            quizId: this.props.match.params.id,
            quizData: data.results,
          },
          () => {
            this.setState({
              options: this.getOptions(),
            });
          }
        );
      });
  }

  render() {
    return (
      <div className="quiz">
        <div className="title my-5 has-text-info-dark">
          Category:{" "}
          <span>
            {this.state.quizId ? this.state.quizData[0].category : "loading..."}
          </span>{" "}
        </div>
        <div class="columns is-centered is-multiline mx-4 py-6">
          {this.state.quizId ? (
            <div className="column is-10">
              <div className="subtitle has-text-success-dark">
                Question {this.state.currentQuestionIndex + 1}/10{" "}
              </div>
              <progress
                class="progress is-success"
                value={(this.state.currentQuestionIndex + 1) * 10}
                max="100"
              ></progress>
              <div>
                <div className="is-size-4 has-text-weight-bold box has-background-info-light">
                  {
                    this.state.quizData[`${this.state.currentQuestionIndex}`]
                      .question
                  }
                </div>
                {this.state.options
                  ? this.state.options.map((option) => {
                      return (
                        <div
                          className={
                            this.state.userAnswer === option
                              ? `button is-fullwidth is-grey is-light my-5 py-5 has-background-success`
                              : `button is-fullwidth is-grey is-light my-5 py-5`
                          }
                          onClick={this.handleClick}
                        >
                          {option}
                        </div>
                      );
                    })
                  : "Loading..."}
              </div>

              {this.state.error ? (
                <div className="has-text-danger has-text-centered">
                  {this.state.error}
                </div>
              ) : (
                ""
              )}
              <div className="level">
                <div className="level-left"></div>
                <div className="level-right">
                  <div
                    data-id="next"
                    className="button px-6 is-primary"
                    onClick={this.handleClick}
                  >
                    Next
                  </div>
                </div>
              </div>
            </div>
          ) : (
            "Starting Quiz..."
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
