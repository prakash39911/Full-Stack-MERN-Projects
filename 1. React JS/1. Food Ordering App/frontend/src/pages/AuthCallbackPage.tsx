import { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useCreateMyUser } from "@/api/MyUserApi";
import { useNavigate } from "react-router-dom";
// if we want to create the user once and we do not want this createuser function to run whenever any state changes or on component re-render, we can use useRef hook.

// useRef hook is also used to Store State. Whenever state changes of useRef hook, it Does Not re-render the component.

// useState hook is used to store state, whenever it's states changes, it re-renders the component.

const AuthCallbackPage = () => {
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();
  const navigate = useNavigate();
  const hasUserCreated = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasUserCreated.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasUserCreated.current = true;
    }
    navigate("/");
  }, [createUser, user]);

  return <>Loading....</>;
};

export default AuthCallbackPage;
