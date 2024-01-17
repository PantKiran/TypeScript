var values = ["kir", 5];
var RGB = [4, 5, 55];
var goodResponse = [200, "Ok"];
// enums
var orderStatus;
(function (orderStatus) {
    orderStatus["PENDING"] = "PE";
    orderStatus["SHIPPED"] = "SHI";
    orderStatus["DELIVERED"] = "DE";
    orderStatus["RETURNED"] = "RE";
})(orderStatus || (orderStatus = {}));
var myStatus = orderStatus.DELIVERED;
var isDelivered = function (status) {
    return status === orderStatus.DELIVERED;
};
isDelivered(orderStatus.DELIVERED);
