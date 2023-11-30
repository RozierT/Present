import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import MyButton from "../components/profile/MyButton";
import Auth from "../utils/auth";
import InputField from "../components/FormStuffs/InputField";
import FormContainer from "../components/FormStuffs/FormContainer";
import FormTitle from "../components/FormStuffs/FormTitle";

const Login = () => {
    const [formState, setFormState] = useState({ email: "", password: "" });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const navigate  = useNavigate();

    // update state based on form input changes
    const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
        ...formState,
        [name]: value,
    });
    };

    // submit form
    const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
        const { data } = await login({
        variables: { ...formState },
        });

        Auth.login(data.login.token);
        navigate('/feed')
    } catch (e) {
        console.error(e);
    }

    // clear form values
    setFormState({
        email: "",
        password: "",
    });
    };

return (
    <FormContainer>
        <div className='flex-row justify-center mb-4'>
          <div className='col-12 col-lg-10'>
            <div className='card'>
              <FormTitle title={"Login"} />
              <div className='card-body'>
                {data ? (
                  <p>
                    Success! You may now head{" "}
                    <Link to='/'>back to the homepage.</Link>
                  </p>
                ) : (
                  <div>

                <p>email</p>
                <InputField
                      name={"email"}
                      value={formState.email}
                      onChange={handleChange}
                      type={"email"}
                      placeholder={" email..."}
                      size={"w-full"}
                    />
                   
                <p>password</p>
                <InputField
                      name={"password"}
                      value={formState.password}
                      onChange={handleChange}
                      type={"password"}
                      placeholder={" password..."}
                      size={"w-full mb-2"}
                    />
                  

                 
                  <MyButton
                        size={"large"}
                        action={handleFormSubmit}
                        content={<>Submit</>}
                      />
                    <div className="flex justify-center mt-2">
                      <Link to='/signup'>new user?</Link>
                    </div>
                  </div>
                )}

                {error && (
                  <div className='my-3 p-3 bg-danger text-white'>
                    {error.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
    </FormContainer>
  );
};

export default Login;
