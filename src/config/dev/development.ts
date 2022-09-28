import database from './database/index';

export default {
  // 端口
  port: parseInt(process.env.PORT, 10) || 3000,
  // 是否开启swagger
  enableSwagger: true,
  // 数据库配置
  DATABASE_CONFIG: database,
  AppID:'wx34b7397301b72166',
  AppSecret:'56cc895ed820479f16ae10a2e064f15d'
};