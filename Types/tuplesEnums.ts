const values: [string, number] = ["kir", 5];
const RGB: [number, number, number] = [4, 5, 55];
type HttpResponse = [number, string];
const goodResponse: HttpResponse = [200, "Ok"];
// enums
enum orderStatus {
  PENDING = "PE",
  SHIPPED = "SHI",
  DELIVERED = "DE",
  RETURNED = "RE",
}

const myStatus = orderStatus.DELIVERED;
const isDelivered = (status: orderStatus) => {
  return status === orderStatus.DELIVERED;
};
isDelivered(orderStatus.DELIVERED);
