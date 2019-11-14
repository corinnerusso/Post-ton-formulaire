import React, { Component } from "react";

class FormFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Film ajouté avec l'ID ${res}!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("Erreur lors de la saisie");
      });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="FormEmployee">
          <h1>Saisi d'un film</h1>

          <form onSubmit={this.submitForm}>
            <fieldset>
              <legend>Détails</legend>
              <div className="form-data">
                <label htmlFor="ftitle">Nom du film</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={this.onChange}
                  value={this.state.title}
                />
              </div>

              <div className="form-data">
                <label htmlFor="poster">URL du poster film</label>
                <input
                  type="text"
                  id="poster"
                  name="poster"
                  onChange={this.onChange}
                  value={this.state.poster}
                />
              </div>

              <div className="form-data">
                <label htmlFor="comment">Pourquoi tu aimes ce film ?</label>
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  onChange={this.onChange}
                  value={this.state.comment}
                />
              </div>
              <hr />
              <div className="form-data">
                <input type="submit" value="Envoyer" />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default FormFilm;
