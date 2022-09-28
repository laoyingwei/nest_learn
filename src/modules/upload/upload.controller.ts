import { Controller, HttpException, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import multer = require('multer');
import { NoAuth } from 'src/common/decorator/customize';
const fs = require('fs')
const path = require('path')
const storage = multer.diskStorage({
   
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
@Controller('upload')

export class UploadController {
    // constructor (
    //     private readonly mull:Multer
    // ) {}
    @Post()
    @NoAuth()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File ) {
        debugger
    
    }
}
