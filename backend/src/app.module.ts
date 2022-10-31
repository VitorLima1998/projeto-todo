import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AuthModule } from "./auth/auth.module";
import { Task } from "./task/entities/task.entity";
import { TaskModule } from "./task/task.module";

import { User } from "./user/entities/user.entity";
import { UserModule } from "./user/user.module";
import { Hero } from "./hero/entities/hero.entity";
import { HeroModule } from "./hero/hero.module";

//jrcampos82
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "admin",
      database: "todolist",
      entities: [User, Task, Hero],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    TaskModule,
    AuthModule,
    HeroModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
