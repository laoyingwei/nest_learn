import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { UserModule } from '../../../modules/user/user.module';
import { AuthController } from './auth.controller';
import {  ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios'
import { MemberModule } from 'src/modules/member/member.module';
@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
    ConfigModule,
    HttpModule,
    MemberModule
    
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, PassportModule, JwtModule],
  controllers: [AuthController]
})
export class AuthModule { }
