// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFruits = require('../../../app/controller/fruits');
import ExportHome = require('../../../app/controller/home');

declare module 'egg' {
  interface IController {
    fruits: ExportFruits;
    home: ExportHome;
  }
}
