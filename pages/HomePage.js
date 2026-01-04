export default class HomePage{


    constructor(page){

        this.page = page;
        this.loginHere = page.getByText("Login Here");
        this.register = page.getByText("Register");

    }

    async clickOnLogin(){

        await this.loginHere.click();

    }

    async clickOnRegister(){

        await this.register.click();

    }

}