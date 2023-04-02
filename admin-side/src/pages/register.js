import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/action/actionCreator";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    address: "",
  });
  const dispatch = useDispatch();

  const submitRegister = (e) => {
    e.preventDefault();
    dispatch(register(data));
  };

  const handleRegister = (e) => {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
  };

  return (
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-black-100 text-center mb-5">
                    Create an account
                  </h2>

                  <form onSubmit={(e) => submitRegister(e)}>
                    <div className="form-outline mb-4">
                      <input
                        name="username"
                        value={data.username}
                        onChange={(e) => handleRegister(e)}
                        type="text"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="form3Example1cg">
                        User Name
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        name="email"
                        value={data.email}
                        onChange={(e) => handleRegister(e)}
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="form3Example3cg">
                        Email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        name="password"
                        value={data.password}
                        onChange={(e) => handleRegister(e)}
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="form3Example4cg">
                        Password
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        name="phoneNumber"
                        value={data.phoneNumber}
                        onChange={(e) => handleRegister(e)}
                        type="number"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="form3Example1cg">
                        Phone Number
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        name="address"
                        value={data.address}
                        onChange={(e) => handleRegister(e)}
                        type="text"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="form3Example1cg">
                        Address
                      </label>
                    </div>

                    <div className="d-flex justify-content-center text-light">
                      <button
                        type="submit"
                        className="btn btn-outline-dark btn-lg"
                      >
                        Register
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

export default Register;
