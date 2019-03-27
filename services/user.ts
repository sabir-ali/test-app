import { OnInit, Service } from "@tsed/di";
import { BeforeRoutesInit, OnRoutesInit, AfterRoutesInit, OnServerReady, ServerSettingsService, IComponentScanned } from "@tsed/common";
import knex = require("../db/knex");

@Service()
export class UserService implements OnInit, BeforeRoutesInit, OnRoutesInit, AfterRoutesInit, OnServerReady {
  private settings = {};

  constructor(
    private serverSettings: ServerSettingsService
  ) {
    this.settings = this.serverSettings.get('customServiceOptions');
  }

  $onInit(): Promise<any> | void {
    console.log('All services is ready');
  }

  $beforeRoutesInit(): Promise<any> | void {
    console.log('Controllers and routes isn\'t mounted');
  }

  $onRoutesInit(components: IComponentScanned[]): Promise<any> | void {
    console.log('Controllers and routes are being built');

  }

  $afterRoutesInit(): Promise<any> | void {
    console.log('Controllers and routes are built');
  }

  $onServerReady(): Promise<any> | void {
    console.log('Server is ready and listen the port');
  }

  public getSettings() {
    return this.settings;
  }

  public listAll(arg: any) {
    return knex('users').orderBy('id', 'asc');
  }

  public listOne(id: any) {
    return knex('users').where('id', id).first();
  }

  public save(user: any) {
    return knex('users').insert(user, '*');
  }

  public update(id: any, user: any) {
    return knex('users').where('id', id).update(user, '*');
  }

  public delete(id: any) {
    return knex('users').where('id', id).del();
  }
}