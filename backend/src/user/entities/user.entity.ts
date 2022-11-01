import * as bcrypt from "bcrypt";
import { Task } from "src/task/entities/task.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
@Entity("tbl_user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ nullable: true, type: "varchar", default: "" })
  name: string;
  @Column({ nullable: true, type: "varchar", default: "" })
  email: string;
  @Column()
  password: string;
  @Column()
  status: boolean;
  @Column()
  confirmationToken: string;
  @Column({ nullable: true, type: "varchar", default: "" })
  salt: string;
  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updateAt: Date;
  @ManyToOne(() => Task, (task) => task.users)
  task: Task;

  async checkPassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
