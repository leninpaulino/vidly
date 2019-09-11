import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    {
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>,
      key: "title"
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies } = this.props;
    return (
      <Table
        data={movies}
        columns={this.columns}
        sortColumn={this.props.sortColumn}
        onSort={this.props.onSort}
      />
    );
  }
}

export default MoviesTable;
