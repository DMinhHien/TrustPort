package com.example.trustport_mobile.ui.Activity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import com.example.trustport_mobile.R;

public class SignUpActivity extends AppCompatActivity {

    private EditText usernameEditText, emailEditText, passwordEditText, confirmPasswordEditText;
    private Button signUpButton;
    private TextView backToLoginTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        // Lấy các thành phần giao diện
        usernameEditText = findViewById(R.id.username);
        emailEditText = findViewById(R.id.email);
        passwordEditText = findViewById(R.id.password);
        confirmPasswordEditText = findViewById(R.id.confirm_password);
        signUpButton = findViewById(R.id.signup_button);
        backToLoginTextView = findViewById(R.id.back_to_login);

        // Xử lý sự kiện "Đăng ký"
        signUpButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String username = usernameEditText.getText().toString();
                String email = emailEditText.getText().toString();
                String password = passwordEditText.getText().toString();
                String confirmPassword = confirmPasswordEditText.getText().toString();

                // Kiểm tra dữ liệu hợp lệ và xử lý logic đăng ký
                if (username.isEmpty() || email.isEmpty() || password.isEmpty() || confirmPassword.isEmpty()) {
                    // Hiển thị thông báo lỗi nếu thiếu dữ liệu
                } else if (!password.equals(confirmPassword)) {
                    // Hiển thị thông báo lỗi nếu mật khẩu không khớp
                } else {
                    // Thực hiện logic đăng ký (gửi dữ liệu đến server, v.v.)
                }
            }
        });

        // Xử lý sự kiện "Quay lại Đăng nhập"
        backToLoginTextView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Kết thúc màn hình hiện tại để quay lại màn hình đăng nhập
                finish();
            }
        });
    }
}

