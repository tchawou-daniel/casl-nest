import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AbilityModule } from './ability/ability.module';

@Module({
  imports: [UserModule, AbilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
