import LoginCard from "../../components/LoginCard";

export default function PlayerLogin() {
  return (
    <div className="flex justify-center items-center mt-33">
      <LoginCard
        bgColour="#AEEBFF"
        title="Welcome back, user!"
        fields={[
          {
            label: "KIIT Email-ID",
            type: "email",
            placeholder: "loremipsum@kiit.ac.in",
          },
          {
            label: "Password",
            type: "password",
            placeholder: "Enter password",
          },
        ]}
        buttonText="Login"
        buttonColour="#8EB3E4"
      />
    </div>
  );
}