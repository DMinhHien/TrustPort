package com.example.trustport_mobile.ui.Activity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.trustport_mobile.R;

public class EditUserActivity extends AppCompatActivity {

    private ImageView btnBack;
    private TextView tvTitle;
    private ImageView editProfileImage;
    private Button btnChangeImage;
    private TextView name;
    private TextView email;
    private TextView phone;
    private TextView password;
    private Button btnEdit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.edit_user);

        // Ánh xạ các view từ layout
        btnBack = findViewById(R.id.btn_back);
        tvTitle = findViewById(R.id.tv_title);
        editProfileImage = findViewById(R.id.edit_profile_image);
        btnChangeImage = findViewById(R.id.btn_change_image);
        name = findViewById(R.id.name);
        email = findViewById(R.id.email);
        phone = findViewById(R.id.phone);
        password = findViewById(R.id.password);
        btnEdit = findViewById(R.id.btn_edit_profile_confirm);

        // Xử lý sự kiện quay lại
        btnBack.setOnClickListener(v -> {
            onBackPressed();  // Quay lại activity trước đó
        });

        // Xử lý sự kiện chỉnh sửa ảnh
        btnChangeImage.setOnClickListener(v -> {
            // Thêm logic xử lý thay đổi ảnh đại diện
        });

        // Xử lý sự kiện chỉnh sửa thông tin người dùng
        btnEdit.setOnClickListener(v -> {
            Toast.makeText(EditUserActivity.this, "Chỉnh sửa thành công!", Toast.LENGTH_SHORT).show();


            finish();
        });
    }
}
