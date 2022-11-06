import styled from "styled-components";

function FormBox({ children, onSubmit }) {
  return (
    <FormBoxWrapper>
      <Form onSubmit={onSubmit} noValidate>
        {children}
      </Form>
    </FormBoxWrapper>
  );
}

export default FormBox;

const FormBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  h3 {
    margin-bottom: 40px;

    font-size: 1.4rem;
    font-weight: 700;
  }
`;

const Form = styled.form`
  width: 300px;
  padding: 50px 10px;
  border: 1px solid black;
  border-radius: 4px;

  text-align: center;
`;
