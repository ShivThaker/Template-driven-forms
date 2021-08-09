export class User {
    constructor (
        public name: string,
        public email: string,
        public phone: number,
        public activity: string,
        public timePreference: string,
        public subs: boolean
    ) {}
}
