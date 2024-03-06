import { loginWelcome } from "./loginWelcome";

describe('loginwelcome', () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;


    it('Deve exibir um alert com o texto Seja bem vindo, nome da pessoa', () => {
        loginWelcome('Sansão');
        expect(mockAlert).toHaveBeenCalledWith('Seja bem vindo, Sansão!');
    })
})
