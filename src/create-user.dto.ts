import { IsString } from 'class-validator';
import { ObjectID } from 'typeorm';

export class CreateUserDto {
  @IsString()
  readonly id: ObjectID;

  @IsString()
  readonly username: string;
}
