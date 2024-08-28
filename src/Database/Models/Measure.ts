import { Model, STRING, BOOLEAN, DATE } from "sequelize";
import db from ".";

class Measure extends Model {
  public measure_uuid!: string;
  public image_url!: string;
  public customer_code!: string;
  public measure_value!: string;
  public measure_type!: "WATER" | "GAS";
  public measure_datetime!: Date;
  public has_confirmed!: boolean;
}

Measure.init(
  {
    measure_uuid: {
      allowNull: false,
      primaryKey: true,
      type: STRING(36),
    },
    image_url: {
      allowNull: false,
      type: STRING,
    },
    customer_code: {
      allowNull: false,
      type: STRING,
    },
    measure_value: {
      allowNull: false,
      type: STRING,
    },
    measure_type: {
      allowNull: false,
      type: STRING(4),
    },
    measure_datetime: {
      allowNull: false,
      type: DATE,
    },
    has_confirmed: {
      allowNull: false,
      type: BOOLEAN,
    },
  },
  {
    sequelize: db,
    modelName: "Measure",
    tableName: "measures",
    timestamps: false,
  }
);

export default Measure;
