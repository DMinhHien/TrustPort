// Generated by view binder compiler. Do not edit!
package com.example.trustport_mobile.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.SearchView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.widget.Toolbar;
import androidx.core.widget.NestedScrollView;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.example.trustport_mobile.R;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class FragmentFirstBinding implements ViewBinding {
  @NonNull
  private final NestedScrollView rootView;

  @NonNull
  public final FrameLayout bannerFrame;

  @NonNull
  public final LinearLayout btnTraCuu;

  @NonNull
  public final LinearLayout footer;

  @NonNull
  public final LinearLayout group;

  @NonNull
  public final LinearLayout group2;

  @NonNull
  public final SearchView searchView;

  @NonNull
  public final Toolbar toolbarFirstFragment;

  private FragmentFirstBinding(@NonNull NestedScrollView rootView, @NonNull FrameLayout bannerFrame,
      @NonNull LinearLayout btnTraCuu, @NonNull LinearLayout footer, @NonNull LinearLayout group,
      @NonNull LinearLayout group2, @NonNull SearchView searchView,
      @NonNull Toolbar toolbarFirstFragment) {
    this.rootView = rootView;
    this.bannerFrame = bannerFrame;
    this.btnTraCuu = btnTraCuu;
    this.footer = footer;
    this.group = group;
    this.group2 = group2;
    this.searchView = searchView;
    this.toolbarFirstFragment = toolbarFirstFragment;
  }

  @Override
  @NonNull
  public NestedScrollView getRoot() {
    return rootView;
  }

  @NonNull
  public static FragmentFirstBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static FragmentFirstBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.fragment_first, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static FragmentFirstBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.bannerFrame;
      FrameLayout bannerFrame = ViewBindings.findChildViewById(rootView, id);
      if (bannerFrame == null) {
        break missingId;
      }

      id = R.id.btnTraCuu;
      LinearLayout btnTraCuu = ViewBindings.findChildViewById(rootView, id);
      if (btnTraCuu == null) {
        break missingId;
      }

      id = R.id.footer;
      LinearLayout footer = ViewBindings.findChildViewById(rootView, id);
      if (footer == null) {
        break missingId;
      }

      id = R.id.group;
      LinearLayout group = ViewBindings.findChildViewById(rootView, id);
      if (group == null) {
        break missingId;
      }

      id = R.id.group2;
      LinearLayout group2 = ViewBindings.findChildViewById(rootView, id);
      if (group2 == null) {
        break missingId;
      }

      id = R.id.searchView;
      SearchView searchView = ViewBindings.findChildViewById(rootView, id);
      if (searchView == null) {
        break missingId;
      }

      id = R.id.toolbarFirstFragment;
      Toolbar toolbarFirstFragment = ViewBindings.findChildViewById(rootView, id);
      if (toolbarFirstFragment == null) {
        break missingId;
      }

      return new FragmentFirstBinding((NestedScrollView) rootView, bannerFrame, btnTraCuu, footer,
          group, group2, searchView, toolbarFirstFragment);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}
