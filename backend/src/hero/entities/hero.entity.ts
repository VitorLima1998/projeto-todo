import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tbl_hero")
export class Hero {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
  @Column()
  power: string;
}
