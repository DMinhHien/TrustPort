package com.example.trustport_mobile.ui.Activity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.example.trustport_mobile.R;

public class ChitietdonhangActivity extends AppCompatActivity {
    private TextView changeAddressText;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chitiethanghoa);

        changeAddressText = findViewById(R.id.text_change_address);
        changeAddressText.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Khởi tạo Intent để chuyển đến Activity thay đổi địa chỉ
                Intent intent = new Intent(ChitietdonhangActivity.this, SuadiachinhanhangActivity.class);
                startActivity(intent);
            }
        });
    }
}
