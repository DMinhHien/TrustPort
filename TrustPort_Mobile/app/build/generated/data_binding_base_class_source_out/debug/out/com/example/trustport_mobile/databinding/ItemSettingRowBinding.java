// Generated by view binder compiler. Do not edit!
package com.example.trustport_mobile.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.example.trustport_mobile.R;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class ItemSettingRowBinding implements ViewBinding {
  @NonNull
  private final LinearLayout rootView;

  @NonNull
  public final ImageView ivArrow;

  @NonNull
  public final ImageView ivIcon;

  @NonNull
  public final TextView tvTitle;

  private ItemSettingRowBinding(@NonNull LinearLayout rootView, @NonNull ImageView ivArrow,
      @NonNull ImageView ivIcon, @NonNull TextView tvTitle) {
    this.rootView = rootView;
    this.ivArrow = ivArrow;
    this.ivIcon = ivIcon;
    this.tvTitle = tvTitle;
  }

  @Override
  @NonNull
  public LinearLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static ItemSettingRowBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static ItemSettingRowBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.item_setting_row, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static ItemSettingRowBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.iv_arrow;
      ImageView ivArrow = ViewBindings.findChildViewById(rootView, id);
      if (ivArrow == null) {
        break missingId;
      }

      id = R.id.iv_icon;
      ImageView ivIcon = ViewBindings.findChildViewById(rootView, id);
      if (ivIcon == null) {
        break missingId;
      }

      id = R.id.tv_title;
      TextView tvTitle = ViewBindings.findChildViewById(rootView, id);
      if (tvTitle == null) {
        break missingId;
      }

      return new ItemSettingRowBinding((LinearLayout) rootView, ivArrow, ivIcon, tvTitle);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}
