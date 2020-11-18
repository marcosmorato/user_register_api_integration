const Register = ({ register, setRegister }) => {
  return (
    <div>
      teste3
      <button
        onClick={() => {
          setRegister(true);
        }}
      >
        register
      </button>
    </div>
  );
};

export default Register;
