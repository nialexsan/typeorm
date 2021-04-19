import { DriverTypes } from "../../driver"
import { AnyEntity } from "../../entity"
import { WhereOptions } from "../where-options"
import { FindOptionsMany } from "./find-options-many"
import { FindOptionsOrder } from "./find-options-order"
import { FindOptionsSelect } from "./find-options-select"

/**
 * Function type that produces FindOptions.
 * This function also contains functions that help to build FindOptions sub-objects.
 */
export type FindOptionsBuilder<
  Types extends DriverTypes,
  Entity extends AnyEntity
> = {
  /**
   * Creates a FindOptionsMany object.
   */
  <Options extends FindOptionsMany<Types, Entity>>(options: Options): Options

  /**
   * Creates a FindOptionsSelect object.
   */
  select<Select extends FindOptionsSelect<Entity>>(select: Select): Select

  /**
   * Creates a FindOptionsWhere object.
   */
  where<Where extends WhereOptions<Types, Entity>>(where: Where): Where

  /**
   * Creates a FindOptionsOrder object.
   */
  order<Order extends FindOptionsOrder<Types, Entity>>(order: Order): Order
}
