import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormTitle from '../components/FormStuffs/FormTitle';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import MyButton from '../components/profile/MyButton';
import InputField from '../components/FormStuffs/InputField';
import Auth from '../utils/auth';
import FormContainer from '../components/FormStuffs/FormContainer';

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const navigate  = useNavigate();

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      navigate('/signup/profile')
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormContainer>

    <div className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
        <FormTitle title={"Sign up"} />

          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/signup/profile">to creating your Profile!</Link>
              </p>
            ) : (
               <div>
                <p>first name</p>
                 <InputField
                  placeholder={" first name..."}
                  name={"firstName"}
                  type={"text"}
                  value={formState.firstName}
                  onChange={handleChange}
                  size={"w-full mb-2 "}
                />
                <p>last name</p>
                <InputField
                  placeholder={" last name..."}
                  name={"lastName"}
                  type={"text mb-2"}
                  value={formState.lastName}
                  onChange={handleChange}
                  size={"w-full mb-2"}
                />
                <p>email</p>

                  <InputField
                      name={"email"}
                      value={formState.email}
                      onChange={handleChange}
                      type={"email"}
                      placeholder={" email..."}
                      size={"w-full mb-2"}
                    />
                <p>password</p>
                 <InputField
                      name={"password"}
                      value={formState.password}
                      onChange={handleChange}
                      type={"password"}
                      placeholder={" password..."}
                      size={"w-full "}
                    />
                   <div className="w-full mt-4">
                      <MyButton
                        size={"large"}
                        action={handleFormSubmit}
                        content={<>Submit</>}
                      />
                    </div>
                    </div>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
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

export default Signup;