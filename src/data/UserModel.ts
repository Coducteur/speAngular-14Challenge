export class User {
  constructor(
    public username: string | null,
    public email: string | null,
    public password: string | null,
    public rue: string | null,
    public cp: string | null,
    public ville: string | null
  ) {}
}
