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
import com.example.trustport_mobile.ui.Activity.TraCuuActivity;

public class FirstFragment extends Fragment {

    public FirstFragment(){
        // require a empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_first, container, false);
        LinearLayout btnTracuu = view.findViewById(R.id.btnTraCuu);

        btnTracuu.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), TraCuuActivity.class);
                startActivity(intent);
            }
        });
        return view;
    }


}