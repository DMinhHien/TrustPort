package com.example.trustport_mobile.ui.Activity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import androidx.appcompat.app.AppCompatActivity;

import com.example.trustport_mobile.R;

public class TraCuuActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_search_order);

        EditText editTextOrderId = findViewById(R.id.id); // ID của EditText
        Button buttonSearch = findViewById(R.id.btn_edit_profile); // ID của nút Tra cứu

        buttonSearch.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String orderId = editTextOrderId.getText().toString();
                if (!orderId.isEmpty()) {
                    Intent intent = new Intent(TraCuuActivity.this, ChitietdonhangActivity.class);
                    intent.putExtra("ORDER_ID", orderId); // Gửi mã đơn hàng sang Activity chi tiết
                    startActivity(intent);
                } else {
                    editTextOrderId.setError("Vui lòng nhập mã đơn hàng");
                }
            }
        });
    }
}
