import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  firstName: string;

  lastName: string;

  isActive: boolean;
}
