import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Project {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("varchar", { length: 255 })
  name!: string;
}
