import {
    ParentContainer,
    FormContainer,
    FormTitle,
    InputBox,
    StyledInput,
} from "./styledComponents"

const InputForm = () => {
    return (
        <>
            <ParentContainer>
                <FormContainer>
                    <form action="#">
                        <FormTitle>Login</FormTitle>
                        <InputBox>
                            <StyledInput
                                type="text"
                                placeholder="Ingresa tu email"
                                required
                            />
                        </InputBox>
                        <InputBox>
                            <StyledInput
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                required
                            />
                        </InputBox>
                        <InputBox className="button">
                            <StyledInput
                                type="submit"
                                name=""
                                value="Continue"
                            />
                        </InputBox>
                    </form>
                </FormContainer>
            </ParentContainer>
        </>
    )
}

export default InputForm
