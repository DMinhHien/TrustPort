package com.example.trustport_mobile.ui.Activity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.trustport_mobile.R;

public class SuadiachinhanhangActivity extends AppCompatActivity {
    private EditText editTextHoTen, editTextSoDienThoai, editTextDiaChiCuThe, editTextDuongThonXom;
    private Spinner spinnerTinhThanh, spinnerQuanHuyen, spinnerPhuongXa;
    private Button btnXacNhan;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_suadiachinhanhang);

        editTextHoTen = findViewById(R.id.editTextHoTen);
        editTextSoDienThoai = findViewById(R.id.editTextSoDienThoai);
        editTextDiaChiCuThe = findViewById(R.id.editTextDiaChiCuThe);
        editTextDuongThonXom = findViewById(R.id.editTextDuongThonXom);
        spinnerTinhThanh = findViewById(R.id.spinnerTinhThanh);
        spinnerQuanHuyen = findViewById(R.id.spinnerQuanHuyen);
        spinnerPhuongXa = findViewById(R.id.spinnerPhuongXa);
        btnXacNhan = findViewById(R.id.btnXacNhan);

        String[] tinhThanh = {"Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Cần Thơ"};
        String[] quanHuyen = {"Quận 1", "Quận 2", "Quận 3", "Quận 4"};
        String[] phuongXa = {"Phường 1", "Phường 2", "Phường 3", "Phường 4"};

        ArrayAdapter<String> adapterTinhThanh = new ArrayAdapter<>(this, android.R.layout.simple_spinner_dropdown_item, tinhThanh);
        ArrayAdapter<String> adapterQuanHuyen = new ArrayAdapter<>(this, android.R.layout.simple_spinner_dropdown_item, quanHuyen);
        ArrayAdapter<String> adapterPhuongXa = new ArrayAdapter<>(this, android.R.layout.simple_spinner_dropdown_item, phuongXa);

        spinnerTinhThanh.setAdapter(adapterTinhThanh);
        spinnerQuanHuyen.setAdapter(adapterQuanHuyen);
        spinnerPhuongXa.setAdapter(adapterPhuongXa);


        btnXacNhan.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Log.d("TAG", "Nút xác nhận đã được nhấn");
                // Lấy dữ liệu từ các trường
//                String hoTen = editTextHoTen.getText().toString().trim();
//                String soDienThoai = editTextSoDienThoai.getText().toString().trim();
//                String diaChiCuThe = editTextDiaChiCuThe.getText().toString().trim();
//                String duongThonXom = editTextDuongThonXom.getText().toString().trim();
//                String tinhThanh = spinnerTinhThanh.getSelectedItem().toString();
//                String quanHuyen = spinnerQuanHuyen.getSelectedItem().toString();
//                String phuongXa = spinnerPhuongXa.getSelectedItem().toString();

                // Hiển thị thông báo
                Toast.makeText(SuadiachinhanhangActivity.this, "Đã lưu địa chỉ!", Toast.LENGTH_SHORT).show();

                // Thực hiện thêm logic nếu cần, ví dụ: Lưu vào cơ sở dữ liệu hoặc gửi lên server
                finish();
            }
        });
    }
}
