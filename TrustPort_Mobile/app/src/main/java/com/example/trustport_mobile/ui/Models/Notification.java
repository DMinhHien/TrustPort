package com.example.trustport_mobile.ui.Models;

public class Notification {
    private String id;
    private String title;
    private String type;
    private String content;
    private String timestamp;

    public Notification(String id, String title, String type, String content, String timestamp) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.content = content;
        this.timestamp = timestamp;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getType() {
        return type;
    }

    public String getContent() {
        return content;
    }

    public String getTimestamp() {
        return timestamp;
    }
}
