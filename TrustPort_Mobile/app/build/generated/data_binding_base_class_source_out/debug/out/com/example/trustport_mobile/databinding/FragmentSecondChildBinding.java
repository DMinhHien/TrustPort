// Generated by view binder compiler. Do not edit!
package com.example.trustport_mobile.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.example.trustport_mobile.R;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class FragmentSecondChildBinding implements ViewBinding {
  @NonNull
  private final LinearLayout rootView;

  @NonNull
  public final RecyclerView childRecyclerView;

  @NonNull
  public final TextView textOrder;

  private FragmentSecondChildBinding(@NonNull LinearLayout rootView,
      @NonNull RecyclerView childRecyclerView, @NonNull TextView textOrder) {
    this.rootView = rootView;
    this.childRecyclerView = childRecyclerView;
    this.textOrder = textOrder;
  }

  @Override
  @NonNull
  public LinearLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static FragmentSecondChildBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static FragmentSecondChildBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.fragment_second_child, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static FragmentSecondChildBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.child_recycler_view;
      RecyclerView childRecyclerView = ViewBindings.findChildViewById(rootView, id);
      if (childRecyclerView == null) {
        break missingId;
      }

      id = R.id.text_order;
      TextView textOrder = ViewBindings.findChildViewById(rootView, id);
      if (textOrder == null) {
        break missingId;
      }

      return new FragmentSecondChildBinding((LinearLayout) rootView, childRecyclerView, textOrder);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}
