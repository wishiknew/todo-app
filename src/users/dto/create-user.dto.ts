export class CreateUserDto {
  readonly username: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly password: string;
  readonly address: string;
  readonly dateOfBirth: Date;
  readonly gender: string;
}
