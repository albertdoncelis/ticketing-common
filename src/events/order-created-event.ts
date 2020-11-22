import {Subjects} from "./subjects";
import {OrderStatus} from "./types/order-status";

export interface OrderCreatedEvent {
  readonly subject: Subjects.OrderCreated

  readonly data: {
    id: string,
    status: OrderStatus.Created,
    userId: string,
    expiresAt: string,
    ticket: {
      id: string,
      price: number
    }
  }
}