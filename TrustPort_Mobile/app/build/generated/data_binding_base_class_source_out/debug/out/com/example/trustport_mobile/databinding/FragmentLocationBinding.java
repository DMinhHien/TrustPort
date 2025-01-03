// Generated by view binder compiler. Do not edit!
package com.example.trustport_mobile.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;
import android.widget.SearchView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.example.trustport_mobile.R;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class FragmentLocationBinding implements ViewBinding {
  @NonNull
  private final CoordinatorLayout rootView;

  @NonNull
  public final ConstraintLayout main;

  @NonNull
  public final ProgressBar progressLocation;

  @NonNull
  public final RecyclerView recyclerLocation;

  @NonNull
  public final SearchView searchView;

  private FragmentLocationBinding(@NonNull CoordinatorLayout rootView,
      @NonNull ConstraintLayout main, @NonNull ProgressBar progressLocation,
      @NonNull RecyclerView recyclerLocation, @NonNull SearchView searchView) {
    this.rootView = rootView;
    this.main = main;
    this.progressLocation = progressLocation;
    this.recyclerLocation = recyclerLocation;
    this.searchView = searchView;
  }

  @Override
  @NonNull
  public CoordinatorLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static FragmentLocationBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static FragmentLocationBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.fragment_location, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static FragmentLocationBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.main;
      ConstraintLayout main = ViewBindings.findChildViewById(rootView, id);
      if (main == null) {
        break missingId;
      }

      id = R.id.progressLocation;
      ProgressBar progressLocation = ViewBindings.findChildViewById(rootView, id);
      if (progressLocation == null) {
        break missingId;
      }

      id = R.id.recyclerLocation;
      RecyclerView recyclerLocation = ViewBindings.findChildViewById(rootView, id);
      if (recyclerLocation == null) {
        break missingId;
      }

      id = R.id.searchView;
      SearchView searchView = ViewBindings.findChildViewById(rootView, id);
      if (searchView == null) {
        break missingId;
      }

      return new FragmentLocationBinding((CoordinatorLayout) rootView, main, progressLocation,
          recyclerLocation, searchView);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}
