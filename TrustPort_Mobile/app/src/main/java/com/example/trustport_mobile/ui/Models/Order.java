package com.example.trustport_mobile.ui.Models;

public class Order {
    private String orderId;
    private String status;
    private String senderInfo;
    private String address;
    private String product;
    private String price;

    public Order(String orderId, String status, String senderInfo, String address, String product, String price) {
        this.orderId = orderId;
        this.status = status;
        this.senderInfo = senderInfo;
        this.address = address;
        this.product = product;
        this.price = price;
    }

    public String getOrderId() { return orderId; }
    public String getStatus() { return status; }
    public String getSenderInfo() { return senderInfo; }
    public String getAddress() { return address; }
    public String getProduct() { return product; }
    public String getPrice() { return price; }
}

