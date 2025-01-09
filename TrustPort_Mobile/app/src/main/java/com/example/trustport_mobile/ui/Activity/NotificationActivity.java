package com.example.trustport_mobile.ui.Activity;
import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.trustport_mobile.R;
import com.example.trustport_mobile.ui.Adapters.NotificationAdapter;
import com.example.trustport_mobile.ui.Models.Notification;

import java.util.ArrayList;
import java.util.List;

public class NotificationActivity extends AppCompatActivity {

    private RecyclerView notificationRecyclerView;
    private NotificationAdapter notificationAdapter;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.fragment_notification);

        // Initialize RecyclerView
        notificationRecyclerView = findViewById(R.id.notification_recycler_view);
        notificationRecyclerView.setLayoutManager(new LinearLayoutManager(this));

        // Create sample data
        List<Notification> notificationList = new ArrayList<>();
        notificationList.add(new Notification("1", "Cảnh báo đăng nhập từ thiết bị khác", "alert", "Tài khoản của bạn đã đăng nhập trên thiết bị unknown lúc 08:15.", "3 giờ trước"));
        notificationList.add(new Notification("2", "Cùng bước tới 2025", "info", "Chúc bạn luôn hạnh phúc - thành công - mạnh khỏe.", "6 ngày trước"));
        notificationList.add(new Notification("3", "Cần rút COD ngay?", "info", "Mở app ViettelPost để rút COD nhanh chóng!", "15 ngày trước"));

        // Set adapter
        notificationAdapter = new NotificationAdapter(this, notificationList);
        notificationRecyclerView.setAdapter(notificationAdapter);
    }
}

