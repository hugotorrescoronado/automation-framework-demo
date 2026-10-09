export class UserApi {

    constructor(
        private request: any
    ) {}

    async getUser(id: number) {

        return await this.request.get(
            `https://reqres.in/api/users/${id}`
        );
    }
}