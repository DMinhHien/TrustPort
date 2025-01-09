// Generated by view binder compiler. Do not edit!
package com.example.trustport_mobile.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.widget.Toolbar;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.example.trustport_mobile.R;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class ActivitySearchOrderBinding implements ViewBinding {
  @NonNull
  private final ConstraintLayout rootView;

  @NonNull
  public final Button btnEditProfile;

  @NonNull
  public final EditText id;

  @NonNull
  public final TextView textOrder;

  @NonNull
  public final TextView textTitle;

  @NonNull
  public final TextView textTitle2;

  @NonNull
  public final Toolbar toolbarOrderSearch;

  private ActivitySearchOrderBinding(@NonNull ConstraintLayout rootView,
      @NonNull Button btnEditProfile, @NonNull EditText id, @NonNull TextView textOrder,
      @NonNull TextView textTitle, @NonNull TextView textTitle2,
      @NonNull Toolbar toolbarOrderSearch) {
    this.rootView = rootView;
    this.btnEditProfile = btnEditProfile;
    this.id = id;
    this.textOrder = textOrder;
    this.textTitle = textTitle;
    this.textTitle2 = textTitle2;
    this.toolbarOrderSearch = toolbarOrderSearch;
  }

  @Override
  @NonNull
  public ConstraintLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static ActivitySearchOrderBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static ActivitySearchOrderBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.activity_search_order, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static ActivitySearchOrderBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.btn_edit_profile;
      Button btnEditProfile = ViewBindings.findChildViewById(rootView, id);
      if (btnEditProfile == null) {
        break missingId;
      }

      id = R.id.id;
      EditText id_ = ViewBindings.findChildViewById(rootView, id);
      if (id_ == null) {
        break missingId;
      }

      id = R.id.text_order;
      TextView textOrder = ViewBindings.findChildViewById(rootView, id);
      if (textOrder == null) {
        break missingId;
      }

      id = R.id.text_title;
      TextView textTitle = ViewBindings.findChildViewById(rootView, id);
      if (textTitle == null) {
        break missingId;
      }

      id = R.id.text_title_2;
      TextView textTitle2 = ViewBindings.findChildViewById(rootView, id);
      if (textTitle2 == null) {
        break missingId;
      }

      id = R.id.toolbarOrderSearch;
      Toolbar toolbarOrderSearch = ViewBindings.findChildViewById(rootView, id);
      if (toolbarOrderSearch == null) {
        break missingId;
      }

      return new ActivitySearchOrderBinding((ConstraintLayout) rootView, btnEditProfile, id_,
          textOrder, textTitle, textTitle2, toolbarOrderSearch);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}
