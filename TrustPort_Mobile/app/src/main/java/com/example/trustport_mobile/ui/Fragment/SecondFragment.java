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

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        View view= inflater.inflate(R.layout.fragment_second, container, false);
        RadioGroup radioGroup = view.findViewById(R.id.group_food_place);

        // Hiển thị Fragment mặc định ("Đơn gửi")
        replaceFragment(new FragmentSend());
        radioGroup.setOnCheckedChangeListener((group, checkedId) -> {
            if (checkedId == R.id.group_place) {
                replaceFragment(new FragmentSend());
            } else if (checkedId == R.id.group_food) {
                replaceFragment(new FragmentReceive());
            }
        });
        return view;
    }
    private void replaceFragment(Fragment fragment) {
        FragmentTransaction transaction = getChildFragmentManager().beginTransaction();
        transaction.replace(R.id.child_fragment_container, fragment);
        transaction.commit();
    }

}