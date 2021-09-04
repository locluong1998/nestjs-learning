import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: ObjectID;

  @Column()
  username: string;

  // @Column()
  // roles: ('admin' | 'user')[];
}
