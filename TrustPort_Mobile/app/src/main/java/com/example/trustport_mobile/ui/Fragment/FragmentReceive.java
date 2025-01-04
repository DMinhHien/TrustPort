package com.example.trustport_mobile.ui.Fragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.trustport_mobile.R;
import com.example.trustport_mobile.ui.Adapters.OrderAdapter;
import com.example.trustport_mobile.ui.Models.Order;

import java.util.ArrayList;
import java.util.List;

public class FragmentReceive extends Fragment {

    private RecyclerView recyclerView;
    private OrderAdapter adapter;
    private List<Order> orderList;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_second_child, container, false);

        recyclerView = view.findViewById(R.id.child_recycler_view);
        recyclerView.setLayoutManager(new LinearLayoutManager(getContext()));

        // Dữ liệu mẫu cho "Đơn nhận"
        orderList = new ArrayList<>();
        orderList.add(new Order("987654321", "Đang giao", "Nguyễn Văn A/ 091*****12",
                "📍 45 Lý Thường Kiệt", "📦 2x Bát thủy tinh", "💲 150.000 đ"));
        adapter = new OrderAdapter(orderList);
        recyclerView.setAdapter(adapter);

        return view;
    }
}