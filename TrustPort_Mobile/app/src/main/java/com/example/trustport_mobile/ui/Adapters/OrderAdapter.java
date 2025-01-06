package com.example.trustport_mobile.ui.Adapters;

import android.content.Intent;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.trustport_mobile.R;
import com.example.trustport_mobile.ui.Activity.ChitietdonhangActivity;
import com.example.trustport_mobile.ui.Models.Order;

import java.util.List;

public class OrderAdapter extends RecyclerView.Adapter<OrderAdapter.OrderViewHolder> {

    private List<Order> orderList;
    public OrderAdapter(List<Order> orderList) {
        this.orderList = orderList;
    }

    @NonNull
    @Override
    public OrderViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.order_item, parent, false);
        return new OrderViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull OrderViewHolder holder, int position) {
        Order order = orderList.get(position);
        holder.orderId.setText(order.getOrderId());
        holder.status.setText(order.getStatus());
        holder.senderInfo.setText(order.getSenderInfo());
        holder.address.setText(order.getAddress());
        holder.product.setText(order.getProduct());
        holder.price.setText(order.getPrice());

        holder.detail_button.setOnClickListener(v -> {
            Intent intent = new Intent(holder.itemView.getContext(), ChitietdonhangActivity.class);
            holder.itemView.getContext().startActivity(intent);
        });
    }

    @Override
    public int getItemCount() {
        return orderList.size();
    }

    public static class OrderViewHolder extends RecyclerView.ViewHolder {
        TextView orderId, status, senderInfo, address, product, price;
        Button detail_button;
        public OrderViewHolder(@NonNull View itemView) {
            super(itemView);
            orderId = itemView.findViewById(R.id.tv_order_id);
            status = itemView.findViewById(R.id.tv_status);
            senderInfo = itemView.findViewById(R.id.tv_sender_info);
            address = itemView.findViewById(R.id.tv_address);
            product = itemView.findViewById(R.id.tv_product);
            price = itemView.findViewById(R.id.tv_price);
            detail_button = itemView.findViewById(R.id.btn_route);
        }
    }
}
