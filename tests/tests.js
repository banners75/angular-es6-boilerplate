import angular from "angular";
import angularMocks from "angular-mocks";
import { HomeController } from "../app/home/home.controller.js";

//import any stubs / mocks here

var app = angular.module("app", []);
app.controller("homeController", HomeController);
