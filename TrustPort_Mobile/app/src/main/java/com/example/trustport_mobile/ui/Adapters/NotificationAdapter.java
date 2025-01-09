package com.example.trustport_mobile.ui.Adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import com.example.trustport_mobile.ui.Models.Notification;
import com.example.trustport_mobile.R;
import java.util.List;

public class NotificationAdapter extends RecyclerView.Adapter<NotificationAdapter.NotificationViewHolder> {

    private Context context;
    private List<Notification> notifications;

    public NotificationAdapter(Context context, List<Notification> notifications) {
        this.context = context;
        this.notifications = notifications;
    }

    @NonNull
    @Override
    public NotificationViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.notification_item, parent, false);
        return new NotificationViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull NotificationViewHolder holder, int position) {
        Notification notification = notifications.get(position);

        holder.titleTextView.setText(notification.getTitle());
        holder.contentTextView.setText(notification.getContent());
        holder.timeTextView.setText(notification.getTimestamp());

        // Change icon based on notification type
        if ("alert".equals(notification.getType())) {
            holder.iconImageView.setImageResource(R.drawable.alert_ic);
        } else if ("info".equals(notification.getType())) {
            holder.iconImageView.setImageResource(R.drawable.icon_info);
        } else {
            holder.iconImageView.setImageResource(R.drawable.notification_icon);
        }
    }

    @Override
    public int getItemCount() {
        return notifications.size();
    }

    public static class NotificationViewHolder extends RecyclerView.ViewHolder {

        ImageView iconImageView;
        TextView titleTextView;
        TextView contentTextView;
        TextView timeTextView;

        public NotificationViewHolder(@NonNull View itemView) {
            super(itemView);
            iconImageView = itemView.findViewById(R.id.icon);
            titleTextView = itemView.findViewById(R.id.notification_title);
            contentTextView = itemView.findViewById(R.id.notification_content);
            timeTextView = itemView.findViewById(R.id.notification_time);
        }
    }
}