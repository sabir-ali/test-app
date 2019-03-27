import { Controller, Get, Post, Authenticated, Required, BodyParams, Status, PathParams, QueryParams } from "@tsed/common";
import * as Express from "express";
import { API } from "./index.controller";
import { UserService } from "../services/user";
import { NotFound } from "ts-httpexceptions";

export interface IUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}
@Controller("/users")
export class UserController extends API {
  constructor(private userService: UserService) {
    super()
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<IUser>}
   */
  @Get("/")
  @Status(200, { description: "Success" })
  async list(@QueryParams("search") search: any) {

    const users = await this.userService.listAll(search);

    if (users) {
      return users;
    }

    throw new NotFound("User not found");
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<IUser>}
   */
  @Get("/:id")
  @Status(200, { description: "Success" })
  async get(@Required() @PathParams("id") id: string): Promise<IUser> {

    const user = await this.userService.listOne(id);

    if (user) {
      return user;
    }

    throw new NotFound("User not found");
  }
  /**
    *
    * @param id
    * @param user
    * @returns {Promise<User>}
    */
  @Post("/:id")
  @Authenticated()
  @Status(200, { description: "Success" })
  async update(
    @PathParams("id") @Required() id: string,
    @BodyParams() user: IUser
  ): Promise<IUser> {
    return this.userService.update(id, user);
  }
}