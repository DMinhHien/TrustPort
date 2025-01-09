package com.example.trustport_mobile.ui.Fragment;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;

import androidx.fragment.app.Fragment;

import com.example.trustport_mobile.R;
import com.example.trustport_mobile.ui.Activity.EditUserActivity;
import com.example.trustport_mobile.ui.Activity.LoginActivity;

public class ThirdFragment extends Fragment {

    public ThirdFragment(){
        // require a empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_third, container, false);

        // Xử lý sự kiện đăng xuất
        LinearLayout logoutLayout = view.findViewById(R.id.logout_layout); // Xác định layout của đăng xuất
        logoutLayout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Quay về LoginActivity khi đăng xuất
                Intent intent = new Intent(getActivity(), LoginActivity.class);
                startActivity(intent);
                getActivity().finish(); // Đảm bảo không quay lại Fragment khi nhấn nút quay lại
            }
        });
        // Thêm sự kiện click cho nút Chỉnh sửa
        Button editProfileButton = view.findViewById(R.id.btn_edit_profile);
        editProfileButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Chuyển đến EditUserActivity khi ấn nút Chỉnh sửa
                Intent intent = new Intent(getActivity(), EditUserActivity.class);
                startActivity(intent);
            }
        });
        return view;
    }


}