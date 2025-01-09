package com.example.trustport_mobile.ui.Fragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RadioGroup;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.trustport_mobile.R;
import com.example.trustport_mobile.ui.Adapters.OrderAdapter;
import com.example.trustport_mobile.ui.Models.Order;

import java.util.ArrayList;
import java.util.List;

public class SecondFragment extends Fragment {

    public SecondFragment(){
        // require a empty public constructor
    }
    private RecyclerView recyclerView;
    private OrderAdapter adapter;
    private List<Order> orderList;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        View view= inflater.inflate(R.layout.fragment_second, container, false);
        recyclerView = view.findViewById(R.id.order_list);
        recyclerView.setLayoutManager(new LinearLayoutManager(getContext()));

        // Dữ liệu mẫu cho "Đơn gửi"
        orderList = new ArrayList<>();
        orderList.add(new Order("123456789", "Giao thành công", "Dương Minh Hiền/ 082*****38",
                "📍 128 Nguyễn Thị Định", "📦 1x Chảo chống dính", "💲 200.000 đ"));
        orderList.add(new Order("987654321", "Đang giao hàng", "Nguyễn Văn A/ 091*****12",
                "📍 45 Lý Thường Kiệt", "📦 2x Bát thủy tinh", "💲 150.000 đ"));
        adapter = new OrderAdapter(orderList);
        recyclerView.setAdapter(adapter);
        return view;
    }

}