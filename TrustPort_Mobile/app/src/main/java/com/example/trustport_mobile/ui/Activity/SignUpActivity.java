package com.example.trustport_mobile.ui.Activity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.trustport_mobile.MainActivity;
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

                // Kiểm tra trường rỗng
                if (username.isEmpty()) {
                    usernameEditText.setError("Vui lòng nhập tên đăng nhập");
                    usernameEditText.requestFocus();
                } else if (email.isEmpty()) {
                    emailEditText.setError("Vui lòng nhập email");
                    emailEditText.requestFocus();
                } else if (password.isEmpty()) {
                    passwordEditText.setError("Vui lòng nhập mật khẩu");
                    passwordEditText.requestFocus();
                } else if (confirmPassword.isEmpty()) {
                    confirmPasswordEditText.setError("Vui lòng nhập xác nhận mật khẩu");
                    confirmPasswordEditText.requestFocus();
                } else if (!password.equals(confirmPassword)) {
                    confirmPasswordEditText.setError("Mật khẩu xác nhận không khớp");
                    confirmPasswordEditText.requestFocus();
                } else {
                    // Chuyển đến MainActivity nếu dữ liệu hợp lệ
                    Toast.makeText(SignUpActivity.this, "Đăng ký thành công!", Toast.LENGTH_SHORT).show();
                    Intent intent = new Intent(SignUpActivity.this, MainActivity.class);
                    startActivity(intent);
                    finish();
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

