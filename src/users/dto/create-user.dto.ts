import { IsString, IsArray } from 'class-validator';
import { ObjectID } from 'typeorm';

export class CreateUserDto {
  @IsString()
  readonly id: ObjectID;

  @IsString()
  readonly username: string;

  // @IsArray()
  // readonly roles: ('admin' | 'user')[];
}
