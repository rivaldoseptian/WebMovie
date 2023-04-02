import { BaseUrl } from "../../component/baseUrl";
import { MOVIE_FETCH_SUCCES } from "./actionType";
import { GENRE_FETCH_SUCCES } from "./actionType";

export const fectMovie = (payload) => {
  return {
    type: MOVIE_FETCH_SUCCES,
    payload,
  };
};

export const fetchGenre = (payload) => {
  return {
    type: GENRE_FETCH_SUCCES,
    payload,
  };
};

export const showMovie = () => {
  return (dispatch, getState) => {
    fetch(BaseUrl + "/movies/fetchmovie", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then(async (res) => {
        if (!res.ok) throw await res.text();
        return res.json();
      })
      .then((data) => {
        const action = fectMovie(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteMovie = (id) => {
  return (dispatch) => {
    fetch(BaseUrl + "/movies/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then(async (res) => {
        if (!res.ok) throw await res.text();
        return res.json();
      })
      .then((data) => {
        dispatch(showMovie());
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const createMovie = (formData) => {
  return (dispatch) => {
    return fetch(BaseUrl + "/movies/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        if (!res.ok) throw await res.text();
        return res.json();
      })
      .then((data) => {
        dispatch(showMovie());
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const editMovie = (id, formData) => {
  return (dispatch) => {
    return fetch(BaseUrl + "/movies/edit/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(formData),
    })
      .then((data) => {
        dispatch(showMovie());
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const showGenre = () => {
  return (dispatch) => {
    fetch(BaseUrl + "/genres/fetchgenre", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then(async (res) => {
        if (!res.ok) throw await res.text();
        return res.json();
      })
      .then((data) => {
        const action = fetchGenre(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteGenre = (id) => {
  return (dispatch) => {
    fetch(BaseUrl + "/genres/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then(async (res) => {
        if (!res.ok) throw await res.text();
        return res.json();
      })
      .then((data) => {
        dispatch(showGenre());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addGenre = (data) => {
  return (dispatch) => {
    return fetch(BaseUrl + "/genres/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (!res.ok) throw await res.text();
        return res.json();
      })
      .then((data) => {
        dispatch(showGenre());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const register = (data) => {
  return (dispatch) => {
    fetch(BaseUrl + "/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (!res.ok) throw await res.text();
        return res.json();
      })
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

export const login = (data) => {
  return (dispatch) => {
    return fetch(BaseUrl + "/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (!res.ok) throw await res.text();
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
