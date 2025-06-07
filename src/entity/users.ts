import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: UUID;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  age!: number;
}
