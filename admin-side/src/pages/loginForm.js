import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/action/actionCreator";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(login(data)).then(() => {
      navigate("/");
    });
  };

  const handlerLogin = (e) => {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
  };

  return (
    <section className="vh-100 ">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1em" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>
                  <form onSubmit={(e) => submitLogin(e)}>
                    <div className="form-outline form-white mb-4">
                      <input
                        value={data.email}
                        name="email"
                        onChange={(e) => handlerLogin(e)}
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        name="password"
                        value={data.password}
                        onChange={(e) => handlerLogin(e)}
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typePasswordX">
                        Password
                      </label>
                    </div>

                    <div className="d-flex justify-content-center text-light">
                      <button
                        type="submit"
                        className="btn btn-outline-light btn-lg px-5"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
